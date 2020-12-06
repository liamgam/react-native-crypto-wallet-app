import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCloudLightning(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M19.018 17.873h.2c3.186-.703 5.278-3.918 4.68-7.032-.597-2.812-3.087-4.821-5.876-4.821h-.597C15.93 1.7 11.25-.911 6.769.294 4.478.897 2.486 2.304 1.29 4.413c-1.295 2.009-1.593 4.52-.996 6.83.697 2.41 2.191 4.42 4.382 5.625.498.302 1.096.1 1.394-.402.3-.502.1-1.105-.398-1.305-1.693-1.005-2.888-2.512-3.386-4.42-.498-1.909-.2-3.717.797-5.424.896-1.607 2.39-2.712 4.183-3.215 3.684-1.004 7.469 1.306 8.465 5.023.1.502.498.803.996.803h1.294c1.893 0 3.486 1.306 3.884 3.215.498 2.11-.896 4.319-3.087 4.72-.598.101-.896.704-.797 1.206.1.502.498.804.996.804zm-8.067-1.909h4.084c.398 0 .597.301.796.603.2.301.2.703 0 1.004l-3.983 6.027c-.2.201-.498.402-.797.402-.2 0-.398-.1-.598-.2-.498-.302-.597-.905-.298-1.407l2.987-4.42H9.06c-.398 0-.697-.2-.797-.502a.919.919 0 010-1.005l3.984-6.026c.299-.503.896-.603 1.394-.302.498.302.598.904.3 1.406l-2.989 4.42z"
        clipRule="evenodd"
      />
      <Mask
        id="cloud-lightning_svg__a"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M19.018 17.873h.2c3.186-.703 5.278-3.918 4.68-7.032-.597-2.812-3.087-4.821-5.876-4.821h-.597C15.93 1.7 11.25-.911 6.769.294 4.478.897 2.486 2.304 1.29 4.413c-1.295 2.009-1.593 4.52-.996 6.83.697 2.41 2.191 4.42 4.382 5.625.498.302 1.096.1 1.394-.402.3-.502.1-1.105-.398-1.305-1.693-1.005-2.888-2.512-3.386-4.42-.498-1.909-.2-3.717.797-5.424.896-1.607 2.39-2.712 4.183-3.215 3.684-1.004 7.469 1.306 8.465 5.023.1.502.498.803.996.803h1.294c1.893 0 3.486 1.306 3.884 3.215.498 2.11-.896 4.319-3.087 4.72-.598.101-.896.704-.797 1.206.1.502.498.804.996.804zm-8.067-1.909h4.084c.398 0 .597.301.796.603.2.301.2.703 0 1.004l-3.983 6.027c-.2.201-.498.402-.797.402-.2 0-.398-.1-.598-.2-.498-.302-.597-.905-.298-1.407l2.987-4.42H9.06c-.398 0-.697-.2-.797-.502a.919.919 0 010-1.005l3.984-6.026c.299-.503.896-.603 1.394-.302.498.302.598.904.3 1.406l-2.989 4.42z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#cloud-lightning_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCloudLightning;
