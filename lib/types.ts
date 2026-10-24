import { z } from "zod";

export const ScenarioTypeSchema = z.enum([
  "baloto",
  "powerball",
  "salary",
  "business_sale",
  "asset_sale",
  "custom",
]);

export type ScenarioType = z.infer<typeof ScenarioTypeSchema>;

export const CurrencySchema = z.enum(["COP", "USD", "EUR"]);
export type Currency = z.infer<typeof CurrencySchema>;

export const ScenarioSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: ScenarioTypeSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  startDate: z.date(),
  currency: CurrencySchema,
  grossProceeds: z.number().optional(),
  taxes: z.number().default(0),
  transactionCosts: z.number().default(0),
  netStartingCapital: z.number(),
  recurringIncome: z.number().default(0),
  recurringExpenses: z.number().default(0),
  investmentReturn: z.number().default(0.05),
  cashReserve: z.number().default(0),
  timeHorizon: z.number().default(30),
  notes: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type Scenario = z.infer<typeof ScenarioSchema>;

export const LifestyleDreamSchema = z.object({
  id: z.string(),
  scenarioId: z.string(),
  title: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  vision: z.string().optional(),
  preferredCountries: z.array(z.string()).default([]),
  preferredCities: z.array(z.string()).default([]),
  housingNeeds: z.string().optional(),
  hobbiesActivities: z.array(z.string()).default([]),
  vehicleNeeds: z.string().optional(),
  businessIdeas: z.string().optional(),
  estimatedStartupCosts: z.number().optional(),
  estimatedRecurringExpenses: z.number().optional(),
  timeCommitment: z.string().optional(),
  priorities: z.array(z.string()).default([]),
  unknowns: z.array(z.string()).default([]),
});

export type LifestyleDream = z.infer<typeof LifestyleDreamSchema>;

export const ItemCategorySchema = z.enum([
  "housing",
  "vehicle",
  "land",
  "hobby",
  "travel",
  "membership",
  "business",
  "service",
  "investment",
  "other",
]);

export type ItemCategory = z.infer<typeof ItemCategorySchema>;

export const ItemStatusSchema = z.enum([
  "inspiration",
  "researching",
  "finalist",
  "in_plan",
  "discarded",
]);

export type ItemStatus = z.infer<typeof ItemStatusSchema>;

export const SavedItemSchema = z.object({
  id: z.string(),
  scenarioId: z.string().optional(),
  title: z.string(),
  url: z.string().url(),
  sourceDomain: z.string().optional(),
  category: ItemCategorySchema,
  imageUrl: z.string().url().optional(),
  price: z.number().optional(),
  currency: CurrencySchema.optional(),
  location: z.string().optional(),
  dateAdded: z.date(),
  lastVerified: z.date().optional(),
  notes: z.string().optional(),
  tags: z.array(z.string()).default([]),
  status: ItemStatusSchema,
  isInPlan: z.boolean().default(false),
});

export type SavedItem = z.infer<typeof SavedItemSchema>;

export const PlanItemSchema = z.object({
  id: z.string(),
  scenarioId: z.string(),
  savedItemId: z.string().optional(),
  title: z.string(),
  category: ItemCategorySchema,
  acquisitionCost: z.number(),
  setupCost: z.number().default(0),
  recurringCostMonthly: z.number().default(0),
  potentialIncomeMonthly: z.number().default(0),
  sourceUrl: z.string().optional(),
  confidenceLevel: z.enum(["low", "medium", "high"]).default("medium"),
  notes: z.string().optional(),
});

export type PlanItem = z.infer<typeof PlanItemSchema>;

export const FinancialCalculationSchema = z.object({
  scenarioId: z.string(),
  netStartingCapital: z.number(),
  totalAcquisitionCosts: z.number(),
  totalSetupCosts: z.number(),
  totalRecurringMonthly: z.number(),
  totalIncomeMonthly: z.number(),
  netMonthlyCashFlow: z.number(),
  remainingCapital: z.number(),
  projectedNetWorth: z.array(z.object({
    year: z.number(),
    value: z.number(),
  })),
  yearsUntilDepletionIfNegative: z.number().optional(),
});

export type FinancialCalculation = z.infer<typeof FinancialCalculationSchema>;

export const VersionSchema = z.object({
  id: z.string(),
  scenarioId: z.string(),
  name: z.string(),
  createdAt: z.date(),
  snapshotData: z.object({
    scenario: ScenarioSchema,
    dream: LifestyleDreamSchema.optional(),
    planItems: z.array(PlanItemSchema),
    calculation: FinancialCalculationSchema,
  }),
  notes: z.string().optional(),
});

export type Version = z.infer<typeof VersionSchema>;
