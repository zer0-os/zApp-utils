/*
 * f: numberToFiatLocaleString
 */

type NumberToFiatLocaleStringOptions = {
	decimals?: number;
	locale?: string;
	currencyPrefix?: string;
};

/**
 * Formats a number to a fiat currency locale string.
 * @param number number to format
 * @param decimals to round to
 * @param locale to format number as
 * @param currencyPrefix to prepend to the formatted number, e.g. '$'
 */
export const numberToFiatLocaleString = (
	number: number,
	{
		decimals = 2,
		locale = 'en-US',
		currencyPrefix,
	}: NumberToFiatLocaleStringOptions,
): string => {
	return (
		currencyPrefix +
		number.toLocaleString(locale ?? 'en-US', {
			maximumFractionDigits: decimals,
		})
	);
};
