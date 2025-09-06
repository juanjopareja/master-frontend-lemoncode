const config = {
  VITE_DEV_MESSAGE: import.meta.env.VITE_DEV_MESSAGE,
  VITE_PREV_MESSAGE: import.meta.env.VITE_PREV_MESSAGE,
} as const;

export default config;