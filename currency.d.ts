export interface ExchangeRateOptions {
    /**
     * The point in time to evaluate currency.
     */
    date?: number | string;
    /**
     * The internal ID or three-letter ISO code for the currency you are converting from.
     */
    source: number | string;
    /**
     * The internal ID or three-letter ISO code for the currency you are converting to.
     */
    target: number | string;
}

export interface CurrencyModule {
    /**
     * Method used to return the exchange rate between two currencies based on a certain date.
     * The exchange rate values are sourced from the Currency Exchange Rate record.
     */
    exchangeRate(options: ExchangeRateOptions): number;
}

export default CurrencyModule;