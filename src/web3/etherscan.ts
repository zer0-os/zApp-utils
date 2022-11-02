import { Networks, NETWORK_NAMES } from '../constants/networks';

export const getEtherscanBaseUrl = (chainId: Networks): string => {
	let prefix;
	if (chainId !== Networks.MAINNET) {
		prefix = `${NETWORK_NAMES[chainId]?.toLowerCase()}.`;
	}
	return `https://${prefix?.length ? prefix : ''}etherscan.io/`;
};

export const getEtherscanWalletUrl = (
	walletAddress: string,
	chainId: Networks,
): string => {
	return getEtherscanBaseUrl(chainId) + 'address/' + walletAddress;
};
