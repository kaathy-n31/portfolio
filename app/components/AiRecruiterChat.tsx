"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { FaCommentDots, FaPaperPlane, FaTimes, FaTrash } from "react-icons/fa";

type Message = {
  id: string;
  role: "user" | "model";
  text: string;
};

const maxMessageLength = 1000;

const suggestedQuestions = [
  "Cuantos anos de experiencia tiene?",
  "Tiene experiencia con React?",
  "Ha trabajado con Next.js?",
  "Tiene experiencia con Firebase?",
  "Que tecnologias domina?",
  "Resume su perfil profesional.",
  "Cual es su proyecto mas complejo?",
];

const welcomeMessage: Message = {
  id: "welcome",
  role: "model",
  text: "Hola, soy el asistente del portafolio de Katherine. Puedes preguntarme sobre su experiencia, proyectos, tecnologias y habilidades.",
};

function createMessage(role: Message["role"], text: string): Message {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    text,
  };
}

export function AiRecruiterChat() {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  async function sendMessage(rawMessage = input) {
    const message = rawMessage.trim();

    if (!message || isLoading) {
      return;
    }

    if (message.length > maxMessageLength) {
      setError(`El mensaje no puede superar ${maxMessageLength} caracteres.`);
      return;
    }

    const userMessage = createMessage("user", message);
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          history: messages
            .filter((item) => item.id !== "welcome")
            .slice(-8)
            .map(({ role, text }) => ({
              role,
              text,
            })),
        }),
      });

      const data = (await response.json()) as {
        reply?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "No pude procesar la pregunta.");
      }

      setMessages((current) => [
        ...current,
        createMessage(
          "model",
          data.reply ||
            "No encontre informacion suficiente sobre ese tema dentro del portafolio.",
        ),
      ]);
    } catch (requestError) {
      setMessages((current) => [
        ...current,
        createMessage(
          "model",
          requestError instanceof Error
            ? requestError.message
            : "No pude procesar la pregunta en este momento.",
        ),
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  function clearConversation() {
    setMessages([welcomeMessage]);
    setInput("");
    setError("");
  }

  return (
    <div
      className="fixed bottom-4 right-3 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6 sm:gap-3"
    >
      <div
        id="asistente-ia"
        className={`w-[calc(100vw-1.5rem)] max-w-[340px] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] shadow-2xl transition-all duration-300 sm:max-w-[380px] ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="border-b border-[color:var(--line)] bg-[color:var(--surface-muted)] px-3 py-3 sm:px-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="mb-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-[color:var(--accent)]">
                Asistente IA
              </p>
              <h2 className="m-0 text-lg font-bold text-[color:var(--accent-strong)]">
                Pregunta sobre Katherine
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={clearConversation}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--line)] bg-[color:var(--button-ghost-bg)] text-[color:var(--accent-strong)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                aria-label="Limpiar conversacion"
                title="Limpiar conversacion"
              >
                <FaTrash aria-hidden="true" size={12} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--line)] bg-[color:var(--button-ghost-bg)] text-[color:var(--accent-strong)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                aria-label="Ocultar chat"
                title="Ocultar chat"
              >
                <FaTimes aria-hidden="true" size={13} />
              </button>
            </div>
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => void sendMessage(question)}
                disabled={isLoading}
                className="shrink-0 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1.5 text-xs font-semibold text-[color:var(--text-muted)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <div className="flex h-[min(300px,calc(100svh-14rem))] flex-col sm:h-[min(380px,calc(100svh-13rem))]">
          <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3 sm:px-4">
            {messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 shadow-sm ${
                      isUser
                        ? "bg-[color:var(--button-bg)] text-[color:var(--button-text)]"
                        : "border border-[color:var(--line)] bg-[color:var(--surface-muted)] text-[color:var(--text)]"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              );
            })}

            {isLoading ? (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-muted)] px-3.5 py-2.5 text-sm font-semibold text-[color:var(--text-muted)]">
                  La IA esta escribiendo...
                </div>
              </div>
            ) : null}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-[color:var(--line)] bg-[color:var(--surface-muted)] p-3"
          >
            {error ? (
              <p className="mb-2 text-xs font-semibold text-red-500">
                {error}
              </p>
            ) : null}

            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                maxLength={maxMessageLength}
                rows={1}
                placeholder="Escribe tu pregunta..."
                className="min-h-10 flex-1 resize-none rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2 text-sm leading-6 text-[color:var(--text)] outline-none transition placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent-soft)]"
              />
              <button
                type="submit"
                disabled={isLoading || input.trim().length === 0}
                aria-label="Enviar pregunta"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--button-bg)] text-[color:var(--button-text)] transition hover:-translate-y-0.5 hover:bg-[color:var(--button-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaPaperPlane aria-hidden="true" size={14} />
              </button>
            </div>

            <p className="mt-1 text-right text-[0.68rem] text-[color:var(--text-muted)]">
              {input.length}/{maxMessageLength}
            </p>
          </form>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--button-bg)] text-[color:var(--button-text)] shadow-2xl transition hover:-translate-y-1 hover:bg-[color:var(--button-bg-hover)] focus:outline-none focus:ring-4 focus:ring-[color:var(--accent-soft)] sm:h-16 sm:w-16"
        aria-expanded={isOpen}
        aria-controls="asistente-ia"
        aria-label={isOpen ? "Ocultar chat de IA" : "Mostrar chat de IA"}
      >
        <span className="absolute inset-0 rounded-full bg-[color:var(--accent)] opacity-25 blur-md transition group-hover:opacity-40" />
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16">
          {isOpen ? (
            <FaTimes aria-hidden="true" size={20} />
          ) : (
            <FaCommentDots aria-hidden="true" size={25} />
          )}
        </span>
      </button>
    </div>
  );
}
