import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
// import React, {useEffect } from 'react';


const Login = () => {
    const [dataAPI, setDataAPI] = useState([]);
    const [inputEmail, setInputEmail] = useState("");
    const [inputPass, setInputPass] = useState("");    
    const navigate = useNavigate();

    const checkMember = (e) =>{
        e.preventDefault()
        let flag = false;
        if (inputEmail === "admin@bukapedia.com" || inputPass === "admin123") {
            // alert("Please fill all the field");
            console.log("ini admin");
            sessionStorage.setItem('Auth Token', 2)
        }
        else {
            dataAPI.forEach(item =>{
                if(item.email === inputEmail && item.password === inputPass){
                    flag = true;
                }
            })
            if(flag){
                console.log("ada")
                setInputEmail("")
                setInputPass("")        
                sessionStorage.setItem('Auth Token', 1)
            }else{
                console.log("tidak ada")
                // sessionStorage.setItem('Auth Token', 0)
            }
        }
        navigate(`/`)

    }
    
    const handleEmail = (e) =>{
        e.preventDefault()
        setInputEmail(e.target.value)
    }

    const handlePass = (e) =>{
        e.preventDefault()
        setInputPass(e.target.value)
    }

    useEffect( () => {
        try{
            fetch("https://fakestoreapi.com/users")
            .then(data => data.json())            
            .then(data => {
                const apiData = data;
                setDataAPI([...apiData])
            })
        }catch(e){
            console.log("error: ", e);
        }
        console.log("tes");
      },[]);

    return (
        <>
            <Navbar />
            <div style={{marginTop: "150px"}}>
            <div className='flex-row align-items-center'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <div className='card p-4'>
                                <div className='card-body'>
                                    <Form className='w-75 h-75 mx-auto'>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control onChange={handleEmail} type="email" value={inputEmail} placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onChange={handlePass} type="password" value={inputPass} placeholder="Password" />
                                        </Form.Group>
                                        
                                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group> */}
                                        
                                        <Button variant="primary" type="submit" onClick={checkMember} >
                                            Submit
                                        </Button>
                    
                                        
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Login 