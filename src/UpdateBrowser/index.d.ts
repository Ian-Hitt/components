import * as React from 'react';
import { BoxProps } from '../Box';

type UpdateBrowserProps = BoxProps & {
    onClick?: any;

    // "Remind me later" button href
    href?: string;
};

const UpdateBrowser: React.FC<UpdateBrowserProps>;
export default UpdateBrowser;
