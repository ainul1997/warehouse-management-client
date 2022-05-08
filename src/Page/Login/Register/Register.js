import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shard/Social/SocialLogin';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();



    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/')

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });

    }

    return (
        <div style={{ height: '800px', display: 'flex', justifyContent: 'center', backgroundColor: 'wheat' }} className=''>
            <div style={{ height: '500px', backgroundColor: 'white', width: '400px', marginTop: '30px' }}>
                <h2 className='text-primary text-center mt-2 mb-5 '>Please Register</h2>

                <Form className='w-75 mx-auto' onSubmit={handleRegister}>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="email" name='email' placeholder="Email ID" required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary w-50 mx-auto d-block mt-5 mb-2" type="submit">
                        REGISTER
                    </Button>
                </Form>
                <div className='d-flex justify-content-center'>
                    <p >Already have an account? <Link to="/login" className=' mt-5 mx-auto ms-3 gap-5' >Please Login</Link> </p>
                </div>
                {<SocialLogin></SocialLogin>}
            </div>
        </div>
    );
};

export default Register;