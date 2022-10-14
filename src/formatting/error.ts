import { getParsedEthersError } from '@enzoferey/ethers-error-parser';
import {
	CUSTOM_ERROR_MESSAGES,
	DEFAULT_ERROR_MESSAGE,
	ETHERS_ERROR_MESSAGES,
} from '../constants/transaction-errors';

/*
 * f: getReadableEthersError
 */

export const getReadableEthersError = (error: any): string => {
	const errorCode = getParsedEthersError(error).errorCode;
	return (
		ETHERS_ERROR_MESSAGES[errorCode] ||
		CUSTOM_ERROR_MESSAGES[errorCode] ||
		DEFAULT_ERROR_MESSAGE
	);
};
