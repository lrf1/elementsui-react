import * as React from 'react';

export interface DialogDialogContentProps {
	type?: number;
	title?: string;
	subText?: string;
}

export interface DialogModalProps {
	isBlocking?: boolean;
	isDarkOverlay?: boolean;
	containerClassName?: string;
}

export interface DialogProps {
	/**
	 * HTML id tag of the root element
	 */
	id?: string;
	/**
	 * Dialog visibility state
	 */
	hidden?: boolean;
	/**
	 * Dialog dissmiss callback
	 */
	onDismiss?: (...args: any[]) => any;
	/**
	 * Dialog content props
	 */
	dialogContentProps?: DialogDialogContentProps;
	/**
	 * Dialog modal props (context)
	 */
	modalProps?: DialogModalProps;
	/**
	 * User-defined styling
	 */
	styles?: (...args: any[]) => any;
}

declare const Dialog: React.SFC<DialogProps>;

export default Dialog;