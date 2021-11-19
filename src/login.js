import React,{useRef,useState} from 'react'
import {Card} from 'react-bootstrap'
import { Button,Alert} from 'react-bootstrap'
import styled from 'styled-components'
import {Maindiv,Input} from './signup'
import {useAuth} from './auth'
import { Link ,useHistory} from 'react-router-dom'


function Login() {

    const userRef = useRef()
    const passwordRef = useRef()
    const [error,seterror] = useState('')
    const [loading,setloading] = useState(false)
    const {Login,currentuser} = useAuth()
    const history = useHistory()

    const handlesubmit = async (e) => {
       e.preventDefault()

       try{
           seterror("")
           setloading(true)
           await Login(userRef.current.value,passwordRef.current.value)
           setloading(false)
           history.push('/')
           
        }catch{
            seterror("signup failed please reload the page")
            setloading(false)
       }

   
    }


    return (
        <div>
            <Maindiv>
            <div className="imgdiv">
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix" />
            </div>
        <Card style={{width:'30rem',padding:'1.5rem',background:"#161616"}}>
        <Card.Body>

            <h1>Log in</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handlesubmit}>
            <Input type="text" placeholder="username" ref={userRef}></Input>
            <Input type="password" placeholder="password" ref={passwordRef}></Input>
            <Button variant="danger" size="lg" className="m-auto p-3 w-50"  disabled={loading} type="submit">Sign In</Button>
            <Link to="/forgot-password"><Button variant="outline-danger" size="lg" className="mt-3 p-2 w-100 d-block"  disabled={loading} type="submit">Forgot Password ?</Button></Link>
            </form>

            <h3>create an account</h3><Link to="/signup">Sign Up</Link>
  
  </Card.Body>
        </Card>
        </Maindiv>
        </div>
    )
}

export default Login
