import { aiSystemPrompt, portfolioContext } from "@/data/portfolioContext";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
  error?: {
    message?: string;
    status?: string;
  };
};

const geminiEndpoint = "https://generativelanguage.googleapis.com/v1beta";
const defaultModel = "gemini-2.0-flash-lite";

function getGeminiErrorMessage(response: Response, message = "") {
  if (response.status === 429 || message.includes("quota")) {
    return "La cuota de Gemini esta agotada o no esta habilitada para esta API key. Revisa el plan, billing o los limites del proyecto en Google AI Studio.";
  }

  if (response.status === 404 || message.includes("no longer available")) {
    return "El modelo configurado de Gemini no esta disponible para esta API key. Configura GEMINI_MODEL con un modelo disponible para generateContent.";
  }

  if (response.status === 400) {
    return "Gemini rechazo la solicitud. Revisa la configuracion del modelo y el formato del mensaje.";
  }

  if (response.status === 403) {
    return "La API key de Gemini no tiene permisos para generar respuestas.";
  }

  return "No pude procesar la pregunta en este momento.";
}

function sanitizeHistory(history: ChatMessage[] = []) {
  return history
    .filter((message) => message.text.trim().length > 0)
    .slice(-8)
    .map((message) => ({
      role: message.role,
      parts: [{ text: message.text.slice(0, 1200) }],
    }));
}

export async function askGemini({
  message,
  history = [],
}: {
  message: string;
  history?: ChatMessage[];
}) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const model = process.env.GEMINI_MODEL || defaultModel;
  const response = await fetch(
    `${geminiEndpoint}/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [
            {
              text: `${aiSystemPrompt}\n\nContexto del portafolio:\n${portfolioContext}`,
            },
          ],
        },
        contents: [
          ...sanitizeHistory(history),
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          topP: 0.8,
          maxOutputTokens: 600,
        },
      }),
    },
  );

  const data = (await response.json()) as GeminiResponse;

  if (!response.ok) {
    throw new Error(
      `Gemini:${getGeminiErrorMessage(response, data.error?.message)}`,
    );
  }

  const answer = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text)
    .filter(Boolean)
    .join("\n")
    .trim();

  return (
    answer ||
    "No encontre informacion suficiente sobre ese tema dentro del portafolio."
  );
}
