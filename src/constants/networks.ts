export enum Networks {
	MAINNET = 1,
	RINKEBY = 4,
	GOERLI = 5,
}

/**
 * These must stay as single words, as they are used in URLs
 */
export const NETWORK_NAMES: Record<Networks, string> = {
	[Networks.MAINNET]: 'Mainnet',
	[Networks.RINKEBY]: 'Rinkeby',
	[Networks.GOERLI]: 'Goerli',
};
