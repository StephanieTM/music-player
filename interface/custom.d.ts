/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module '*.module.less' {
  const content: any;
  export = content;
}

declare module '*.less' {
  const content: any;
  export = content;
}
