type Env = {
  VITE_APP_NAME?: string;
  VITE_SUPABASE_URL?: string;
  VITE_SUPABASE_ANON_KEY?: string;
};

const viteEnv: Env = typeof process !== 'undefined' ? process.env : {};

export const env = {
  appName: viteEnv.VITE_APP_NAME ?? 'Inertia Group',
  supabaseUrl: viteEnv.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: viteEnv.VITE_SUPABASE_ANON_KEY ?? '',
};
