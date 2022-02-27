import React, { useState, useContext, useEffect } from 'react'
import axios from "axios";

const AppContext = React.createContext()

const url = 'https://api.github.com'
const token = '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'

const getStorageTheme = () => {
    let theme = 'white-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

const mainPoint = axios.create({
    baseURL: url,
    headers: { Authorization: `token ${token}` }
})


const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    const [searchTerm, setSearchTerm] = useState('');

    const [theme, setTheme] = useState(getStorageTheme());

    const [users, setUsers] = useState([])

    const isEmpty = !users || users.length === 0;



    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            try {
                if (searchTerm) {
                    const userList = await searchUser(searchTerm);
                    setUsers(userList)
                }
                setIsLoading(false);
            } catch (error) {
                console.log("Error: ", error)
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, [searchTerm]);


    const searchUser = async (text) => {

        const params = new URLSearchParams({
            q: text
        })
        const response = await mainPoint.get(`search/users?${params}`)
        return response.data.items
    }


    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <AppContext.Provider
            value={{
                isLoading, setSearchTerm, setUsers, isEmpty,
                theme, setTheme, setIsLoading, users
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }