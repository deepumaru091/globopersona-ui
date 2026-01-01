import "./globals.css";

export const metadata = {
  title: "Globopersona",
  description: "Email Campaign Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
