import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from 'react';
import { useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';



const SocialLogin = () => {
    const navigate = useNavigate();

    const signInWithGoogle = () => {

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                navigate('/')

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div>
            <div >
                <button
                    onClick={signInWithGoogle}
                    className='btn border rounded   d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} alt="" />
                    <span className='px-2 '>Google Sign In <img height={'30px'} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" /></span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;