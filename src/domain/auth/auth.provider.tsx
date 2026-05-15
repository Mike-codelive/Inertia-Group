import { useMemo, useState } from 'react';

import { AuthContext } from './auth.context';

import type { AuthUser, AuthContextValue } from './auth.types';

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user] = useState<AuthUser | null>(null);

  const [loading] = useState(false);

  async function signOut() {}

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      signOut,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
