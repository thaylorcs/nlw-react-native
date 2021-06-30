declare module "*.svg" {
    import React from 'react';
    import { Rect } from 'react-native-svg';
    const content: React.Fc<SvgProps>;
    export default content;
}