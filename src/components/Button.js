import React from 'react'
import { useGlobalContext } from '../context'




const Button = () => {
    const { theme, setTheme } = useGlobalContext();

    const toggle = () => {
        if (theme === 'white-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('white-theme')
        }
    }



    return (
        <a onClick={toggle}>Switch</a>
    )
}

export default Button