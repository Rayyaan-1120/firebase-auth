import React,{useRef,useState} from 'react'
import {Card} from 'react-bootstrap'
import { Button,Alert} from 'react-bootstrap'
import styled from 'styled-components'
import {useAuth} from './auth'
import { Link ,useHistory} from 'react-router-dom'


const Signup = () => {

    const [error,seterror] = useState('')
    const [loading,setloading] = useState(false)
    const userRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const {Signup} = useAuth()
    const history = useHistory()

    const handlesubmit = async (e) => {
       e.preventDefault()


       if(passwordRef.current.value !== confirmpasswordRef.current.value){
           return seterror("passwords do not match")
       }

       try{
           seterror("")
           setloading(true)
           await Signup(userRef.current.value,passwordRef.current.value)
           setloading(false)
           history.push('/')
           
        }catch{
            seterror("failed to create an account")
            setloading(false)
       }

   
    }

    

    return(
        <Maindiv>
            <div className="imgdiv">
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix" />
            </div>
        <Card style={{width:'30rem',padding:'1.5rem',background:"#161616"}}>
        <Card.Body>

            <h1>Sign Up</h1>
            {error && <Alert variant="danger">{error}</Alert>}

            <form onSubmit={handlesubmit}>
            <Input type="text" placeholder="username" ref={userRef}></Input>
            <Input type="password" placeholder="password" ref={passwordRef}></Input>
            <Input type="password" placeholder="confirm password" ref={confirmpasswordRef}></Input>

            <Button variant="danger" size="lg" className="m-auto p-3 w-50" disabled={loading} type="submit">Sign In</Button>
            </form>
             
            <h3>already have an account?</h3><Link to="/login">Log in</Link>

  
  </Card.Body>
        </Card>
        </Maindiv>
        
    )
}

export const Maindiv = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
min-height: 100vh;
background-color: #0c0c0c;

.imgdiv{
    padding: 1rem;
    text-align:center;
    margin:1rem auto;
    display: block;

    img{
        width:200px;
        height:50px;
        object-fit: cover;
    }
}

h1{
    color:#fff;
    padding:.8rem;
    margin:1rem auto;
    font-size:3rem;
}

`

export const Input = styled.input`
width: 80%;
padding: .8rem;
margin:1rem auto;
font-size: 1.5rem;
color:#161616;
background-color: #fff;
border:1px solid #161616;
outline:transparent;
border-radius:.5rem;

`

export default Signup
