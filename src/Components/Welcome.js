import React, { useContext } from 'react'
import { Avatar } from 'antd'


const Welcome  = () => {
    const { user} = useContext(UserContext)
    return (
        <h1>
            Welcome { user ? user.displayame: 'Guest'}!&nbsp;
            {user && <Avatar  size={32} src={user.photoURL}/>}
        </h1>
    )
}
export default Welcome;