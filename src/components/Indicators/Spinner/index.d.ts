import * as React from 'react';

export interface SpinnerProps {
	/**
	 * HTML id tag of the root element
	 */
	id?: string;
	/**
	 * Spinner size
	 */
	size?: number;
	/**
	 * Spinner size units
	 */
	sizeUnit?: string;
	/**
	 * Spinner state
	 */
	loading?: boolean;
	/**
	 * Spinner label
	 */
	label?: string;
}

declare const Spinner: React.SFC<SpinnerProps>;

export default Spinner;
