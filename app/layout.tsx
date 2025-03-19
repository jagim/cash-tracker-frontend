import type { Metadata } from "next"
import "./globals.css"
import { Outfit } from "next/font/google"

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "CashTracker",
  description: "Utiliza la app y gestiona todos tus gastos!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
