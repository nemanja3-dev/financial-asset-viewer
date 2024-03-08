export type Asset = {
  id: string;
  name: string;
  assetClass: AssetClass;
  currency: Currency;
  ticker: string;
  logoUrl?: string;
  country?: string;
  lastClosePrice: number;
  industry: string;
  sector: string;
  companyName: string;
  ceo?: string;
  shortDescription: string;
  employeeCount: number;
  marketCap?: number;
  trailingPE?: number;
  trailingAnnualDividendYield?: number;
  priceTarget?: PriceTarget;
  priceToSalesRatio?: number;
  priceToBookRatio?: number;
  profitMargin?: number;
  revenueTTM?: number;
  revenuePerShareTTM?: number;
  ebitda?: number;
  average10DaysVolume: number;
  average30DaysVolume: number;
  analystRating?: AnalystRating;
};

export type AnalystRating = {
  buy: number;
  hold: number;
  sell: number;
  strongBuy: number;
  strongSell: number;
};

export enum AssetClass {
  Adr = "adr",
  Etf = "etf",
  Stock = "stock",
}

export enum Currency {
  CAD = "CAD",
  Dkk = "DKK",
  Eur = "EUR",
  Sek = "SEK",
  Usd = "USD",
}

export type PriceTarget = {
  low: string;
  high: string;
  median: string;
  average: string;
};

export type MappedAsset = {
  weight: number;
} & Asset;
