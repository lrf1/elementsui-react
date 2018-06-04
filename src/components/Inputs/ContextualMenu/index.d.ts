import * as React from 'react';

export interface ContextualMenuMenuProps {
	items?: any[];
}

export interface ContextualMenuProps {
	/**
	 * ContextualMenu primary
	 */
	isPrimary?: boolean;
	/**
	 * ContextualMenu button text
	 */
	buttonText?: string;
	/**
	 * ContextualMenu button ariaLabel
	 */
	ariaLabel?: string;
	/**
	 * ContextualMenu menuitems
	 */
	menuProps: ContextualMenuMenuProps;
	/**
	 * User-defined styling
	 */
	getStyles?: (...args: any[]) => any;
}

declare const ContextualMenu: React.SFC<ContextualMenuProps>;

export default ContextualMenu;