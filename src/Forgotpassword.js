import React,{useRef,useState} from 'react'
import {Card} from 'react-bootstrap'
import { Button,Alert} from 'react-bootstrap'
import styled from 'styled-components'
import {Maindiv,Input} from './signup'
import {useAuth} from './auth'
import { Link ,useHistory} from 'react-router-dom'

function Forgotpassword() {
    const userRef = useRef()
    const [error,seterror] = useState('')
    const [message,setmessage] = useState('')
    const [loading,setloading] = useState(false)
    const {resetPassword} = useAuth()

    const handlesubmit = async (e) => {
       e.preventDefault()

       try{
           setmessage("")
           seterror("")
           setloading(true)
           await resetPassword(userRef.current.value)
           setmessage('check your inbox for email')
           
        }catch{
            seterror("email failed to sent please try later")
        }
        setloading(false)

   
    }
        
           


    return (
        <div>
            <Maindiv>
            <div className="imgdiv">
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix" />
            </div>
        <Card style={{width:'30rem',padding:'1.5rem',background:"#161616"}}>
        <Card.Body>

            <h1>Reset Password</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <form onSubmit={handlesubmit}>
            <Input type="text" placeholder="username" ref={userRef}></Input>
            <Button variant="danger" size="lg" className="m-auto p-3 w-50"  disabled={loading} type="submit">Send Email</Button>
            </form>

            <div style={{display:"flex",alignItems:"center",padding:'.8rem',color:"#fff",margin:"1rem auto",justifyContent:"space-evenly"}}><h3>Login again</h3><h3><Link to="/login">Login</Link></h3></div>
  
  </Card.Body>
        </Card>
        </Maindiv>
        </div>
    )
        
}

export default Forgotpassword
