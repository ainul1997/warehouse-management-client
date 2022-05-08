
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

import SocialLogin from '../../Shard/Social/SocialLogin';


const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    }

    return (
        <div style={{ height: '800px', display: 'flex', justifyContent: 'center', backgroundColor: 'wheat' }} className=''>
            <div style={{ height: '500px', backgroundColor: 'white', width: '400px', marginTop: '30px' }}  >
                <h2 className='text-primary text-center mt-2 mb-5 '> CUSTOMER LOGIN</h2>
                <Form className='w-75 mx-auto' onSubmit={handleLogin}>
                    <Form.Group className="mb-3" >
                        <Form.Control type="email" name='email' placeholder="Email ID" required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary w-25 mx-auto d-block mt-5 mb-2" type="submit">
                        Login
                    </Button>
                </Form>

                <div className=' d-flex align-items-center justify-content-center mt-5 mx-auto ms-3 gap-5'>
                    <p> <Link to="/register" className='text-primary p-2 text-decoration-none border rounded-pill' > Please Register</Link> </p>
                    <p> <button className='btn btn-link text-primary p-2 text-decoration-none border rounded-pill'  >Reset Password</button> </p>
                </div>
                {<SocialLogin></SocialLogin>}
            </div>


        </div>
    );
};

export default Login;