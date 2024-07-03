import { div } from 'three/examples/jsm/nodes/Nodes.js';
import './DeleteAccountPage.css';
import React, { useState } from 'react';
import logoPumped from './assets/pumpedTextPlainLogo.png';

function DeleteAccountForm() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        // event.preventDefault();
        // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // if (emailRegex.test(email)) {
        //     try {
        //         const data = fetch('https://us-central1-pumped-8bd42.cloudfunctions.net/api/delete-account', {
        //             method: 'post',
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify({
        //                 email: email,
        //                 password: password
        //             })
        //         });
        //         console.log(data);
        //     }
        //     catch (error) {
        //         console.log("failed to send email");
        //     }
        //     setEmail("");
        //     setPassword("");
        // }
    };

    return (
        <div className="Container background-gradient">
            <div className='topBar'>
                <img src={logoPumped} alt="logo" width={"auto"} height={"100%"} />
            </div>
            <div className='Content'>
                <div className='Header'>
                    <h1>Request Deletion Of Your Account</h1>
                </div>
                <form className='subscribe-container' onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="email" className='left-side' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" className='left-side' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <input type="submit" className="submit" value="Delete Account" />
                </form >
            </div>

        </div>

    );
}

export default DeleteAccountForm;