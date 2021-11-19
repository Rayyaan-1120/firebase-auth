import React, { useState } from 'react'
import {useAuth} from './auth'
import {Button} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'

function Dashoboard() {

    const history = useHistory()
    const {currentuser,logout} = useAuth()

    const [error,seterror] = useState("")

    const handlelogout = async () => {
        seterror('')
        try{
          await logout()
          history.push('/login')
        }catch{
            seterror("failed to logout")
        }
    }

    return (
        <div style={{width:"100%",minHeight:"100vh",display:'flex',alignItems:'center',justifyContent:'center', background:"#0c0c0c"}}>
            <div style={{width:"40rem",padding:"1rem",background:"#161616",minHeight:"30vh",color:"#fff"}}>
                <h1 style={{margin:"auto",fontSize:"2rem",padding:".5rem",textAlign:"center"}}>My Dashboard</h1>
                <h2 style={{margin:"auto",fontSize:"2rem",padding:".5rem",textAlign:"center"}}>Email : {currentuser.email}</h2>
               <Link to="/update-profile" style={{textDecoration:"none",fontSize:"2rem"}}> <Button variant="secondary" className="w-100 mt-3 d-block">UpdateProfile</Button> </Link>
               <Button variant="outline-primary" onClick={handlelogout}>Logout!</Button>
            </div>
        </div>
    )
}

export default Dashoboard
