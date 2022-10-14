import { ethers } from 'ethers';

export const rootDomainName = '';
export const rootDomainId = ethers.constants.HashZero;

const getSubnodeHash = (parentHash: string, labelHash: string): string => {
	return ethers.utils.keccak256(
		ethers.utils.defaultAbiCoder.encode(
			['bytes32', 'bytes32'],
			[ethers.utils.arrayify(parentHash), ethers.utils.arrayify(labelHash)],
		),
	);
};

export const isRootDomain = (domainId: string | undefined): boolean => {
	return domainId === rootDomainId;
};

export const getDomainIdFromDomainName = (name: string): string => {
	let hashReturn = rootDomainId;

	if (!name || !name.length) {
		return rootDomainId;
	}

	const domains = name.split('.');
	for (let i = 0; i < domains.length; i++) {
		hashReturn = getSubnodeHash(hashReturn, ethers.utils.id(domains[i]));
	}
	return hashReturn;
};
