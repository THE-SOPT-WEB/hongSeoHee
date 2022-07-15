import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      darkYellow: string;
      brown: string;
    };
  }
}
