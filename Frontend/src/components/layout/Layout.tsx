import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <BreadcrumbNav /> */}
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
