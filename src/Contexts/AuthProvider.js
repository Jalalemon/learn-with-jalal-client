import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firbase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const providerLogin= (provider) => {
        return signInWithPopup(auth, provider)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            console.log('statechanged',currentuser);
            
        });
        return () => unsubscribe();
    }, [])
    const authInfo = { user, providerLogin };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {
                children
            }
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;