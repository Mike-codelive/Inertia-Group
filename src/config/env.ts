const viteEnv = import.meta.env;

export const env = {
  appName: viteEnv.VITE_APP_NAME,

  apiDelay: Number(import.meta.env.VITE_API_DELAY ?? 500),
};
