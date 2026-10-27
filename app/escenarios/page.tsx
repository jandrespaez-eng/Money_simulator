"use client";

import { AppLayout } from "@/components/app-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dataStore } from "@/lib/data-store";
import { formatCurrency, getScenarioTypeLabel } from "@/lib/financial-engine";
import { Plus, MoreVertical, CheckCircle2, Clock, FileText } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function EscenariosPage() {
  const [scenarios] = useState(dataStore.scenarios.getAll());

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-body text-gray-600 mb-2">
              Cada escenario es independiente y tiene su propio conjunto de decisiones
            </p>
          </div>
          <Link href="/escenarios/nuevo">
            <Button size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Crear escenario
            </Button>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="flex items-center gap-8 pb-6 border-b border-gray-200">
          <button className="text-body font-medium text-bosque border-b-2 border-bosque pb-1">
            Todos ({scenarios.length})
          </button>
          <button className="text-body text-gray-600 hover:text-carbon transition-colors">
            Recurrentes
          </button>
          <button className="text-body text-gray-600 hover:text-carbon transition-colors">
            Extraordinarios
          </button>
          <button className="text-body text-gray-600 hover:text-carbon transition-colors">
            Estilos de vida
          </button>
        </div>

        {/* Scenarios List */}
        <div className="space-y-8">
          {/* Active/Recent Scenarios */}
          <div>
            <h3 className="font-serif text-h3 text-carbon mb-4">Escenarios activos</h3>
            <div className="grid grid-cols-1 gap-4">
              {scenarios.filter(s => s.isActive).map((scenario) => (
                <Card key={scenario.id} className="border-2 border-bosque hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center rounded-md bg-bosque text-white px-3 py-1 text-body-sm font-medium uppercase tracking-wide">
                            {scenario.type === 'baloto' ? 'Lotería' : getScenarioTypeLabel(scenario.type)}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-body-sm font-medium text-green-800">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Activo
                          </span>
                        </div>
                        
                        <h3 className="font-serif text-h3 text-carbon mb-2">
                          {scenario.name}
                        </h3>
                        
                        <div className="flex items-center gap-6 text-body-sm text-gray-600">
                          <span>Colombia · {scenario.currency}</span>
                          <span>•</span>
                          <span>Última modificación: {scenario.updatedAt.toLocaleDateString("es-ES", { day: "numeric", month: "short" })}</span>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-8">
                            <div>
                              <p className="text-body-sm text-gray-600 mb-1">Capital neto</p>
                              <p className="font-serif text-h3 text-carbon tabular-nums">
                                {formatCurrency(scenario.netStartingCapital, scenario.currency)}
                              </p>
                            </div>
                            <div>
                              <p className="text-body-sm text-gray-600 mb-1">Horizonte</p>
                              <p className="font-medium text-body text-carbon">
                                {scenario.timeHorizon} años
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className="ml-4 rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {scenarios.filter(s => !s.isActive).map((scenario) => (
                <Card key={scenario.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center rounded-md bg-gray-200 text-gray-700 px-3 py-1 text-body-sm font-medium uppercase tracking-wide">
                            {scenario.type === 'baloto' ? 'Lotería' : getScenarioTypeLabel(scenario.type)}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-body-sm font-medium text-gray-600">
                            <Clock className="h-3.5 w-3.5" />
                            Inactivo
                          </span>
                        </div>
                        
                        <h3 className="font-serif text-h3 text-carbon mb-2">
                          {scenario.name}
                        </h3>
                        
                        <div className="flex items-center gap-6 text-body-sm text-gray-600">
                          <span>Colombia · {scenario.currency}</span>
                          <span>•</span>
                          <span>Creado: {scenario.createdAt.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}</span>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-8">
                            <div>
                              <p className="text-body-sm text-gray-600 mb-1">Capital neto</p>
                              <p className="font-serif text-h3 text-carbon tabular-nums">
                                {formatCurrency(scenario.netStartingCapital, scenario.currency)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className="ml-4 rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {scenarios.length === 0 && (
            <Card>
              <CardContent className="py-24 text-center">
                <div className="rounded-full bg-bosque/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-bosque" />
                </div>
                <h3 className="font-serif text-h3 text-carbon mb-2">
                  Aún no has creado ningún escenario
                </h3>
                <p className="text-body text-gray-600 mb-8">
                  Crea tu primer escenario financiero para comenzar a planear tu futuro
                </p>
                <Link href="/escenarios/nuevo">
                  <Button size="lg">
                    <Plus className="mr-2 h-5 w-5" />
                    Crear tu primer escenario
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
