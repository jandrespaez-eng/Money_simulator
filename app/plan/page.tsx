"use client";

import { AppLayout } from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dataStore } from "@/lib/data-store";
import { calculateFinancials, formatCurrency, getCategoryLabel } from "@/lib/financial-engine";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Plus, TrendingUp, TrendingDown } from "lucide-react";

export default function PlanPage() {
  const activeScenario = dataStore.scenarios.getActive();

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

  const planItems = dataStore.planItems.getByScenario(activeScenario.id);
  const calculation = calculateFinancials(activeScenario, planItems);

  const chartData = calculation.projectedNetWorth.filter((_, index) => index % 5 === 0 || index === 0);

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Mi plan financiero
          </h1>
          <p className="text-slate-600">
            Análisis detallado de tu escenario: {activeScenario.name}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600 mb-1">Capital inicial</p>
              <p className="text-xl font-bold text-slate-900">
                {formatCurrency(calculation.netStartingCapital, activeScenario.currency)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600 mb-1">Inversiones</p>
              <p className="text-xl font-bold text-slate-900">
                {formatCurrency(calculation.totalAcquisitionCosts + calculation.totalSetupCosts, activeScenario.currency)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600 mb-1">Capital restante</p>
              <p className="text-xl font-bold text-slate-900">
                {formatCurrency(calculation.remainingCapital, activeScenario.currency)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600 mb-1">Flujo mensual</p>
              <div className="flex items-center gap-2">
                <p className={`text-xl font-bold ${
                  calculation.netMonthlyCashFlow >= 0 ? "text-green-600" : "text-red-600"
                }`}>
                  {formatCurrency(Math.abs(calculation.netMonthlyCashFlow), activeScenario.currency)}
                </p>
                {calculation.netMonthlyCashFlow >= 0 ? (
                  <TrendingUp className="h-5 w-5 text-green-600" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-600" />
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Proyección de patrimonio neto</CardTitle>
            <CardDescription>
              Crecimiento estimado con retorno anual del {(activeScenario.investmentReturn * 100).toFixed(1)}%
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#64748b"
                    label={{ value: 'Años', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    stroke="#64748b"
                    tickFormatter={(value) => `${(value / 1000000000).toFixed(0)}B`}
                  />
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value, activeScenario.currency)}
                    labelFormatter={(label) => `Año ${label}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', r: 4 }}
                    name="Patrimonio neto"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Ingresos mensuales</CardTitle>
                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(activeScenario.recurringIncome + calculation.totalIncomeMonthly, activeScenario.currency)}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Ingresos recurrentes base</span>
                <span className="font-medium">{formatCurrency(activeScenario.recurringIncome, activeScenario.currency)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Ingresos de plan</span>
                <span className="font-medium">{formatCurrency(calculation.totalIncomeMonthly, activeScenario.currency)}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Gastos mensuales</CardTitle>
                <p className="text-2xl font-bold text-red-600">
                  {formatCurrency(activeScenario.recurringExpenses + calculation.totalRecurringMonthly, activeScenario.currency)}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Gastos base</span>
                <span className="font-medium">{formatCurrency(activeScenario.recurringExpenses, activeScenario.currency)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Gastos de plan</span>
                <span className="font-medium">{formatCurrency(calculation.totalRecurringMonthly, activeScenario.currency)}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {planItems.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>Elementos en tu plan ({planItems.length})</CardTitle>
              <CardDescription>Detalle de adquisiciones y costos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {planItems.map((item) => (
                  <div key={item.id} className="flex items-start justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-600">{getCategoryLabel(item.category)}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">
                        {formatCurrency(item.acquisitionCost, activeScenario.currency)}
                      </p>
                      {item.recurringCostMonthly > 0 && (
                        <p className="text-sm text-slate-600">
                          +{formatCurrency(item.recurringCostMonthly, activeScenario.currency)}/mes
                        </p>
                      )}
                      {item.potentialIncomeMonthly > 0 && (
                        <p className="text-sm text-green-600">
                          +{formatCurrency(item.potentialIncomeMonthly, activeScenario.currency)}/mes ingreso
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-slate-600 mb-4">
                Aún no has añadido elementos a tu plan
              </p>
              <Button>
                <Plus className="mr-2 h-5 w-5" />
                Explorar opciones
              </Button>
            </CardContent>
          </Card>
        )}

        {calculation.yearsUntilDepletionIfNegative !== undefined && (
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <p className="text-sm text-orange-900">
                ⚠️ <strong>Advertencia:</strong> Con este flujo de caja negativo, tu capital se agotaría 
                en aproximadamente {calculation.yearsUntilDepletionIfNegative} años. Considera ajustar 
                tus gastos o aumentar tus ingresos.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}
