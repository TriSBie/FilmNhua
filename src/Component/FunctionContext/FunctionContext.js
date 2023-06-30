import React, { createContext, useEffect, useState } from 'react'
import { AuthProvider } from '../AuthContext/AuthContext';


const FunctionContext = createContext();

function FunctionProvider({ children }) {
    const baseURL = `https://6493c0730da866a95366a9e5.mockapi.io/Films/film_storage`
    const [reload, setReload] = useState(false)
    const [init, setInit] = useState({});

    const createFilm = (values, setOpen) => {
        async function createNewFilm(values) {
            try {

                let resp = await fetch(baseURL, {
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                })
                if (!resp.ok) {
                    const message = `An error has occured: ${resp.status} `
                    return new Error(message);
                }
                const message = await resp.json()
                if (message) {
                    setOpen(true)
                    setReload(!reload)
                }
            } catch (err) {
                //do sth here
            }
        }
        createNewFilm(values);
    }


    //function handle disable display
    async function handleDisableDisplay(id, setOpen) {
        try {
            let res = await fetch(`${baseURL}/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    "display": false
                })
            });

            if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }
            const message = await res.json();
            if (message) {
                setOpen(false);
                setReload(!reload)
            }
        } catch (err) {
            //do sth here
        }
    }

    //Function handle delete
    async function handleDelete(id) {
        try {
            let res = await fetch(`${baseURL}/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    "display": false
                })
            });

            if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }
            const message = await res.json();
            if (message) {
                setReload(!reload)
            }
        } catch (err) {
            //do sth here
        }
    }

    async function handleEdit(values) {
        console.log(values)
        try {
            let res = await fetch(`${baseURL}/${values.id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    "title": values.title,
                    "year": values.year,
                    "img": values.img,
                    "writers": values.writers,
                    "nation": values.nation,
                    "content": values.content,
                    "director": values.director,
                    "feature": {
                        "isHot": values.feature.isHot === null ? false : values.feature.isHot,
                        "isNewUpdate": values.feature.isNewUpdate === null ? false : values.feature.isNewUpdate,
                        "isSlider": values.feature.isSlider === null ? false : values.feature.isSlider
                    },
                    "embeddedURL": values.embeddedURL,
                    "imgVD": values.imgVD,
                    "imgBanner": values.imgBanner
                })
            });

            if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }
            const message = await res.json();
            if (message) {
                setReload(!reload)
            }
        } catch (err) {
            //do sth here
        }
    }



    //function handle re-open display film
    async function handleReOpenDisplay(id, setOpen) {
        try {
            let resp = await fetch(`${baseURL}/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    "display": true
                })
            });

            if (!resp.ok) {
                const message = `An error has occured : ${resp.status}`
                return new Error(message);
            }
            const message = await resp.json();
            if (message) {
                setReload(!reload)
                setOpen(false);
            }

        }
        catch (err) {
            //
        }
    }


    useEffect(() => {
        const functionInit = {
            baseURL: baseURL,
            reload: reload,
            createNewFilm: createFilm,
            handleDisableDisplay: handleDisableDisplay,
            handleReOpenDisplay: handleReOpenDisplay,
            handleDelete: handleDelete,
            handleEdit: handleEdit
        }
        setInit(functionInit)
    }, [reload])

    return (
        <FunctionContext.Provider value={
            {
                value: init
            }
        }>
            <AuthProvider>
                {children}
            </AuthProvider>
        </FunctionContext.Provider >
    )
}

export { FunctionProvider }
export default FunctionContext