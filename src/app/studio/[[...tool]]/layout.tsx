export const metadata = {
  title: "後台管理 | 小琳數位照相館",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
