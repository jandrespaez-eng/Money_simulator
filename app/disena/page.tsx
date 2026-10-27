"use client";

import { AppLayout } from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dataStore } from "@/lib/data-store";
import { useState } from "react";
import { Sparkles, Loader2, CheckCircle2, Edit3, MapPin, TrendingUp, AlertCircle } from "lucide-react";
import type { LifestyleDream } from "@/lib/types";

export default function DisenaPage() {
  const activeScenario = dataStore.scenarios.getActive();
  const [dreamDescription, setDreamDescription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentDream, setCurrentDream] = useState<LifestyleDream | null>(
    activeScenario ? dataStore.lifestyleDreams.getByScenario(activeScenario.id) || null : null
  );
  const [editMode, setEditMode] = useState(!currentDream);

  if (!activeScenario) {
    return (
      <AppLayout>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="py-24 text-center">
              <p className="text-body text-gray-600 mb-4">
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
          "Costos exactos de operación mensual",
          "Requisitos legales y administrativos específicos",
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
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-serif text-h2 text-carbon mb-2">
                {currentDream.title}
              </h2>
              <p className="text-body text-gray-600">
                Tu visión de vida interpretada y lista para explorar
              </p>
            </div>
            <Button variant="secondary" onClick={() => setEditMode(true)}>
              <Edit3 className="mr-2 h-4 w-4" />
              Editar visión
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Original Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Tu descripción original</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-gray-700 leading-relaxed whitespace-pre-line">
                    {currentDream.description}
                  </p>
                </CardContent>
              </Card>

              {/* Activities */}
              {currentDream.hobbiesActivities.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Actividades y pasatiempos identificados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {currentDream.hobbiesActivities.map((activity) => (
                        <span
                          key={activity}
                          className="inline-flex items-center rounded-full bg-bosque/10 px-4 py-2 text-body font-medium text-bosque"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Locations */}
              {currentDream.preferredCountries.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Ubicaciones de interés</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {currentDream.preferredCountries.map((country) => (
                        <div key={country} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <MapPin className="h-5 w-5 text-bosque" />
                          <span className="font-medium text-body text-carbon">{country}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Priorities */}
              <Card>
                <CardHeader>
                  <CardTitle>Prioridades personales</CardTitle>
                  <CardDescription>Lo que más te importa en esta visión de vida</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {currentDream.priorities.map((priority, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-bosque mt-0.5 flex-shrink-0" />
                        <span className="text-body text-gray-700">{priority}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Unknowns */}
              <Card className="border-orange-200 bg-orange-50/30">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <CardTitle>Aspectos a investigar</CardTitle>
                      <CardDescription className="text-orange-700">
                        Necesitas más información sobre estos puntos
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {currentDream.unknowns.map((unknown, index) => (
                      <li key={index} className="flex items-start gap-2 text-body text-gray-700">
                        <span className="text-orange-600">•</span>
                        <span>{unknown}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Financial Estimates */}
              <Card>
                <CardHeader>
                  <CardTitle>Estimación financiera</CardTitle>
                  <CardDescription>Costos preliminares aproximados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {currentDream.estimatedStartupCosts && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-body-sm text-gray-600">Inversión inicial</p>
                        <span className="badge-estimated">Estimado</span>
                      </div>
                      <p className="font-serif text-h2 text-carbon tabular-nums">
                        ${(currentDream.estimatedStartupCosts / 1000000).toFixed(0)}M
                      </p>
                    </div>
                  )}
                  
                  {currentDream.estimatedRecurringExpenses && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-body-sm text-gray-600">Gastos mensuales</p>
                        <span className="badge-estimated">Estimado</span>
                      </div>
                      <p className="font-serif text-h2 text-carbon tabular-nums">
                        ${(currentDream.estimatedRecurringExpenses / 1000000).toFixed(1)}M
                      </p>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-body-sm text-gray-600">
                      Estas son estimaciones preliminares. Explora opciones reales para obtener cifras más precisas.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>Próximos pasos</CardTitle>
                  <CardDescription>Continúa construyendo tu plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Explorar propiedades
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Consultar con IA
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Ver plan financiero
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
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero */}
        <div className="text-center">
          <h1 className="font-serif text-display text-carbon mb-4">
            ¿Cómo te imaginas <span className="italic">tu</span> vida?
          </h1>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Describe el estilo de vida que imaginas. No hay límites, solo posibilidades. 
            La IA te ayudará a convertir tu visión en un plan estructurado.
          </p>
        </div>

        {/* Main Input */}
        <Card>
          <CardContent className="pt-8">
            <label className="block text-body font-medium text-carbon mb-3">
              Describe tu vida ideal
            </label>
            <textarea
              value={dreamDescription}
              onChange={(e) => setDreamDescription(e.target.value)}
              placeholder="Ejemplo: Quiero convertirme en agricultor. Me imagino viviendo en una propiedad hermosa en Colombia, cultivando algo comercialmente viable, trabajando al aire libre, teniendo una casa cómoda, algunos vehículos buenos, y viviendo tranquilamente sin preocupaciones económicas. Quiero entender si debería comprar una finca existente, iniciar un negocio, o hacer la transición gradualmente..."
              className="w-full min-h-[280px] rounded-lg border border-gray-300 bg-white px-5 py-4 text-body text-carbon placeholder:text-gray-400 focus:border-bosque focus:outline-none focus:ring-2 focus:ring-bosque/20 resize-none"
              disabled={isProcessing}
            />
            
            <div className="mt-6">
              <Button
                onClick={handleGenerateDream}
                disabled={!dreamDescription.trim() || isProcessing}
                size="lg"
                className="w-full"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Interpretando tu visión...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generar mi plan de vida
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Examples */}
        <Card className="bg-bosque/5 border-bosque/20">
          <CardHeader>
            <CardTitle>Ejemplos de visiones</CardTitle>
            <CardDescription>
              Algunas ideas para inspirarte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-body-sm text-gray-700">
                • Quiero dedicar la mayor parte de mi tiempo al golf
              </div>
              <div className="text-body-sm text-gray-700">
                • Quiero vivir entre Colombia y Estados Unidos
              </div>
              <div className="text-body-sm text-gray-700">
                • Quiero construir una colección de autos clásicos
              </div>
              <div className="text-body-sm text-gray-700">
                • Quiero viajar la mayor parte del año
              </div>
              <div className="text-body-sm text-gray-700">
                • Quiero tener un portafolio de propiedades en alquiler
              </div>
              <div className="text-body-sm text-gray-700">
                • Quiero iniciar un negocio mientras mantengo un estilo de vida cómodo
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <Card>
          <CardHeader>
            <CardTitle>¿Qué pasa después?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "La IA interpreta tu visión",
                  description: "Analizamos tu descripción y la convertimos en un modelo estructurado con categorías, actividades y estimaciones financieras",
                },
                {
                  step: "2",
                  title: "Revisas y editas",
                  description: "Puedes ajustar cualquier aspecto del plan generado, cambiar prioridades o agregar nuevos elementos",
                },
                {
                  step: "3",
                  title: "Exploras opciones reales",
                  description: "Buscas propiedades, vehículos y otros elementos que se ajusten a tu visión con información real del mercado",
                },
                {
                  step: "4",
                  title: "Construyes tu plan",
                  description: "Añades elementos a tu plan y ves cómo afectan tus finanzas en tiempo real con cálculos transparentes",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-bosque text-white font-medium">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-medium text-body text-carbon mb-1">{item.title}</p>
                    <p className="text-body-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
