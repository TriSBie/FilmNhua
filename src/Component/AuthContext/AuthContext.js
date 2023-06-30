import React, { createContext, useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false)
    // var admin = null;
    // const getAdminAuth = async () => {
    //     const res = await fetch(`https://6493c0730da866a95366a9e5.mockapi.io/Films/account`)
    //     if (!res.ok) {
    //         return new Error(`HTTP has an error occured at: ${res.status}`)
    //     }
    //     const result = await res.json();
    //     return result;
    // }






    const handleCredentialResponse = (response) => {
        var decoded = jwt_decode(response.credential);
        var flag = isAdmin
        if (decoded.email === "tribdse161752@fpt.edu.vn") {
            flag = true
            setIsAdmin(true);
        }
        setUser(decoded);
        localStorage.setItem("user", JSON.stringify(decoded))
        localStorage.setItem("isAdmin", JSON.stringify(flag))
        document.getElementById('buttonDiv').hidden = true;
    }

    const handleLogOut = (e) => {
        setUser({});
        document.getElementById('buttonDiv').hidden = false;
        setIsAdmin(false)
        localStorage.clear();
        window.location.reload()
    }

    const checkUserLoggedIn = () => {
        if (localStorage.getItem("user") !== null) {
            const foundUser = JSON.parse(localStorage.getItem("user")); //parse user from local storage to JS object
            var isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
            if (isAdmin === null) {
                isAdmin = false
            }
            setIsAdmin(isAdmin)
            setUser(foundUser); //set user from local
            document.getElementById('buttonDiv').hidden = true;
        } else {
            google.accounts.id.initialize({
                client_id: "208600068561-pcdra7hetiujpe4994guqhbsb41g204g.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }  // customization attributes
            )
            google.accounts.id.prompt(); // also display the One Tap dialog
        }
    }
    //Load account google
    useEffect(() => {
        /* global google*/
        window.onload = function () {
            new Promise(resolve => setTimeout(() => checkUserLoggedIn(), 1500)) //wait 1 second until all finish
        }
    }, [user])


    const initValue = {
        user: user,
        isAdmin: isAdmin,
        handleLogOut: handleLogOut
    }
    return (
        <AuthContext.Provider value={{
            value: initValue
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
export { AuthProvider }