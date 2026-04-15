"use client";

import Footer from "@/components/ui/footer";

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
