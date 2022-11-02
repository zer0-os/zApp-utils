import React, { HTMLProps } from 'react';

import classNames from 'classnames';
import styles from './ZAppContent.module.scss';

export type ZAppContentProps = HTMLProps<HTMLDivElement>;

export const ZAppContent = ({
	className,
	children,
	...rest
}: ZAppContentProps) => {
	return (
		<div {...rest} className={classNames(styles.Container, className)}>
			<div className={styles.Scroll}>{children}</div>
		</div>
	);
};
