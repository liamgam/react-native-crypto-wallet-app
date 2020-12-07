import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMove(props: SvgProps) {
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
        d="M22.724 12.688l-3.006 3.004c-.2.2-.401.3-.702.3-.3 0-.501-.1-.702-.3a.967.967 0 010-1.402l1.303-1.301h-6.615v6.607l1.303-1.301a.97.97 0 011.403 0c.401.4.401 1 0 1.401L12.702 22.7c-.1.1-.2.2-.301.2-.1.1-.3.1-.401.1-.1 0-.3 0-.4-.1-.101-.1-.201-.1-.302-.2l-3.006-3.004a.967.967 0 010-1.401.97.97 0 011.403 0l1.303 1.301V12.99H4.383l1.303 1.301c.4.4.4 1.001 0 1.402-.2.2-.401.3-.702.3-.3 0-.501-.1-.702-.3l-3.006-3.004c-.1-.1-.2-.2-.2-.3-.101-.2-.101-.5 0-.801.1-.1.1-.2.2-.3l3.006-3.004a.97.97 0 011.404 0c.4.4.4 1.001 0 1.402l-1.303 1.301h6.615V4.38L9.695 5.68a.97.97 0 01-1.403 0 .967.967 0 010-1.401l3.006-3.004c.1-.1.2-.2.301-.2.2-.1.501-.1.802 0 .1.1.2.1.3.2l3.007 3.004c.401.4.401 1 0 1.401-.2.2-.4.3-.701.3-.3 0-.501-.1-.702-.3L13.002 4.38v6.607h6.615l-1.303-1.301a.967.967 0 010-1.402.97.97 0 011.404 0l3.006 3.004c.1.1.2.2.2.3.101.2.101.5 0 .8 0 .101-.1.201-.2.301z"
      />
      <Mask id="move_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          d="M22.724 12.688l-3.006 3.004c-.2.2-.401.3-.702.3-.3 0-.501-.1-.702-.3a.967.967 0 010-1.402l1.303-1.301h-6.615v6.607l1.303-1.301a.97.97 0 011.403 0c.401.4.401 1 0 1.401L12.702 22.7c-.1.1-.2.2-.301.2-.1.1-.3.1-.401.1-.1 0-.3 0-.4-.1-.101-.1-.201-.1-.302-.2l-3.006-3.004a.967.967 0 010-1.401.97.97 0 011.403 0l1.303 1.301V12.99H4.383l1.303 1.301c.4.4.4 1.001 0 1.402-.2.2-.401.3-.702.3-.3 0-.501-.1-.702-.3l-3.006-3.004c-.1-.1-.2-.2-.2-.3-.101-.2-.101-.5 0-.801.1-.1.1-.2.2-.3l3.006-3.004a.97.97 0 011.404 0c.4.4.4 1.001 0 1.402l-1.303 1.301h6.615V4.38L9.695 5.68a.97.97 0 01-1.403 0 .967.967 0 010-1.401l3.006-3.004c.1-.1.2-.2.301-.2.2-.1.501-.1.802 0 .1.1.2.1.3.2l3.007 3.004c.401.4.401 1 0 1.401-.2.2-.4.3-.701.3-.3 0-.501-.1-.702-.3L13.002 4.38v6.607h6.615l-1.303-1.301a.967.967 0 010-1.402.97.97 0 011.404 0l3.006 3.004c.1.1.2.2.2.3.101.2.101.5 0 .8 0 .101-.1.201-.2.301z"
        />
      </Mask>
      <G mask="url(#move_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMove;