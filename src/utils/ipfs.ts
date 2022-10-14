/*
 * f: getHashFromIpfsUrl
 */

export const getHashFromIpfsUrl = (url: string): string | undefined => {
	const regex = /Qm(\w{44})[/\w]*/;

	if (regex.test(url)) {
		const matches = url.match(regex) as string[];
		return matches[0];
	}

	return undefined;
};
