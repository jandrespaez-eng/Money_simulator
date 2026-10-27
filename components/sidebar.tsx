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
  { name: "Mi plan", href: "/plan", icon: Calculator },
  { name: "Asesor GPT", href: "/asesor", icon: MessageSquare },
  { name: "Versiones", href: "/versiones", icon: History },
  { name: "Configuración", href: "/configuracion", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200 bg-white z-40">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-gray-200 px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-bosque flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">A</span>
            </div>
            <span className="font-serif text-xl text-carbon">A Mi Manera</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-6 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-body font-medium transition-colors",
                  isActive
                    ? "bg-bosque/10 text-bosque"
                    : "text-gray-700 hover:bg-gray-50 hover:text-carbon"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <p className="text-body-sm text-gray-500">
            Explora posibilidades,<br />diseña tu futuro
          </p>
        </div>
      </div>
    </aside>
  );
}
