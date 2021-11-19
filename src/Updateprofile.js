import React,{useRef,useState} from 'react'
import {Card} from 'react-bootstrap'
import { Button,Alert} from 'react-bootstrap'
import styled from 'styled-components'
import {useAuth} from './auth'
import { Link ,useHistory} from 'react-router-dom'
import {Maindiv,Input} from './signup'


function Updateprofile() {
    const [error,seterror] = useState('')
    const [loading,setloading] = useState(false)
    const userRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const {currentuser,updateemail,updatepassword} = useAuth()
    const history = useHistory()

    const handlesubmit = async (e) => {
       e.preventDefault()


       if(passwordRef.current.value !== confirmpasswordRef.current.value){
           return seterror("passwords do not match")
       }

       
       const promises = []
       setloading(true)
       seterror("")
       if(userRef.current.value !== currentuser.email){
           promises.push(updateemail(userRef.current.value))
       }
       if(passwordRef.current.value){
        promises.push(updatepassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
        history.push('/')
    }).catch(() => {
        seterror('failed to update')
    }).finally(() => {
        setloading(false)

    })
    }

    

    return(
        <Maindiv>
            <div className="imgdiv">
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix" />
            </div>
        <Card style={{width:'30rem',padding:'1.5rem',background:"#161616"}}>
        <Card.Body>

            <h1>Update</h1>
            {error && <Alert variant="danger">{error}</Alert>}

            <form onSubmit={handlesubmit}>
            <Input type="text" placeholder="username" ref={userRef} defaultValue={currentuser.email}></Input>
            <Input type="password" placeholder="leave blank to keep same" ref={passwordRef}></Input>
            <Input type="password" placeholder="leave blank to keep same" ref={confirmpasswordRef}></Input>

            <Button variant="danger" size="lg" className="m-auto p-3 w-50" disabled={loading} type="submit">Update</Button>
            </form>
             
            <Link to="/"><Button variant="outline-danger" size="lg" className="mt-3 p-2 w-50"> Cancel</Button></Link>

  
  </Card.Body>
        </Card>
        </Maindiv>
        
    )
}

export default Updateprofile
