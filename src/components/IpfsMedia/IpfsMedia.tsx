import React, { useEffect, useState } from 'react';

import {
	getCloudinaryUrls,
	getCloudinaryVideoPoster,
	CloudinaryAssetOptions,
	CloudinaryAssetFill,
	getCloudinaryVideoAsImageFromIpfsUrl,
} from '../../utils/cloudinary';
import { getHashFromIpfsUrl } from '../../utils/ipfs';

import { Image, ImageProps, Video } from '@zero-tech/zui/components';

export interface IpfsMediaProps extends ImageProps {
	src?: string;
	options?: CloudinaryAssetOptions;
	asImage?: boolean;
}

const FitMap: Record<CloudinaryAssetFill, ImageProps['objectFit']> = {
	['fit']: 'contain',
	['fill']: 'cover',
};

export const IpfsMedia = ({
	src,
	options,
	asImage,
	...rest
}: IpfsMediaProps) => {
	const [hasVideoFailed, setHasVideoFailed] = useState(false);
	const [hasImageFailed, setHasImageFailed] = useState(false);

	const hash = getHashFromIpfsUrl(src);
	const urls = getCloudinaryUrls(hash, options);
	const objectFit = FitMap[options?.fit];

	useEffect(() => {
		setHasImageFailed(false);
		setHasVideoFailed(false);
	}, [src, asImage]);

	// Not sure how to handle failed images yet, just show Image skeleton
	if (
		src === undefined ||
		urls === undefined ||
		(hasImageFailed && hasVideoFailed)
	) {
		return <Image src={''} {...rest} />;
	}

	if (!hasImageFailed) {
		return (
			<Image
				{...rest}
				src={urls.image}
				onError={() => {
					setHasImageFailed(true);
				}}
				objectFit={objectFit}
			/>
		);
	} else if (!hasVideoFailed) {
		if (asImage) {
			return (
				<Image
					{...rest}
					src={getCloudinaryVideoAsImageFromIpfsUrl(src, options)}
					onError={() => {
						setHasImageFailed(true);
					}}
					objectFit={objectFit}
				/>
			);
		} else {
			return (
				<Video
					{...rest}
					poster={getCloudinaryVideoPoster(hash)}
					src={urls.video}
					onError={() => setHasVideoFailed(true)}
					autoPlay={true}
					loop
				/>
			);
		}
	}
};
