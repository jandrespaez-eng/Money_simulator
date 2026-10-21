"use client";

import { AppLayout } from "@/components/app-layout";
import { Card, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

export default function VersionesPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Versiones
          </h1>
          <p className="text-slate-600">
            Historial y comparación de tus planes
          </p>
        </div>

        <Card>
          <CardContent className="py-16 text-center">
            <History className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-lg text-slate-600 mb-2">
              Aún no tienes versiones guardadas
            </p>
            <p className="text-sm text-slate-500">
              Guarda diferentes versiones de tus planes para compararlas más tarde
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
