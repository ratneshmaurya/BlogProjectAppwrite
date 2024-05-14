import React from 'react'
import {useDispatch} from 'react-redux' // to store the updated info into our store
import authService from '../../appwrite/auth' //to call the logout functionality in appwrite
import {logout} from '../../store/authSlice' // to be used in dispatch function to call logout of store and update the info in store

function LogoutBtn() {
    const dispatch = useDispatch()

    //onclicking logout button, we call the appwrite logout() which return promise, 
    //so we did then() and in that call the store function to update the value in store
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn