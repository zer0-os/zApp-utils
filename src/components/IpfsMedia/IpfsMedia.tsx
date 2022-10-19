import React, { useEffect, useState } from 'react';

import {
	getCloudinaryUrls,
	getCloudinaryVideoPoster,
	CloudinaryAssetOptions,
	CloudinaryAssetFill,
} from '../../utils/cloudinary';
import { getHashFromIpfsUrl } from '../../utils/ipfs';

import { Image, ImageProps } from '@zero-tech/zui/components/Image';

export interface IpfsMediaProps extends ImageProps {
	src?: string;
	options?: CloudinaryAssetOptions;
}

const FitMap: Record<CloudinaryAssetFill, ImageProps['objectFit']> = {
	['fit']: 'contain',
	['fill']: 'cover',
};

export const IpfsMedia = ({ src, options, ...rest }: IpfsMediaProps) => {
	const [hasVideoFailed, setHasVideoFailed] = useState(false);
	const [hasImageFailed, setHasImageFailed] = useState(false);

	const urls = getCloudinaryUrls(getHashFromIpfsUrl(src), options);
	const objectFit = FitMap[options?.fit];

	useEffect(() => {
		setHasImageFailed(false);
		setHasVideoFailed(false);
	}, [src]);

	// Not sure how to handle failed images yet, just show Image skeleton
	if (src === undefined || (hasImageFailed && hasVideoFailed)) {
		return <Image src={''} {...rest} />;
	}

	if (!hasImageFailed) {
		return (
			<Image
				{...rest}
				src={urls?.image}
				onError={() => {
					setHasImageFailed(true);
				}}
				objectFit={objectFit}
			/>
		);
	} else if (!hasVideoFailed) {
		return (
			<video
				{...rest}
				poster={getCloudinaryVideoPoster(urls?.video)}
				src={urls?.video}
				onError={() => setHasVideoFailed(true)}
				controls={true}
				autoPlay={true}
			/>
		);
	}
};