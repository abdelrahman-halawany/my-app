import "./globals.css";

export const metadata = {
  title: "Register App",
  description: "Register page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}