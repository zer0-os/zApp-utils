export const cloudName = 'fact0ry';
export const folder = 'zns';

import { setConfig, buildImageUrl, buildVideoUrl } from 'cloudinary-build-url';
import { getHashFromIpfsUrl } from './ipfs';

setConfig({
	cloudName,
});

export const getCloudinaryVideoPoster = (hash: string, options?: string) => {
	return `https://res.cloudinary.com/${cloudName}/video/upload/so_0/${
		options?.length ? options + '/' : ''
	}v1/${folder}/${hash}.jpg`;
};

export type CloudinaryAssetType = 'image' | 'video';

export type CloudinaryAssetSize =
	| 'thumbnail'
	| 'small'
	| 'medium'
	| 'large'
	| 'full';

const Sizes: Record<CloudinaryAssetSize, number | undefined> = {
	['thumbnail']: 50,
	['small']: 100,
	['medium']: 300,
	['large']: 1200,
	['full']: undefined,
};

export type CloudinaryAssetFill = 'fill' | 'fit';

export interface CloudinaryAssetOptions {
	size?: CloudinaryAssetSize;
	fit?: CloudinaryAssetFill;
}

export const getCloudinaryUrl = (
	hash: string,
	type: CloudinaryAssetType,
	options?: CloudinaryAssetOptions,
) => {
	const file = `${folder}/${hash}`;
	const sharedOptions = { cloud: cloudName };

	const resize = {
		width: Sizes[options?.size],
		height: Sizes[options?.size],
		type: options?.fit ?? 'fit',
	};

	const transformations = { resize };

	if (type === 'image') {
		return buildImageUrl(file, { ...sharedOptions, transformations });
	} else {
		return buildVideoUrl(file, {
			...sharedOptions,
			transformations,
		});
	}
};

export const getCloudinaryUrlFromIpfs = (
	ipfs: string,
	type: CloudinaryAssetType,
	options?: CloudinaryAssetOptions,
) => {
	const hash = getHashFromIpfsUrl(ipfs);
	return getCloudinaryUrl(hash, type, options);
};

export const getCloudinaryImageUrlFromIpfsUrl = (
	ipfsUrl: string,
	options?: CloudinaryAssetOptions,
) => {
	return getCloudinaryUrlFromIpfs(ipfsUrl, 'image', options);
};

export const getCloudinaryVideoUrlFromIpfsUrl = (
	ipfsUrl: string,
	options?: CloudinaryAssetOptions,
) => {
	return getCloudinaryUrlFromIpfs(ipfsUrl, 'video', options);
};

export const getCloudinaryVideoAsImageFromIpfsUrl = (
	hash: string,
	options?: CloudinaryAssetOptions,
) => {
	return getCloudinaryVideoUrlFromIpfsUrl(hash, options) + '.jpg';
};

export const getCloudinaryUrls = (
	hash: string,
	options?: CloudinaryAssetOptions,
) => {
	return {
		image: getCloudinaryImageUrlFromIpfsUrl(hash, options),
		video: getCloudinaryVideoUrlFromIpfsUrl(hash, options),
	};
};
