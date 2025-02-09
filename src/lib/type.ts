export interface Metric {
  name: string;
  percentage: number;
}

export interface Plan {
  name: string;
  priceMonthly: number;
  priceYearly: number;
}

export interface ApiData {
  projects: number;
  requests: number;
  users: number;
  storage: string;
  maxStorage: string;
  apiCall: number[];
  profitGrowth: number;
  metrics: Metric[];
  plans: Plan[];
}