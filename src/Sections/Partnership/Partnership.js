import './Partnership.css';
import logo from "../../assets/PUMPED_logoBLACK.png";
import { useState } from 'react';

function Partnership() {
    const [gymData, setGymData] = useState({
        name: '',
        link: '',
        email: '',
        country: '',
        phone: ''
    });

    const [otherData, setOtherData] = useState({
        name: '',
        link: '',
        email: '',
        country: '',
        phone: ''
    });

    const handleGymInputChange = (e) => {
        const { name, value } = e.target;
        setGymData({
            ...gymData,
            [name]: value
        });
    };

    const handleOtherInputChange = (e) => {
        const { name, value } = e.target;
        setOtherData({
            ...otherData,
            [name]: value
        });
    };

    const handleGymSubmit = (e) => {
        e.preventDefault();

        // Regex patterns for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const linkRegex = /^(https?:\/\/)?([\w\d\-]+\.)+[\w\d\-]+(\/[\w\d\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
        const phoneRegex = /^\+?\d{1,4}?[\d\s-]{7,15}$/;

        // Validate inputs using regex
        if (!gymData.name || !emailRegex.test(gymData.email) || !linkRegex.test(gymData.link) || !gymData.country || !phoneRegex.test(gymData.phone)) {
            alert("Please enter valid details in all fields.");
            return;
        }

        fetch('https://europe-central2-pumped-8bd42.cloudfunctions.net/api/partnershipGym', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gymName: gymData.name,
                country: gymData.country,
                link: gymData.link,
                phone: gymData.phone,
                email: gymData.email
            })
        })
        .then(() => {
            alert("Gym submitted successfully!");
            // Clear input fields after submission
            setGymData({
                name: '',
                link: '',
                email: '',
                country: '',
                phone: ''
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Submission failed.");
        });
    };

    const handleOtherSubmit = (e) => {
        e.preventDefault();

        // Regex patterns for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const linkRegex = /^(https?:\/\/)?([\w\d\-]+\.)+[\w\d\-]+(\/[\w\d\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
        const phoneRegex = /^\+?\d{1,4}?[\d\s-]{7,15}$/;

        // Validate inputs using regex
        if (!otherData.name || !emailRegex.test(otherData.email) || !linkRegex.test(otherData.link) || !otherData.country || !phoneRegex.test(otherData.phone)) {
            alert("Please enter valid details in all fields.");
            return;
        }

        fetch('https://europe-central2-pumped-8bd42.cloudfunctions.net/api/partnershipOther', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: otherData.name,
                country: otherData.country,
                link: otherData.link,
                phone: otherData.phone,
                email: otherData.email
            })
        })
        .then(() => {
            alert("Other partnership submitted successfully!");
            // Clear input fields after submission
            setOtherData({
                name: '',
                link: '',
                email: '',
                country: '',
                phone: ''
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Submission failed.");
        });
    };

    return (
        <div className='Partnership'>
            <div className='top'>
                <img src={logo} alt="Logo" width={120} />
            </div>
            <h1>Partnership</h1>
            <div className='container'>
                <div className='gym'>
                    <h1>For gyms:</h1>
                    <form className="gym-form" onSubmit={handleGymSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Gym Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={gymData.name}
                                onChange={handleGymInputChange}
                                placeholder="Enter gym name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="link">Related Link:</label>
                            <input
                                type="text"
                                id="link"
                                name="link"
                                value={gymData.link}
                                onChange={handleGymInputChange}
                                placeholder="Enter gym website or social link"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={gymData.email}
                                onChange={handleGymInputChange}
                                placeholder="Enter email address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country:</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={gymData.country}
                                onChange={handleGymInputChange}
                                placeholder="Enter country"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={gymData.phone}
                                onChange={handleGymInputChange}
                                placeholder="Enter phone number"
                            />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
                <div className='other'>
                    <h1>For others:</h1>
                    <form className="other-form" onSubmit={handleOtherSubmit}>
                        <div className="form-group">
                            <label htmlFor="otherName">Name:</label>
                            <input
                                type="text"
                                id="otherName"
                                name="name"
                                value={otherData.name}
                                onChange={handleOtherInputChange}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="otherLink">Related Link:</label>
                            <input
                                type="text"
                                id="otherLink"
                                name="link"
                                value={otherData.link}
                                onChange={handleOtherInputChange}
                                placeholder="Enter website or social link"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="otherEmail">Email:</label>
                            <input
                                type="email"
                                id="otherEmail"
                                name="email"
                                value={otherData.email}
                                onChange={handleOtherInputChange}
                                placeholder="Enter email address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="otherCountry">Country:</label>
                            <input
                                type="text"
                                id="otherCountry"
                                name="country"
                                value={otherData.country}
                                onChange={handleOtherInputChange}
                                placeholder="Enter country"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="otherPhone">Phone Number:</label>
                            <input
                                type="tel"
                                id="otherPhone"
                                name="phone"
                                value={otherData.phone}
                                onChange={handleOtherInputChange}
                                placeholder="Enter phone number"
                            />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>            
        </div>
    );
}

export default Partnership;
