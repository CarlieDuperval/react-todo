import React, { useContext } from 'react'
import {Link } from 'react-router-dom'
import { UserContext } from '../App'

const TopMenu = () => {
    const { user , setUser } = useContext(UserContext)

    return (
        <div>
            <Link to='/' >Home</Link>
            &nbsp;|&nbsp;
            {user
            ?<Link to='/' onClick={() => setUser(null)} >Logout</Link>
            :<>
            <Link to='/login'>Login</Link>
            &nbsp;|&nbsp;
            <Link to='/signup'>Sign Up</Link>
            </>
            }
        </div>
    )
}
export default TopMenu;