import { AppLayout } from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dataStore } from "@/lib/data-store";
import { calculateFinancials, formatCurrency, getScenarioTypeLabel } from "@/lib/financial-engine";
import { Plus, TrendingUp, Wallet, Target } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const activeScenario = dataStore.scenarios.getActive();
  
  if (!activeScenario) {
    return (
      <AppLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Bienvenido a Life Simulator
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Explora posibilidades, diseña tu vida ideal y planifica tu futuro financiero
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

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Panel de control
          </h1>
          <p className="text-slate-600">
            Escenario activo: {activeScenario.name}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Capital inicial neto</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {formatCurrency(activeScenario.netStartingCapital, activeScenario.currency)}
                  </p>
                </div>
                <div className="rounded-full bg-blue-100 p-3">
                  <Wallet className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Capital restante</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {formatCurrency(calculation.remainingCapital, activeScenario.currency)}
                  </p>
                </div>
                <div className="rounded-full bg-green-100 p-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Flujo mensual neto</p>
                  <p className={`text-2xl font-bold ${
                    calculation.netMonthlyCashFlow >= 0 ? "text-green-600" : "text-red-600"
                  }`}>
                    {formatCurrency(calculation.netMonthlyCashFlow, activeScenario.currency)}
                  </p>
                </div>
                <div className="rounded-full bg-purple-100 p-3">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tu escenario</CardTitle>
              <CardDescription>{getScenarioTypeLabel(activeScenario.type)}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Tipo de escenario</span>
                  <span className="font-medium">{getScenarioTypeLabel(activeScenario.type)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Moneda</span>
                  <span className="font-medium">{activeScenario.currency}</span>
                </div>
                {activeScenario.grossProceeds && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Monto bruto</span>
                    <span className="font-medium">
                      {formatCurrency(activeScenario.grossProceeds, activeScenario.currency)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Horizonte temporal</span>
                  <span className="font-medium">{activeScenario.timeHorizon} años</span>
                </div>
              </div>
              <Link href="/escenarios">
                <Button variant="outline" className="w-full">
                  Ver detalles
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acciones rápidas</CardTitle>
              <CardDescription>Explora y diseña tu vida ideal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/disena" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Diseñar mi estilo de vida
                </Button>
              </Link>
              <Link href="/explorar" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Explorar opciones
                </Button>
              </Link>
              <Link href="/plan" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Ver mi plan financiero
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {planItems.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Elementos en tu plan</CardTitle>
              <CardDescription>{planItems.length} elementos seleccionados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {planItems.slice(0, 5).map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <div>
                      <p className="font-medium text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600">
                        {formatCurrency(item.acquisitionCost, activeScenario.currency)}
                      </p>
                    </div>
                  </div>
                ))}
                {planItems.length > 5 && (
                  <Link href="/plan">
                    <Button variant="ghost" size="sm" className="w-full">
                      Ver todos los elementos
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}
