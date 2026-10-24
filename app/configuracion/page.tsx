"use client";

import { AppLayout } from "@/components/app-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function ConfiguracionPage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Configuración
          </h1>
          <p className="text-slate-600">
            Preferencias y ajustes de la aplicación
          </p>
        </div>

        <Card>
          <CardContent className="py-16 text-center">
            <Settings className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-lg text-slate-600 mb-2">
              Configuración próximamente
            </p>
            <p className="text-sm text-slate-500">
              Aquí podrás ajustar preferencias, monedas, idioma y más
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
