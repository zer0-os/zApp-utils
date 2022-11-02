import { Networks, NETWORK_NAMES } from '../constants/networks';

export const getEtherscanBaseUrl = (network: Networks): string => {
	let prefix;
	if (network !== Networks.MAINNET) {
		prefix = `${NETWORK_NAMES[network].toLowerCase()}.`;
	}
	return `https://${prefix}etherscan.io/`;
};

export const getEtherscanWalletUrl = (walletAddress: string, network: Networks): string => {
	return getEtherscanBaseUrl(network) + '/address/' + walletAddress;
};
