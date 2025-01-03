"use client";

import Leftsidebar from "@/components/main/leftsidebar";
import Message from "@/components/main/message";
import { DockDemo } from "@/components/main/mobiledock";
import { RightSidebar } from "@/components/main/rightsidebar";

import { useScreenSize } from "@/hooks/useScreen";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile } = useScreenSize();
  return (
    <div className="min-h-screen flex flex-col">
      {isMobile ? (
        <div className="w-full fixed bottom-0 right-0 z-50 md:hidden">
          <DockDemo />
        </div>
      ) : (
        <div className="hidden md:block w-64">
          <Leftsidebar />
        </div>
      )}

      <main className="flex-1 flex flex-col items-center justify-center px-4 lg:ml-[280px] lg:mr-[320px]">
        <div className="container max-w-[600px] mx-auto py-4 pl-4">
          {children}
        </div>
      </main>
      <RightSidebar />
      <Message/>
    </div>
  );
}
