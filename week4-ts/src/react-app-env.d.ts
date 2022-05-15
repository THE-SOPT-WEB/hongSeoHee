declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test' | 'local';
    PUBLIC_URL: string;
    REACT_APP_KAKAO_AK: string;
  }
}
