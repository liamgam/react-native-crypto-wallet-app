import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgThumbsDown(props: SvgProps) {
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
        d="M23 3.913C22.797 2.205 21.38 1 19.658 1H5.48C3.96 1 2.745 2.105 2.442 3.511l-1.418 9.042c-.203 1.607.911 3.214 2.532 3.415h5.266v3.014c0 2.21 1.823 4.018 4.05 4.018.406 0 .81-.2.912-.603l3.747-8.438h2.026c1.721 0 3.14-1.206 3.342-2.913V4.014c.101 0 .101-.1.101-.1zm-7.09 8.94l-3.645 8.138c-.81-.302-1.418-1.005-1.418-1.909v-4.018c0-.603-.405-1.005-1.012-1.005H3.859c-.506-.1-.911-.602-.81-1.105l1.418-9.04c.101-.503.506-.905 1.013-.905h10.43v9.845zm3.748-.803c.608 0 1.215-.502 1.316-1.105v-6.83c-.1-.604-.708-1.106-1.316-1.106h-1.722v9.041h1.722z"
        clipRule="evenodd"
      />
      <Mask id="thumbs-down_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M23 3.913C22.797 2.205 21.38 1 19.658 1H5.48C3.96 1 2.745 2.105 2.442 3.511l-1.418 9.042c-.203 1.607.911 3.214 2.532 3.415h5.266v3.014c0 2.21 1.823 4.018 4.05 4.018.406 0 .81-.2.912-.603l3.747-8.438h2.026c1.721 0 3.14-1.206 3.342-2.913V4.014c.101 0 .101-.1.101-.1zm-7.09 8.94l-3.645 8.138c-.81-.302-1.418-1.005-1.418-1.909v-4.018c0-.603-.405-1.005-1.012-1.005H3.859c-.506-.1-.911-.602-.81-1.105l1.418-9.04c.101-.503.506-.905 1.013-.905h10.43v9.845zm3.748-.803c.608 0 1.215-.502 1.316-1.105v-6.83c-.1-.604-.708-1.106-1.316-1.106h-1.722v9.041h1.722z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#thumbs-down_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgThumbsDown;
