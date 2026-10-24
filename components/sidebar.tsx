"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  FolderOpen,
  Sparkles,
  Search,
  Bookmark,
  Calculator,
  MessageSquare,
  History,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Mis escenarios", href: "/escenarios", icon: FolderOpen },
  { name: "Diseña tu vida", href: "/disena", icon: Sparkles },
  { name: "Explorar", href: "/explorar", icon: Search },
  { name: "Mi colección", href: "/coleccion", icon: Bookmark },
  { name: "Mi plan financiero", href: "/plan", icon: Calculator },
  { name: "Asesor GPT", href: "/asesor", icon: MessageSquare },
  { name: "Versiones", href: "/versiones", icon: History },
  { name: "Configuración", href: "/configuracion", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-white">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b border-slate-200 px-6">
          <h1 className="text-xl font-bold text-slate-900">Life Simulator</h1>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-200 p-4">
          <p className="text-xs text-slate-500">
            Explora posibilidades, diseña tu futuro
          </p>
        </div>
      </div>
    </aside>
  );
}
