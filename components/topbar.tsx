"use client";

import { usePathname } from "next/navigation";
import { Bell, User, ChevronDown } from "lucide-react";
import { dataStore } from "@/lib/data-store";

export function TopBar() {
  const pathname = usePathname();
  const activeScenario = dataStore.scenarios.getActive();
  
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
    return titles[pathname] || "";
  };

  return (
    <header className="fixed left-64 right-0 top-0 z-30 h-20 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-8">
        {/* Page Title */}
        <div>
          <h2 className="text-h2 font-serif text-carbon">{getPageTitle()}</h2>
        </div>
        
        {/* Center - Scenario Selector */}
        {activeScenario && (
          <div className="flex-1 flex justify-center">
            <button className="flex items-center gap-2 rounded-pill bg-white border border-gray-300 px-5 py-2.5 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-bosque"></div>
                <span className="text-body font-medium text-carbon">
                  {activeScenario.name}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        )}
        
        {/* Right - Utilities */}
        <div className="flex items-center gap-3">
          <button className="rounded-md p-2.5 text-gray-600 hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-md p-2.5 text-gray-600 hover:bg-gray-100 transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
