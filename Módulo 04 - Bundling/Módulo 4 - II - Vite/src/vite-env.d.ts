/// <reference types="vite/client" />

// We'll add here our environment variables. Remember all have string values.
interface ImportMetaEnv {
  readonly VITE_DEV_MESSAGE: string;
  readonly VITE_PREV_MESSAGE: string;
}