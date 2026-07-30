import { NextResponse } from "next/server";
import { askGemini } from "@/lib/gemini";

export const runtime = "nodejs";

const maxMessageLength = 1000;

type RequestMessage = {
  role?: unknown;
  text?: unknown;
};

function isValidHistoryMessage(message: RequestMessage) {
  return (
    (message.role === "user" || message.role === "model") &&
    typeof message.text === "string" &&
    message.text.trim().length > 0
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      message?: unknown;
      history?: RequestMessage[];
    };

    if (typeof body.message !== "string") {
      return NextResponse.json(
        { error: "El mensaje es requerido." },
        { status: 400 },
      );
    }

    const message = body.message.trim();

    if (!message) {
      return NextResponse.json(
        { error: "El mensaje no puede estar vacio." },
        { status: 400 },
      );
    }

    if (message.length > maxMessageLength) {
      return NextResponse.json(
        { error: `El mensaje no puede superar ${maxMessageLength} caracteres.` },
        { status: 400 },
      );
    }

    const history = Array.isArray(body.history)
      ? body.history.filter(isValidHistoryMessage).map((item) => ({
          role: item.role as "user" | "model",
          text: (item.text as string).trim(),
        }))
      : [];

    const reply = await askGemini({ message, history });

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[api/ai]", error);

    const message =
      error instanceof Error && error.message.includes("GEMINI_API_KEY")
        ? "La API Key de Gemini no esta configurada."
        : error instanceof Error && error.message.startsWith("Gemini:")
          ? error.message.replace("Gemini:", "")
        : "No pude procesar la pregunta en este momento.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
