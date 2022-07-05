/// <reference types="webpack/module" />

declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default SVG;
}

declare module '*.svg?url' {
  const svg = 'SvgURL';
  export default svg;
}

declare module '*.svg?inline' {
  const svg = 'SvgInline';
  export default svg;
}

declare type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
