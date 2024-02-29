// クライアントコードでsessionを閲覧(useSessionを利用)するために、SessionProviderでNextAuthをラップしておく
'use client';

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

export interface SessionProviderProps {
  children: React.ReactNode;
}

const SessionProvider = ({ children }: SessionProviderProps) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};

export default SessionProvider;