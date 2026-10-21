import { Scenario, SavedItem, PlanItem, LifestyleDream } from "./types";

let scenarios: Scenario[] = [
  {
    id: "scenario-1",
    name: "Baloto - Escenario inicial",
    type: "baloto",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date(),
    startDate: new Date("2024-01-15"),
    currency: "COP",
    grossProceeds: 50000000000,
    taxes: 10000000000,
    transactionCosts: 500000000,
    netStartingCapital: 39500000000,
    recurringIncome: 0,
    recurringExpenses: 15000000,
    investmentReturn: 0.05,
    cashReserve: 5000000000,
    timeHorizon: 30,
    isActive: true,
    notes: "Escenario base ganando el premio mayor de Baloto",
  },
];

let savedItems: SavedItem[] = [];
let planItems: PlanItem[] = [];
let lifestyleDreams: LifestyleDream[] = [];

export const dataStore = {
  scenarios: {
    getAll: () => scenarios,
    getById: (id: string) => scenarios.find((s) => s.id === id),
    getActive: () => scenarios.find((s) => s.isActive),
    create: (scenario: Scenario) => {
      scenarios.push(scenario);
      return scenario;
    },
    update: (id: string, updates: Partial<Scenario>) => {
      const index = scenarios.findIndex((s) => s.id === id);
      if (index !== -1) {
        scenarios[index] = { ...scenarios[index], ...updates, updatedAt: new Date() };
        return scenarios[index];
      }
      return undefined;
    },
    delete: (id: string) => {
      scenarios = scenarios.filter((s) => s.id !== id);
    },
  },
  
  savedItems: {
    getAll: () => savedItems,
    getById: (id: string) => savedItems.find((item) => item.id === id),
    getByScenario: (scenarioId: string) => 
      savedItems.filter((item) => item.scenarioId === scenarioId),
    create: (item: SavedItem) => {
      savedItems.push(item);
      return item;
    },
    update: (id: string, updates: Partial<SavedItem>) => {
      const index = savedItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        savedItems[index] = { ...savedItems[index], ...updates };
        return savedItems[index];
      }
      return undefined;
    },
    delete: (id: string) => {
      savedItems = savedItems.filter((item) => item.id !== id);
    },
  },

  planItems: {
    getAll: () => planItems,
    getById: (id: string) => planItems.find((item) => item.id === id),
    getByScenario: (scenarioId: string) =>
      planItems.filter((item) => item.scenarioId === scenarioId),
    create: (item: PlanItem) => {
      planItems.push(item);
      return item;
    },
    update: (id: string, updates: Partial<PlanItem>) => {
      const index = planItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        planItems[index] = { ...planItems[index], ...updates };
        return planItems[index];
      }
      return undefined;
    },
    delete: (id: string) => {
      planItems = planItems.filter((item) => item.id !== id);
    },
  },

  lifestyleDreams: {
    getAll: () => lifestyleDreams,
    getById: (id: string) => lifestyleDreams.find((dream) => dream.id === id),
    getByScenario: (scenarioId: string) =>
      lifestyleDreams.find((dream) => dream.scenarioId === scenarioId),
    create: (dream: LifestyleDream) => {
      lifestyleDreams.push(dream);
      return dream;
    },
    update: (id: string, updates: Partial<LifestyleDream>) => {
      const index = lifestyleDreams.findIndex((dream) => dream.id === id);
      if (index !== -1) {
        lifestyleDreams[index] = { ...lifestyleDreams[index], ...updates, updatedAt: new Date() };
        return lifestyleDreams[index];
      }
      return undefined;
    },
    delete: (id: string) => {
      lifestyleDreams = lifestyleDreams.filter((dream) => dream.id !== id);
    },
  },

  generateId: () => `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
};
