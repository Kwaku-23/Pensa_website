import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);
const AUTH_KEY = 'pensaumat_user';
const USERS_KEY = 'pensaumat_users';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem(AUTH_KEY);
    return data ? JSON.parse(data) : null;
  });

  const signIn = useCallback((email, password) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      const userData = { name: found.name, email: found.email };
      localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
      setUser(userData);
      return { success: true, user: userData };
    }
    return { success: false, error: 'Invalid email or password. Please try again.' };
  }, []);

  const register = useCallback((name, email, password) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'An account with this email already exists.' };
    }
    users.push({ name, email, password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    const userData = { name, email };
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
    setUser(userData);
    return { success: true, user: userData };
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
  }, []);

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, signIn, register, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
