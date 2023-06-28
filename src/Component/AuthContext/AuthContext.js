import React, { createContext, useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";


const AuthContext = createContext()
function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false)

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
        setUser({})
        setIsAdmin(false)
        localStorage.clear()
    }
    //Load account google
    useEffect(() => {
        /* global google*/
        window.onload = function () {
            if (localStorage.getItem("user") !== null) { //If user are stored in localStorage
                const foundUser = JSON.parse(localStorage.getItem("user")); //parse user from local storage to JS object
                const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
                console.log(isAdmin)
                console.log(foundUser)
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
                );
                google.accounts.id.prompt(); // also display the One Tap dialog
            }
        }
    }, [])
    console.log(isAdmin)
    console.log(user)

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