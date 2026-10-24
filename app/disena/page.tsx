"use client";

import { AppLayout } from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dataStore } from "@/lib/data-store";
import { useState } from "react";
import { Sparkles, Loader2, CheckCircle2, Edit3 } from "lucide-react";
import type { LifestyleDream } from "@/lib/types";

export default function DisenaPage() {
  const activeScenario = dataStore.scenarios.getActive();
  const [dreamDescription, setDreamDescription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentDream, setCurrentDream] = useState<LifestyleDream | null>(
    activeScenario ? dataStore.lifestyleDreams.getByScenario(activeScenario.id) || null : null
  );
  const [editMode, setEditMode] = useState(false);

  if (!activeScenario) {
    return (
      <AppLayout>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="py-16 text-center">
              <p className="text-slate-600 mb-4">
                Primero necesitas crear un escenario financiero
              </p>
              <Button>Crear escenario</Button>
            </CardContent>
          </Card>
        </div>
      </AppLayout>
    );
  }

  const handleGenerateDream = async () => {
    if (!dreamDescription.trim()) return;

    setIsProcessing(true);

    setTimeout(() => {
      const newDream: LifestyleDream = {
        id: dataStore.generateId(),
        scenarioId: activeScenario.id,
        title: "Mi vida ideal",
        description: dreamDescription,
        createdAt: new Date(),
        updatedAt: new Date(),
        vision: dreamDescription,
        preferredCountries: extractCountries(dreamDescription),
        preferredCities: [],
        hobbiesActivities: extractActivities(dreamDescription),
        estimatedStartupCosts: estimateStartupCosts(dreamDescription),
        estimatedRecurringExpenses: estimateRecurringExpenses(dreamDescription),
        priorities: ["Libertad financiera", "Calidad de vida", "Realización personal"],
        unknowns: [
          "Costos exactos de operación",
          "Requisitos legales y administrativos",
          "Tiempo real de dedicación necesaria",
        ],
      };

      const existingDream = dataStore.lifestyleDreams.getByScenario(activeScenario.id);
      if (existingDream) {
        dataStore.lifestyleDreams.update(existingDream.id, newDream);
      } else {
        dataStore.lifestyleDreams.create(newDream);
      }

      setCurrentDream(newDream);
      setIsProcessing(false);
      setEditMode(false);
    }, 2000);
  };

  const extractCountries = (text: string): string[] => {
    const countries = [];
    if (text.toLowerCase().includes("colombia")) countries.push("Colombia");
    if (text.toLowerCase().includes("estados unidos") || text.toLowerCase().includes("usa")) {
      countries.push("Estados Unidos");
    }
    if (text.toLowerCase().includes("españa")) countries.push("España");
    return countries;
  };

  const extractActivities = (text: string): string[] => {
    const activities = [];
    if (text.toLowerCase().includes("golf")) activities.push("Golf");
    if (text.toLowerCase().includes("finca") || text.toLowerCase().includes("agricultura")) {
      activities.push("Agricultura");
    }
    if (text.toLowerCase().includes("viajar") || text.toLowerCase().includes("viajes")) {
      activities.push("Viajes");
    }
    if (text.toLowerCase().includes("negocio") || text.toLowerCase().includes("empresa")) {
      activities.push("Emprendimiento");
    }
    return activities;
  };

  const estimateStartupCosts = (text: string): number => {
    if (text.toLowerCase().includes("finca") || text.toLowerCase().includes("farm")) {
      return 2000000000;
    }
    if (text.toLowerCase().includes("casa") || text.toLowerCase().includes("propiedad")) {
      return 800000000;
    }
    return 500000000;
  };

  const estimateRecurringExpenses = (text: string): number => {
    if (text.toLowerCase().includes("lujo") || text.toLowerCase().includes("luxury")) {
      return 30000000;
    }
    if (text.toLowerCase().includes("finca") || text.toLowerCase().includes("farm")) {
      return 20000000;
    }
    return 15000000;
  };

  if (currentDream && !editMode) {
    return (
      <AppLayout>
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {currentDream.title}
              </h1>
              <p className="text-slate-600">
                Tu visión de vida personalizada
              </p>
            </div>
            <Button variant="outline" onClick={() => setEditMode(true)}>
              <Edit3 className="mr-2 h-4 w-4" />
              Editar visión
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tu descripción original</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                    {currentDream.description}
                  </p>
                </CardContent>
              </Card>

              {currentDream.hobbiesActivities.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Actividades y pasatiempos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {currentDream.hobbiesActivities.map((activity) => (
                        <span
                          key={activity}
                          className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentDream.preferredCountries.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Ubicaciones de interés</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {currentDream.preferredCountries.map((country) => (
                        <span
                          key={country}
                          className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Prioridades personales</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {currentDream.priorities.map((priority, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{priority}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Aspectos a investigar</CardTitle>
                  <CardDescription>
                    Estas son áreas que requieren más investigación
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {currentDream.unknowns.map((unknown, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-2xl leading-none">•</span>
                        <span className="text-slate-700">{unknown}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Estimación financiera</CardTitle>
                  <CardDescription>Costos aproximados iniciales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentDream.estimatedStartupCosts && (
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Inversión inicial estimada</p>
                      <p className="text-2xl font-bold text-slate-900">
                        ${(currentDream.estimatedStartupCosts / 1000000).toFixed(0)}M
                      </p>
                    </div>
                  )}
                  {currentDream.estimatedRecurringExpenses && (
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Gastos mensuales estimados</p>
                      <p className="text-2xl font-bold text-slate-900">
                        ${(currentDream.estimatedRecurringExpenses / 1000000).toFixed(1)}M
                      </p>
                    </div>
                  )}
                  <p className="text-xs text-slate-500 mt-4">
                    Estas son estimaciones preliminares. Explora opciones reales para obtener
                    cifras más precisas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Próximos pasos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Explorar propiedades
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Buscar vehículos
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Consultar con IA
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Diseña tu vida
          </h1>
          <p className="text-slate-600">
            Describe el estilo de vida que imaginas. No hay límites, solo posibilidades.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Describe tu vida ideal</CardTitle>
            <CardDescription>
              Escribe libremente sobre cómo te gustaría vivir, qué te gustaría hacer, dónde te 
              gustaría estar, y qué te importa realmente. La IA te ayudará a convertir tu visión 
              en un plan estructurado.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Tu visión
              </label>
              <textarea
                value={dreamDescription}
                onChange={(e) => setDreamDescription(e.target.value)}
                placeholder="Ejemplo: Quiero convertirme en agricultor. Me imagino viviendo en una propiedad hermosa en Colombia, cultivando algo comercialmente viable, trabajando al aire libre, teniendo una casa cómoda, algunos vehículos buenos, y viviendo tranquilamente sin preocupaciones económicas..."
                className="w-full min-h-[300px] rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Ejemplos de visiones:</strong> Quiero dedicar la mayor parte de mi tiempo al golf • 
                Quiero vivir entre Colombia y Estados Unidos • Quiero construir una colección de autos clásicos • 
                Quiero viajar la mayor parte del año • Quiero tener un portafolio de propiedades en alquiler
              </p>
            </div>

            <Button
              onClick={handleGenerateDream}
              disabled={!dreamDescription.trim() || isProcessing}
              size="lg"
              className="w-full"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Procesando tu visión...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generar mi plan de vida
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>¿Qué pasa después?</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                  1
                </span>
                <div>
                  <p className="font-medium text-slate-900">La IA interpreta tu visión</p>
                  <p className="text-sm text-slate-600">
                    Analizamos tu descripción y la convertimos en un modelo estructurado
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                  2
                </span>
                <div>
                  <p className="font-medium text-slate-900">Revisas y editas</p>
                  <p className="text-sm text-slate-600">
                    Puedes ajustar cualquier aspecto del plan generado
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                  3
                </span>
                <div>
                  <p className="font-medium text-slate-900">Exploras opciones reales</p>
                  <p className="text-sm text-slate-600">
                    Buscas propiedades, vehículos y otros elementos que se ajusten a tu visión
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                  4
                </span>
                <div>
                  <p className="font-medium text-slate-900">Construyes tu plan</p>
                  <p className="text-sm text-slate-600">
                    Añades elementos a tu plan y ves cómo afectan tus finanzas
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
