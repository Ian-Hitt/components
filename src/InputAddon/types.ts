import * as React from 'react';
import { BoxProps } from '../Box/types';
import { IInput } from '../Input/types';

interface IInputAddon {
    /**
     * The content of the `InputAddon`
     */
    children: React.ReactNode;
    /**
     * The size of the addon is inherited from the `InputGroup` via `cloneElement`.
     */
    size?: IInput['size'];
    /**
     * The position the addon should appear relative to the `Input`.
     * We added `InputLeftAddon` and `InputRightAddon` so you might not need to pass this
     */
    placement?: 'left' | 'right';
}

export type InputAddonProps = IInputAddon & BoxProps;
