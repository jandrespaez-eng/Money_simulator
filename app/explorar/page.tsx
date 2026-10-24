"use client";

import { AppLayout } from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, MapPin, DollarSign } from "lucide-react";

export default function ExplorarPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Explorar
          </h1>
          <p className="text-slate-600">
            Descubre propiedades, vehículos y experiencias reales
          </p>
        </div>

        <Card>
          <CardContent className="py-16 text-center">
            <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-lg text-slate-600 mb-2">
              Búsqueda de contenido real próximamente
            </p>
            <p className="text-sm text-slate-500 mb-6">
              Podrás explorar propiedades en Zillow, vehículos en CarGurus, y más
            </p>
            <Button variant="outline">
              Volver al inicio
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
