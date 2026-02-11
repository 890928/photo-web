import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteSettings } from "@/sanity/fetch";

export const revalidate = 60;

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings();

  return (
    <>
      <Navbar siteName={siteSettings.siteName} />
      <main>{children}</main>
      <Footer siteSettings={siteSettings} />
    </>
  );
}
