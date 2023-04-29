import React, {createContext, useState} from 'react';

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({
  user: null,
  error: null,
  loading: false,
});

const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
