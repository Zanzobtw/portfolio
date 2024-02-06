import "./styles/colors.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="appBackground">{children}</body>
    </html>
  );
}
