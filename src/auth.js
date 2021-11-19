import React,{createContext,useContext,useState,useEffect} from 'react'
import { auth } from './firebase'
import { createUserWithEmailAndPassword , onAuthStateChanged ,sendPasswordResetEmail,signInWithEmailAndPassword, signOut, updateEmail, updatePassword} from '@firebase/auth'

const Authcontext = createContext()

export function useAuth() {
    return useContext(Authcontext)
}



export function AuthProvider({children}) {

    const [currentuser,setcurrentuser] = useState()
    const [loading,setloading] = useState(true)


    function Signup(email,password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function Login(email,password) {
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth,email)
    }

    function updateemail(email) {
        return updateEmail(currentuser,email)
    }
    function updatepassword(password) {
        return updatePassword(currentuser,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
           setcurrentuser(user)
           setloading(false)
        })
        return unsubscribe
    },[])


    
    const value = {
        currentuser,
        Signup,
        Login,
        logout,
        resetPassword,
        updateemail,
        updatepassword
    }

    return (
        <Authcontext.Provider value={value}>
            {!loading && children}
        </Authcontext.Provider>
    )
}



