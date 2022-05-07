import { createUserWithEmailAndPassword } from 'firebase/auth';
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
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" placeholder='Your Name' />

                <input type="email" name="email" placeholder='Email Address' required />

                <input type="password" name="password" placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label className='ps-2 text-danger' htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <label className='ps-2 text-danger' htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
            {<SocialLogin></SocialLogin>}
        </div>
    );
};

export default Register;