import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context'
import { IoSearch } from 'react-icons/io5'
import UserList from './UserList'

import { TiDeleteOutline, TiDelete } from 'react-icons/ti'

const Search = () => {
    const { setIsLoading, setSearchTerm, theme, users, setUsers, linkHeight } = useGlobalContext();
    const [isExpand, setIsExpand] = useState(false);
    const searched = useRef('');
    const [name, setName] = useState('');



    useEffect(() => {
        searched.current.focus();
    }, [])



    // useEffect(() => {
    //     if (users.length >= 1 && users.length <= 3) {
    //         let value = Math.round(((375 - ((3 - users.length) * 109)) / 16) + 3.6);
    //         linkRef.current.style.height = `${value}em`;
    //     } else if (users.length > 3) {
    //         handleExpand();
    //     } else if (users.length === 0) {
    //         linkRef.current.style.height = 3.8em
    //     }
    // }, [users])


    const showMe = (id) => {
        const user = users.find((user) => user.id === id);
        setName(user.login)
        setSearchTerm(user.login)
    }

    const handleExpand = () => {
        if (searched.current.value) {
            setIsExpand(true);
        } else {
            setIsExpand(false);
        }
        setSearchTerm(searched.current.value);
        setName(searched.current.value);
    }

    const closeExpand = () => {
        setIsExpand(false);
        setIsLoading(false);
        setSearchTerm('');
        setName('')
        setUsers([]);
        if (searched.current.value) {
            searched.current.value = '';
        }
    }

    return (
        <section className='f'>
            <div className={`${isExpand ? 'searchBarContainer searchBarContainerExpanded' : 'searchBarContainer'
                }`} >
                <div className='searchInputContainer'>
                    <span className='searchIcon'><IoSearch /></span>
                    <input
                        className='searchInput'
                        placeholder='enter github username'
                        value={name}
                        ref={searched}
                        onChange={handleExpand}
                    >
                    </input>
                    {isExpand && <span className='closeIcon' onClick={closeExpand}>
                        {theme === 'dark-theme' ? <TiDelete /> : <TiDeleteOutline />}
                    </span>}
                </div>
                {isExpand && <span className='lineSeperator'></span>}
                <div className='mainSearchContent'>
                    {isExpand && <UserList showme={showMe} />}
                </div>
            </div>
        </section>
    )
}

export default Search