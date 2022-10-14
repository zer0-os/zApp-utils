/*
 * f: secondsToDhms
 */

export const secondsToDhms = (seconds: number, showSeconds = false): string => {
	const d = Math.floor(seconds / (3600 * 24));
	const h = Math.floor((seconds % (3600 * 24)) / 3600);
	const m = Math.floor((seconds % 3600) / 60);
	const s = Math.floor(seconds % 60);

	const dDisplay = d > 0 ? d + 'd ' : '';
	const hDisplay = h >= 0 ? h + 'h ' : '';
	const mDisplay = m >= 0 ? m + 'm ' : '';
	const sDisplay = showSeconds ? (s > 0 ? s + 's' : '') : '';

	return dDisplay + hDisplay + mDisplay + sDisplay;
};
