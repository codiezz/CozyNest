import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default function FormHandling() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        city: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/user', formData);
            alert('User registered successfully');
            console.log(response.data);
        } catch (error) {
            alert('Error registering user');
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <div className="formmm">
                <div className="formm">
                    <form onSubmit={handleSubmit}>
                        <h1><b>LOGIN USER</b><hr /></h1>
                        <div>
                            <p><b>Name: </b></p>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <p><b>Contact: </b></p>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="Enter your contact"
                            />
                        </div>
                        <div>
                            <p><b>City:</b></p>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter your city"
                            />
                        </div>
                        <div>
                            <p><b>Email:</b></p>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <p><b>Password:</b></p>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                        </div>
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
