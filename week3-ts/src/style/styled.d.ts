import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      header: ThemedCssFunction;
      round: ThemedCssFunction;
    };
    colors: {
      title: string;
      yellow: string;
      darkYellow: string;
      brown: string;
    };
  }
}
