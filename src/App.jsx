
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from "./component"
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  //as soon as page loads, we check whther user is logged in or not, if yes, 
  //then pass the data in login() reducer function to update the datils of current user.
  //finally block is for making loading banner to stop once we did fetching current user
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {

        //paasing directly the object (mainly one of the value of object i.e userData, not passing status) 
        //as login krte hi status true hojaega (see in the login action in reducer)
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  //if there is loading then show nothing(or show anything yourself) else show the pages
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO{/*   <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null//can change here based on yourself (this is option to show when there is loading going on)
}

export default App