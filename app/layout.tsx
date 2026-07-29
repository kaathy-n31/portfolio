import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katherine Negrete | Portafolio",
  description: "Portafolio profesional de Katheri Negrete.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem("portfolio-theme");
                const theme = storedTheme === "light" || storedTheme === "dark"
                  ? storedTheme
                  : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                document.documentElement.dataset.theme = theme;
              } catch {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
