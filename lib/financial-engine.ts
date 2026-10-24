import {
  Scenario,
  PlanItem,
  FinancialCalculation,
  Currency,
} from "./types";

export function calculateFinancials(
  scenario: Scenario,
  planItems: PlanItem[]
): FinancialCalculation {
  const totalAcquisitionCosts = planItems.reduce(
    (sum, item) => sum + item.acquisitionCost,
    0
  );

  const totalSetupCosts = planItems.reduce(
    (sum, item) => sum + item.setupCost,
    0
  );

  const totalRecurringMonthly = planItems.reduce(
    (sum, item) => sum + item.recurringCostMonthly,
    0
  );

  const totalIncomeMonthly = planItems.reduce(
    (sum, item) => sum + item.potentialIncomeMonthly,
    0
  );

  const netMonthlyCashFlow =
    scenario.recurringIncome + totalIncomeMonthly - 
    scenario.recurringExpenses - totalRecurringMonthly;

  const remainingCapital =
    scenario.netStartingCapital - totalAcquisitionCosts - totalSetupCosts;

  const projectedNetWorth = projectNetWorth(
    remainingCapital,
    netMonthlyCashFlow,
    scenario.investmentReturn,
    scenario.timeHorizon
  );

  let yearsUntilDepletionIfNegative: number | undefined;
  if (netMonthlyCashFlow < 0) {
    yearsUntilDepletionIfNegative = calculateYearsUntilDepletion(
      remainingCapital,
      netMonthlyCashFlow,
      scenario.investmentReturn
    );
  }

  return {
    scenarioId: scenario.id,
    netStartingCapital: scenario.netStartingCapital,
    totalAcquisitionCosts,
    totalSetupCosts,
    totalRecurringMonthly,
    totalIncomeMonthly,
    netMonthlyCashFlow,
    remainingCapital,
    projectedNetWorth,
    yearsUntilDepletionIfNegative,
  };
}

function projectNetWorth(
  startingCapital: number,
  monthlyCashFlow: number,
  annualReturn: number,
  years: number
): Array<{ year: number; value: number }> {
  const projection: Array<{ year: number; value: number }> = [];
  let currentValue = startingCapital;

  projection.push({ year: 0, value: currentValue });

  const monthlyReturn = annualReturn / 12;

  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      currentValue = currentValue * (1 + monthlyReturn) + monthlyCashFlow;
      if (currentValue < 0) {
        currentValue = 0;
      }
    }
    projection.push({ year, value: currentValue });
  }

  return projection;
}

function calculateYearsUntilDepletion(
  startingCapital: number,
  monthlyCashFlow: number,
  annualReturn: number
): number | undefined {
  if (monthlyCashFlow >= 0) {
    return undefined;
  }

  let currentValue = startingCapital;
  const monthlyReturn = annualReturn / 12;
  let months = 0;
  const maxMonths = 1200;

  while (currentValue > 0 && months < maxMonths) {
    currentValue = currentValue * (1 + monthlyReturn) + monthlyCashFlow;
    months++;
  }

  if (months >= maxMonths) {
    return undefined;
  }

  return Math.floor(months / 12);
}

export function formatCurrency(amount: number, currency: Currency): string {
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(amount);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("es-ES").format(value);
}

export function getScenarioTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    baloto: "Baloto Colombia",
    powerball: "Powerball USA",
    salary: "Salario / Ingreso recurrente",
    business_sale: "Venta de negocio",
    asset_sale: "Venta de activo",
    custom: "Personalizado",
  };
  return labels[type] || type;
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    housing: "Vivienda",
    vehicle: "Vehículo",
    land: "Terreno / Finca",
    hobby: "Hobby / Deporte",
    travel: "Viajes",
    membership: "Membresía / Club",
    business: "Negocio",
    service: "Servicio",
    investment: "Inversión",
    other: "Otro",
  };
  return labels[category] || category;
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    inspiration: "Inspiración",
    researching: "Investigando",
    finalist: "Finalista",
    in_plan: "En el plan",
    discarded: "Descartado",
  };
  return labels[status] || status;
}
