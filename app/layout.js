import "./globals.css";

export const metadata = {
  title: "Nathan Portfolio",
  description: "Generated for displaying my projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
