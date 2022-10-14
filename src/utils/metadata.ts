export const parseDomainMetadata = (metadata: any): any => {
	return {
		...metadata,
		title: metadata.title || metadata.name || '',
		stakingRequested: metadata.stakingRequested || metadata.stakingrequests,
		isBiddable: Boolean(metadata.isBiddable),
		isMintable: Boolean(metadata.isMintable),
		gridViewByDefault: Boolean(metadata.gridViewByDefault),
		customDomainHeader: Boolean(metadata.customDomainHeader),
	};
};
