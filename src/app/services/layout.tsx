
import CTA from "@/components/layout/Cta";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        {children}
        <CTA />
      </>
  );
}
