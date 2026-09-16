import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brisas de la Cayana | Villa Alpina, Córdoba",
  description:
    "Un refugio entre las sierras, el arroyo y el cielo abierto. Demo web de Brisas de la Cayana en Villa Alpina, Córdoba.",
  metadataBase: new URL("https://brisas-de-la-cayana.clickdialog.site"),
  openGraph: {
    title: "Brisas de la Cayana",
    description:
      "Un refugio entre las sierras, el arroyo y el cielo abierto, en Villa Alpina, Córdoba.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
