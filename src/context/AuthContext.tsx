import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth, db, handleFirestoreError, OperationType } from '../lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

interface UserProfile {
  role: 'client' | 'tailor';
  displayName: string;
  bio?: string;
  avatarUrl?: string;
  portfolioUrls?: string[];
  services?: string[];
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signIn: () => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signIn: async () => {},
  logOut: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          const profileDocPath = `users/${firebaseUser.uid}/profiles/main`;
          const profileRef = doc(db, profileDocPath);
          const docSnap = await getDoc(profileRef).catch(e => handleFirestoreError(e, OperationType.GET, profileDocPath));
          
          if (docSnap && docSnap.exists()) {
            setProfile(docSnap.data() as UserProfile);
          } else {
            // Auto-create client profile for new users
            const newProfile: any = {
              role: 'client',
              displayName: firebaseUser.displayName || 'New User',
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            };
            if (firebaseUser.photoURL) newProfile.avatarUrl = firebaseUser.photoURL;
            
            await setDoc(profileRef, newProfile).catch((e: unknown) => handleFirestoreError(e, OperationType.CREATE, profileDocPath));
            setProfile(newProfile as UserProfile);
            
            // Auto-create private info
            const privateInfoPath = `users/${firebaseUser.uid}/private/info`;
            await setDoc(doc(db, privateInfoPath), {
              email: firebaseUser.email || '',
            }).catch((e: unknown) => handleFirestoreError(e, OperationType.CREATE, privateInfoPath));
          }
        } catch (error) {
          console.error("Auth profile sync error", error);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
