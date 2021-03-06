import * as React from 'react';
import { BoxProps } from '../Box/types';
import { Omit } from '../common-types';

export interface ICheckbox {
    /**
     * id assigned to input
     */
    id?: string;
    /**
     * The name of the input field in a checkbox
     * (Useful for form submission).
     */
    name?: string;
    /**
     * The value to be used in the checkbox input.
     * This is the value that will be returned on form submission.
     */
    value?: string | number;
    /**
     * The color scheme of the checkbox.
     *
     * 🚨Note: This should be one of the color keys in the theme that has `100` - `900` color values (e.g.`green`, `red`).
     * @see http://chakra-ui.com/theme#colors
     */
    variantColor?: string;
    /**
     * If `true`, the checkbox will be initially checked.
     */
    defaultIsChecked?: boolean;
    /**
     * If `true`, the checkbox will be checked.
     * You'll need to pass `onChange` to update it's value (since it's now controlled)
     */
    isChecked?: boolean;
    /**
     * If `true`, the checkbox should take up the full width of the parent.
     */
    isFullWidth?: boolean;
    /**
     * The size (width and height) of the checkbox
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * If `true`, the checkbox will be disabled
     */
    isDisabled?: boolean;
    /**
     * If `true`, the checkbox will be readonly
     */
    isReadOnly?: boolean;
    /**
     * If `true`, the checkbox is marked as invalid.
     * Changes style of unchecked state.
     */
    isInvalid?: boolean;
    /**
     * If `true`, the checkbox will be left-indented.
     */
    isChild?: boolean;
    /**
     * The callback invoked when the checked state of the `Checkbox` changes..
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * If `true`, the checkbox will be indeterminate.
     * This only affects the icon shown inside checkbox
     * and does not modify the isChecked property.
     */
    isIndeterminate?: boolean;
    /**
     * The children is the label to be displayed to the right of the checkbox.
     */
    children?: React.ReactNode;

    iconColor?: string;
    iconSize?: string;

    /**
     * allows using a custom component rather than the default checkbox
     */
    renderCustomControl?: (args: any) => React.ReactNode;

    /**
     * option to not include single checkbox from including value in form
     * used in cases with CheckboxGroup, where child checkbox values are added to the parent CheckboxGroup array value
     */
    skipFormChange?: boolean;
}

export type CheckboxProps = ICheckbox &
    React.RefAttributes<HTMLInputElement> &
    Omit<BoxProps, 'onChange' | 'defaultChecked'>;
