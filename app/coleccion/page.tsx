"use client";

import { AppLayout } from "@/components/app-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark } from "lucide-react";

export default function ColeccionPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Mi colección
          </h1>
          <p className="text-slate-600">
            Tus elementos guardados y favoritos
          </p>
        </div>

        <Card>
          <CardContent className="py-16 text-center">
            <Bookmark className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-lg text-slate-600 mb-2">
              Aún no has guardado ningún elemento
            </p>
            <p className="text-sm text-slate-500">
              Explora opciones y guarda las que te interesen
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
