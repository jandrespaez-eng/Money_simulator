import { AppLayout } from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dataStore } from "@/lib/data-store";
import { calculateFinancials, formatCurrency, getScenarioTypeLabel } from "@/lib/financial-engine";
import { Plus, TrendingUp, DollarSign, Wallet, Sparkles, Search, FileText } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const activeScenario = dataStore.scenarios.getActive();
  
  if (!activeScenario) {
    return (
      <AppLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-24">
            <h1 className="font-serif text-hero text-carbon mb-6">
              Bienvenido a<br />A Mi Manera
            </h1>
            <p className="text-body-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Explora posibilidades, diseña tu vida ideal y planifica tu futuro financiero con claridad y confianza.
            </p>
            <Link href="/escenarios">
              <Button size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Crear tu primer escenario
              </Button>
            </Link>
          </div>
        </div>
      </AppLayout>
    );
  }

  const planItems = dataStore.planItems.getByScenario(activeScenario.id);
  const calculation = calculateFinancials(activeScenario, planItems);
  const dream = dataStore.lifestyleDreams.getByScenario(activeScenario.id);

  return (
    <AppLayout>
      <div className="space-y-10">
        {/* Hero Section */}
        <div>
          <h1 className="font-serif text-display text-carbon mb-3">
            Tu plan de vida
          </h1>
          <p className="text-body-lg text-gray-600">
            {getScenarioTypeLabel(activeScenario.type)} · Creado el {activeScenario.createdAt.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="rounded-lg bg-bosque/10 p-3">
                  <Wallet className="h-6 w-6 text-bosque" />
                </div>
                <span className="badge-calculated">Calculado</span>
              </div>
              <p className="text-body-sm text-gray-600 mb-2">Capital inicial neto</p>
              <p className="font-serif text-h1 text-carbon tabular-nums">
                {formatCurrency(activeScenario.netStartingCapital, activeScenario.currency)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="rounded-lg bg-bosque/10 p-3">
                  <TrendingUp className="h-6 w-6 text-bosque" />
                </div>
                <span className="badge-calculated">Calculado</span>
              </div>
              <p className="text-body-sm text-gray-600 mb-2">Capital disponible</p>
              <p className="font-serif text-h1 text-carbon tabular-nums">
                {formatCurrency(calculation.remainingCapital, activeScenario.currency)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`rounded-lg p-3 ${
                  calculation.netMonthlyCashFlow >= 0 ? 'bg-green-100' : 'bg-orange-100'
                }`}>
                  <DollarSign className={`h-6 w-6 ${
                    calculation.netMonthlyCashFlow >= 0 ? 'text-green-700' : 'text-orange-700'
                  }`} />
                </div>
                <span className="badge-calculated">Calculado</span>
              </div>
              <p className="text-body-sm text-gray-600 mb-2">Flujo de caja mensual</p>
              <p className={`font-serif text-h1 tabular-nums ${
                calculation.netMonthlyCashFlow >= 0 ? 'text-green-700' : 'text-orange-700'
              }`}>
                {formatCurrency(calculation.netMonthlyCashFlow, activeScenario.currency)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Dream */}
          {dream ? (
            <Card>
              <CardHeader>
                <CardTitle>Tu visión de vida</CardTitle>
                <CardDescription>{dream.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body text-gray-700 line-clamp-3">
                  {dream.description}
                </p>
                {dream.hobbiesActivities.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {dream.hobbiesActivities.slice(0, 3).map((activity) => (
                      <span
                        key={activity}
                        className="inline-flex items-center rounded-full bg-bosque/10 px-3 py-1 text-body-sm font-medium text-bosque"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                )}
                <Link href="/disena">
                  <Button variant="outline" className="w-full">
                    Ver detalles completos
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="py-16 text-center">
                <div className="rounded-full bg-bosque/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-bosque" />
                </div>
                <h3 className="font-serif text-h3 text-carbon mb-2">
                  Diseña tu vida ideal
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  Describe cómo imaginas tu futuro y déjanos ayudarte a planificarlo
                </p>
                <Link href="/disena">
                  <Button>
                    Empezar ahora
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}

          {/* Right Column - Plan Items */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Elementos en tu plan</CardTitle>
                  <CardDescription>
                    {planItems.length} elementos seleccionados
                  </CardDescription>
                </div>
                <Link href="/plan">
                  <Button variant="text" size="sm">
                    Ver todo
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              {planItems.length > 0 ? (
                <div className="space-y-4">
                  {planItems.slice(0, 4).map((item) => (
                    <div key={item.id} className="flex justify-between items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium text-carbon text-body">{item.title}</p>
                        <p className="text-body-sm text-gray-600">
                          {formatCurrency(item.acquisitionCost, activeScenario.currency)}
                        </p>
                      </div>
                      {item.recurringCostMonthly > 0 && (
                        <span className="text-body-sm text-gray-500">
                          +{formatCurrency(item.recurringCostMonthly, activeScenario.currency)}/mes
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-body text-gray-600 mb-4">
                    Aún no has agregado elementos a tu plan
                  </p>
                  <Link href="/explorar">
                    <Button variant="outline" size="sm">
                      <Search className="mr-2 h-4 w-4" />
                      Explorar opciones
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Acciones rápidas</CardTitle>
            <CardDescription>Continúa trabajando en tu plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/disena" className="group">
                <div className="border border-gray-200 rounded-lg p-6 hover:border-bosque hover:bg-bosque/5 transition-all">
                  <Sparkles className="h-6 w-6 text-bosque mb-3" />
                  <h4 className="font-medium text-carbon text-body mb-1">Diseñar mi vida</h4>
                  <p className="text-body-sm text-gray-600">
                    Define tu estilo de vida ideal
                  </p>
                </div>
              </Link>
              
              <Link href="/explorar" className="group">
                <div className="border border-gray-200 rounded-lg p-6 hover:border-bosque hover:bg-bosque/5 transition-all">
                  <Search className="h-6 w-6 text-bosque mb-3" />
                  <h4 className="font-medium text-carbon text-body mb-1">Explorar opciones</h4>
                  <p className="text-body-sm text-gray-600">
                    Descubre propiedades y más
                  </p>
                </div>
              </Link>
              
              <Link href="/plan" className="group">
                <div className="border border-gray-200 rounded-lg p-6 hover:border-bosque hover:bg-bosque/5 transition-all">
                  <FileText className="h-6 w-6 text-bosque mb-3" />
                  <h4 className="font-medium text-carbon text-body mb-1">Ver mi plan</h4>
                  <p className="text-body-sm text-gray-600">
                    Análisis financiero detallado
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
