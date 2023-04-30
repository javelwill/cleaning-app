import React, {createContext, useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {log} from 'react-native-reanimated';

type AuthContextValue = {
  user: FirebaseAuthTypes.User | null;
  error: string | null;
  loading: boolean;
  login: ({email, password}: {email: string; password: string}) => void;
  logout: () => void;
  clearError: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextValue>({
  login: () => {},
  logout: () => {},
  loading: false,
  user: null,
  error: null,
  clearError: () => {},
});

const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setLoading(false);
    setUser(user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(clearError, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setError(null);
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      console.log(error.code);
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setError('Incorrect email or password, please try again.');
          break;
        case 'auth/too-many-requests':
          setError('Too many requests, please try again later.');
          break;
        default:
          setError('Something went wrong, please try again.');
      }
      setLoading(false);
    }
  };

  const logout = () => {
    auth().signOut();
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        loading,
        error,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
