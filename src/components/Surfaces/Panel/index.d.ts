import * as React from 'react';

export interface PanelProps {
	/**
	 * Panel open
	 */
	isOpen?: boolean;
	/**
	 * Panel on dismissed
	 */
	onDismissed?: (...args: any[]) => any;
	/**
	 * Panel header text
	 */
	headerText?: string;
	/**
	 * Panel closebutton aria label
	 */
	closebuttonAriaLabel?: string;
	/**
	 * Panel footer content
	 */
	onRenderFooterContent?: (...args: any[]) => any;
	/**
	 * Panel hasCloseButton
	 */
	hasCloseButton?: boolean;
}

export const Panel: React.SFC<PanelProps>;