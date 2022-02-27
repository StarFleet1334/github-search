import React from 'react'
import { useGlobalContext } from '../context'
import { RingLoader } from 'react-spinners/'

import { BsArrowUpLeftCircleFill, BsArrowUpLeftCircle } from 'react-icons/bs'

const UserList = ({ showme }) => {
    const { isLoading, isEmpty, users, theme } = useGlobalContext();

    return (
        <>
            {isLoading && <div className='loadingWrapper'>
                <RingLoader loading color='#589' size={80} />
            </div>}

            <div className='no-result'>
                {!isLoading && isEmpty &&
                    <p className='no-search'> user with this name doesn't exists.
                    </p>}
                {!isLoading &&
                    !isEmpty &&
                    <section className='contain'>
                        {users.map((user) => {
                            return (
                                <div key={user.id}>
                                    <article className='person'>
                                        <a href={user.html_url} target="_blank" rel='noreferrer'>
                                            <img src={user.avatar_url} alt='icon'>
                                            </img>

                                        </a>
                                        <div className='information'>
                                            <h4>{user.login}</h4>
                                            <p>{`Type: ${user.type}`}</p>
                                        </div>

                                        <div>
                                            <span className='access' onClick={() => showme(user.id)}>
                                                {theme === 'dark-theme' ?
                                                    <BsArrowUpLeftCircle /> :
                                                    <BsArrowUpLeftCircleFill />}
                                            </span>
                                        </div>
                                    </article>
                                    <span className='lineSeperator'></span>
                                </div>
                            )
                        })}
                    </section>
                }
            </div></>
    )
}

export default UserList