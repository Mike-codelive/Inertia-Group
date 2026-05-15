export type AuthUser = {
  id: string;
  email: string;
  fullName?: string;
};

export type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  signOut: () => Promise<void>;
};
