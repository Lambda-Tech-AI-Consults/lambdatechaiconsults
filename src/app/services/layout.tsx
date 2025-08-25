
import CTA from "@/components/layout/Cta";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <>
        {children}
        <CTA />
      </>
    </html>
  );
}
