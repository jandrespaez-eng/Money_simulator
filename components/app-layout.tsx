import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topbar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-fondo">
      <Sidebar />
      <TopBar />
      <main className="ml-64 pt-20">
        <div className="p-8 max-w-[1360px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
