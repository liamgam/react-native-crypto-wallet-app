import React from 'react';
import { spacing, SpacingProps, useRestyle } from '@shopify/restyle';

import { Theme } from 'theme';

import Box from './Box';

type IIndicatorDotProps = {
  isActive: boolean;
  isSlide: boolean;
} & SpacingProps<Theme>;

const IndicatorDot: React.FC<IIndicatorDotProps> = ({ isActive, isSlide, ...rest }) => {
  const props = useRestyle([spacing], rest);
  return (
    <Box
      width={isSlide ? 10 : 22}
      height={isSlide ? 10 : 22}
      backgroundColor={
        isActive ? (isSlide ? 'primaryBlue' : 'green') : isSlide ? 'lightBlue' : 'gray'
      }
      borderRadius="full"
      marginRight={isSlide ? 's' : 'm'}
      {...props}
    />
  );
};

export default IndicatorDot;
