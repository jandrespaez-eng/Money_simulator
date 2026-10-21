"use client";

import { AppLayout } from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dataStore } from "@/lib/data-store";
import { formatCurrency, getScenarioTypeLabel } from "@/lib/financial-engine";
import { Plus, MoreVertical, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function EscenariosPage() {
  const [scenarios] = useState(dataStore.scenarios.getAll());

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Mis escenarios
            </h1>
            <p className="text-slate-600">
              Crea y gestiona diferentes escenarios financieros
            </p>
          </div>
          <Button size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Nuevo escenario
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {scenarios.map((scenario) => (
            <Card key={scenario.id} className={scenario.isActive ? "border-blue-500 border-2" : ""}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {scenario.name}
                      </h3>
                      {scenario.isActive && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                          <CheckCircle2 className="h-3 w-3" />
                          Activo
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      {getScenarioTypeLabel(scenario.type)}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Capital inicial neto</p>
                        <p className="text-sm font-semibold text-slate-900">
                          {formatCurrency(scenario.netStartingCapital, scenario.currency)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Moneda</p>
                        <p className="text-sm font-semibold text-slate-900">
                          {scenario.currency}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Horizonte</p>
                        <p className="text-sm font-semibold text-slate-900">
                          {scenario.timeHorizon} años
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Creado</p>
                        <p className="text-sm font-semibold text-slate-900">
                          {scenario.createdAt.toLocaleDateString("es-ES", { 
                            day: "numeric", 
                            month: "short", 
                            year: "numeric" 
                          })}
                        </p>
                      </div>
                    </div>

                    {scenario.notes && (
                      <p className="mt-4 text-sm text-slate-600">
                        {scenario.notes}
                      </p>
                    )}
                  </div>

                  <button className="ml-4 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {scenarios.length === 0 && (
          <Card>
            <CardContent className="py-16 text-center">
              <p className="text-slate-600 mb-4">
                Aún no has creado ningún escenario
              </p>
              <Button>
                <Plus className="mr-2 h-5 w-5" />
                Crear tu primer escenario
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}
