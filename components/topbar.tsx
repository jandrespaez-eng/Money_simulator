"use client";

import { usePathname } from "next/navigation";
import { Bell, User } from "lucide-react";

export function TopBar() {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    const titles: Record<string, string> = {
      "/": "Inicio",
      "/escenarios": "Mis escenarios",
      "/disena": "Diseña tu vida",
      "/explorar": "Explorar",
      "/coleccion": "Mi colección",
      "/plan": "Mi plan financiero",
      "/asesor": "Asesor GPT",
      "/versiones": "Versiones",
      "/configuracion": "Configuración",
    };
    return titles[pathname] || "Life Simulator";
  };

  return (
    <header className="fixed left-64 right-0 top-0 z-10 h-16 border-b border-slate-200 bg-white">
      <div className="flex h-full items-center justify-between px-8">
        <h2 className="text-lg font-semibold text-slate-900">{getPageTitle()}</h2>
        
        <div className="flex items-center gap-4">
          <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
