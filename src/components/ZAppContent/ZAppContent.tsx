import { HTMLProps } from 'react';

import classNames from 'classnames';
import styles from './ZAppContent.module.scss';

export interface ZAppContentProps extends HTMLProps<HTMLDivElement> {
	scrollId?: string;
}

export const ZAppContent = ({
	className,
	children,
	scrollId,
	...rest
}: ZAppContentProps) => {
	return (
		<div {...rest} className={classNames(styles.Container, className)}>
			<div id={scrollId} className={styles.Scroll}>
				{children}
			</div>
		</div>
	);
};
