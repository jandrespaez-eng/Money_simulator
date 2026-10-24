import { calculateFinancials } from "@/lib/financial-engine";
import type { Scenario, PlanItem } from "@/lib/types";

describe("Financial Engine", () => {
  const mockScenario: Scenario = {
    id: "test-1",
    name: "Test Scenario",
    type: "baloto",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    startDate: new Date("2024-01-01"),
    currency: "COP",
    netStartingCapital: 40000000000,
    recurringIncome: 5000000,
    recurringExpenses: 10000000,
    investmentReturn: 0.05,
    cashReserve: 5000000000,
    timeHorizon: 30,
    taxes: 0,
    transactionCosts: 0,
    isActive: true,
  };

  describe("calculateFinancials", () => {
    it("should calculate total acquisition costs correctly", () => {
      const planItems: PlanItem[] = [
        {
          id: "item-1",
          scenarioId: "test-1",
          title: "House",
          category: "housing",
          acquisitionCost: 1000000000,
          setupCost: 50000000,
          recurringCostMonthly: 5000000,
          potentialIncomeMonthly: 0,
          confidenceLevel: "high",
        },
        {
          id: "item-2",
          scenarioId: "test-1",
          title: "Car",
          category: "vehicle",
          acquisitionCost: 200000000,
          setupCost: 0,
          recurringCostMonthly: 2000000,
          potentialIncomeMonthly: 0,
          confidenceLevel: "high",
        },
      ];

      const result = calculateFinancials(mockScenario, planItems);

      expect(result.totalAcquisitionCosts).toBe(1200000000);
      expect(result.totalSetupCosts).toBe(50000000);
    });

    it("should calculate remaining capital correctly", () => {
      const planItems: PlanItem[] = [
        {
          id: "item-1",
          scenarioId: "test-1",
          title: "House",
          category: "housing",
          acquisitionCost: 1000000000,
          setupCost: 50000000,
          recurringCostMonthly: 0,
          potentialIncomeMonthly: 0,
          confidenceLevel: "high",
        },
      ];

      const result = calculateFinancials(mockScenario, planItems);

      expect(result.remainingCapital).toBe(40000000000 - 1000000000 - 50000000);
      expect(result.remainingCapital).toBe(38950000000);
    });

    it("should calculate net monthly cash flow correctly", () => {
      const planItems: PlanItem[] = [
        {
          id: "item-1",
          scenarioId: "test-1",
          title: "Rental Property",
          category: "housing",
          acquisitionCost: 1000000000,
          setupCost: 0,
          recurringCostMonthly: 3000000,
          potentialIncomeMonthly: 8000000,
          confidenceLevel: "medium",
        },
      ];

      const result = calculateFinancials(mockScenario, planItems);

      expect(result.totalIncomeMonthly).toBe(8000000);
      expect(result.totalRecurringMonthly).toBe(3000000);
      expect(result.netMonthlyCashFlow).toBe(5000000 + 8000000 - 10000000 - 3000000);
      expect(result.netMonthlyCashFlow).toBe(0);
    });

    it("should detect negative cash flow and calculate years until depletion", () => {
      const smallerScenario: Scenario = {
        ...mockScenario,
        netStartingCapital: 2000000000,
        recurringIncome: 0,
        recurringExpenses: 5000000,
      };

      const planItems: PlanItem[] = [
        {
          id: "item-1",
          scenarioId: "test-1",
          title: "Expensive lifestyle",
          category: "other",
          acquisitionCost: 0,
          setupCost: 0,
          recurringCostMonthly: 15000000,
          potentialIncomeMonthly: 0,
          confidenceLevel: "high",
        },
      ];

      const result = calculateFinancials(smallerScenario, planItems);

      expect(result.netMonthlyCashFlow).toBeLessThan(0);
      expect(result.yearsUntilDepletionIfNegative).toBeDefined();
      expect(result.yearsUntilDepletionIfNegative).toBeGreaterThan(0);
    });

    it("should not calculate years until depletion for positive cash flow", () => {
      const planItems: PlanItem[] = [
        {
          id: "item-1",
          scenarioId: "test-1",
          title: "Income property",
          category: "housing",
          acquisitionCost: 0,
          setupCost: 0,
          recurringCostMonthly: 2000000,
          potentialIncomeMonthly: 15000000,
          confidenceLevel: "high",
        },
      ];

      const result = calculateFinancials(mockScenario, planItems);

      expect(result.netMonthlyCashFlow).toBeGreaterThan(0);
      expect(result.yearsUntilDepletionIfNegative).toBeUndefined();
    });

    it("should project net worth over time", () => {
      const planItems: PlanItem[] = [];
      const result = calculateFinancials(mockScenario, planItems);

      expect(result.projectedNetWorth).toBeDefined();
      expect(result.projectedNetWorth.length).toBeGreaterThan(0);
      expect(result.projectedNetWorth[0].year).toBe(0);
      expect(result.projectedNetWorth[0].value).toBe(mockScenario.netStartingCapital);

      const lastProjection = result.projectedNetWorth[result.projectedNetWorth.length - 1];
      expect(lastProjection.year).toBe(mockScenario.timeHorizon);
    });

    it("should handle empty plan items", () => {
      const result = calculateFinancials(mockScenario, []);

      expect(result.totalAcquisitionCosts).toBe(0);
      expect(result.totalSetupCosts).toBe(0);
      expect(result.totalRecurringMonthly).toBe(0);
      expect(result.totalIncomeMonthly).toBe(0);
      expect(result.remainingCapital).toBe(mockScenario.netStartingCapital);
    });

    it("should apply investment returns to projections", () => {
      const planItems: PlanItem[] = [];
      const result = calculateFinancials(mockScenario, planItems);

      const year10 = result.projectedNetWorth.find((p) => p.year === 10);
      expect(year10).toBeDefined();
      expect(year10!.value).toBeGreaterThan(mockScenario.netStartingCapital);
    });
  });
});
