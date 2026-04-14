import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agenda de Contatos",
  description: "Sistema de agenda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Agenda de Contatos</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
