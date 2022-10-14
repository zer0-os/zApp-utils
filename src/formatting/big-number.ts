import { BigNumber } from 'ethers';
import { formatUnits, commify } from 'ethers/lib/utils';

/*
 * f: bigNumberToLocaleString
 */

type BigNumberToLocaleStringOptions = {
	decimals?: number;
};

export const bigNumberToLocaleString = (
	value: BigNumber,
	{ decimals = 18 }: BigNumberToLocaleStringOptions,
): string => {
	return commify(formatUnits(value, decimals));
};

/*
 * f: bigNumberToLocaleString
 */

export const weiToLocaleString = (wei: BigNumber): string => {
	return bigNumberToLocaleString(wei, { decimals: 18 });
};

/*
 * f: cryptoToFiat
 */

export const cryptoToFiat = (
	crypto: BigNumber,
	conversionRate: number,
): number => {
	const cryptoValue = parseFloat(formatUnits(crypto, 18));
	return cryptoValue * conversionRate;
};
