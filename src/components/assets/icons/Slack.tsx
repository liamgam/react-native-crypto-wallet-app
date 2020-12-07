import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgSlack(props: SvgProps) {
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
        d="M17.915.888c2.303 1.2 3.805 3.602 5.106 7.804 2.503 8.004.3 11.906-7.71 14.407-2.102.6-3.804.901-5.406.901-4.506 0-7.109-2.701-8.911-8.704C-1.51 7.292.594 3.39 8.704.988c4.205-1.3 7.108-1.3 9.21-.1zM2.896 14.695C5 21.7 7.702 23.2 14.711 21.1c7.009-2.102 8.51-4.903 6.508-11.906-1.101-3.602-2.403-5.703-4.105-6.604-.801-.4-1.802-.6-2.904-.6-1.301 0-2.903.3-4.906.9C2.295 4.99.794 7.792 2.896 14.695zm14.819-3.101l-1.903.7-1.001-2.801 1.902-.7c.501-.2.801-.701.601-1.301-.2-.5-.7-.8-1.302-.6l-1.902.7-.7-1.901c-.201-.5-.702-.8-1.302-.6-.501.2-.801.7-.601 1.3l.7 1.901-2.803 1-.6-2c-.2-.5-.801-.8-1.302-.6-.5.1-.801.7-.6 1.2l.7 1.9-1.902.701c-.501.2-.801.7-.601 1.3.1.401.5.701.901.701.1 0 .2 0 .3-.1l1.903-.7 1.001 2.801-1.902.7c-.501.2-.801.7-.601 1.301.1.4.5.7.901.7.1 0 .2 0 .3-.1l1.903-.7.7 1.901c.1.4.501.7.902.7.1 0 .2 0 .3-.1.5-.2.801-.7.6-1.3l-.7-1.901 2.804-1 .7 1.9c.1.4.501.7.901.7.1 0 .2 0 .3-.1.502-.2.802-.7.602-1.3l-.701-1.901 1.902-.7c.5-.2.801-.7.6-1.301-.2-.6-.5-.6-1-.4zm-7.61-.5l1.001 2.8 2.804-1-1.001-2.801-2.804 1z"
        clipRule="evenodd"
      />
      <Mask id="slack_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M17.915.888c2.303 1.2 3.805 3.602 5.106 7.804 2.503 8.004.3 11.906-7.71 14.407-2.102.6-3.804.901-5.406.901-4.506 0-7.109-2.701-8.911-8.704C-1.51 7.292.594 3.39 8.704.988c4.205-1.3 7.108-1.3 9.21-.1zM2.896 14.695C5 21.7 7.702 23.2 14.711 21.1c7.009-2.102 8.51-4.903 6.508-11.906-1.101-3.602-2.403-5.703-4.105-6.604-.801-.4-1.802-.6-2.904-.6-1.301 0-2.903.3-4.906.9C2.295 4.99.794 7.792 2.896 14.695zm14.819-3.101l-1.903.7-1.001-2.801 1.902-.7c.501-.2.801-.701.601-1.301-.2-.5-.7-.8-1.302-.6l-1.902.7-.7-1.901c-.201-.5-.702-.8-1.302-.6-.501.2-.801.7-.601 1.3l.7 1.901-2.803 1-.6-2c-.2-.5-.801-.8-1.302-.6-.5.1-.801.7-.6 1.2l.7 1.9-1.902.701c-.501.2-.801.7-.601 1.3.1.401.5.701.901.701.1 0 .2 0 .3-.1l1.903-.7 1.001 2.801-1.902.7c-.501.2-.801.7-.601 1.301.1.4.5.7.901.7.1 0 .2 0 .3-.1l1.903-.7.7 1.901c.1.4.501.7.902.7.1 0 .2 0 .3-.1.5-.2.801-.7.6-1.3l-.7-1.901 2.804-1 .7 1.9c.1.4.501.7.901.7.1 0 .2 0 .3-.1.502-.2.802-.7.602-1.3l-.701-1.901 1.902-.7c.5-.2.801-.7.6-1.301-.2-.6-.5-.6-1-.4zm-7.61-.5l1.001 2.8 2.804-1-1.001-2.801-2.804 1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#slack_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgSlack;