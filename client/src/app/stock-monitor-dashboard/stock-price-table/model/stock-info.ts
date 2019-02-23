export interface StockInfo {
  stock_code?: string;
  changed?: number
  language?: string;
  region?: string;
  quoteType?: string;
  currency?: string;
  fiftyTwoWeekLowChangePercent?: number;
  fiftyTwoWeekLowChange?: number;
  fiftyTwoWeekRange?: string;
  fiftyTwoWeekHighChange?: number;
  fiftyTwoWeekHighChangePercent?: number;
  fiftyTwoWeekLow?: number;
  fiftyTwoWeekHigh?: number;
  dividendDate?: number;
  earningsTimestamp?: number;
  earningsTimestampStart?: number;
  earningsTimestampEnd?: number;
  trailingAnnualDividendRate?: number;
  trailingPE?: number;
  trailingAnnualDividendYield?: number;
  epsTrailingTwelveMonths?: number;
  epsForward?: number;
  postMarketChangePercent?: number;
  exchangeDataDelayedBy?: number;
  sharesOutstanding?: number;
  bookValue?: number;
  fiftyDayAverage?: number;
  fiftyDayAverageChange?: number;
  fiftyDayAverageChangePercent?: number;
  twoHundredDayAverage?: number;
  twoHundredDayAverageChange?: number;
  twoHundredDayAverageChangePercent?: number;
  forwardPE?: number;
  marketCap?: number;
  exchange?: string;
  priceHint?: number;
  regularMarketPrice?: number;
  regularMarketTime?: number;
  regularMarketChange?: number;
  regularMarketOpen?: number;
  regularMarketDayHigh?: number;
  regularMarketDayLow?: number;
  regularMarketVolume?: number;
  postMarketTime?: number;
  postMarketPrice?: number;
  postMarketChange?: number;
  regularMarketChangePercent?: number;
  regularMarketDayRange?: string;
  regularMarketPreviousClose?: number;
  bid?: number;
  ask?: number;
  bidSize?: number;
  askSize?: number;
  messageBoardId?: string;
  fullExchangeName?: string;
  longName?: string;
  financialCurrency?: string;
  averageDailyVolume3Month?: number;
  averageDailyVolume10Day?: number;
  priceToBook?: number;
  sourceInterval?: number;
  exchangeTimezoneName?: string;
  exchangeTimezoneShortName?: string;
  gmtOffSetMilliseconds?: number;
  esgPopulated?: boolean;
  tradeable?: boolean;
  shortName?: string;
  marketState?: string;
  market?: string;
  price?: number;
}
