import React, { useEffect, useState } from 'react';
import Router from 'next/router';

export default function Login() {
    const [value, setValue] = useState({
        username: '',
        password: '',

    });
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });
    const handleChange = (e) => {

        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.username == '') {
            setErrors({

                username: 'tidak boleh kosong'
            })
        } else if (value.password == '') {
            setErrors({

                password: 'password tidak boleh kosong'
            })
        } else {

            const { sessin } = {
                username: value.username,
                password: value.password
            }
            localStorage.setItem('sess_app', JSON.stringify(value));
            JSON.stringify(value);

            console.log(value)
            Router.push('/');
        }
    }



    useEffect(() => {


    }, [])
    return (
        <>

            <form onSubmit={handleSubmit.bind(this)} method="POST">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Enter Name" name="username" refs="name" onChange={handleChange} value={value.username} />
                        <span style={{ color: "red" }}>{errors.username}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="name">Password</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Enter Name" name="password" refs="name" onChange={handleChange} value={value.password} />
                        <span style={{ color: "red" }}>{errors.password}</span>
                    </div>

                </div>
                <div className="row">
                    <div className="col-25">
                        <button className="btn btn-striped" type='submit'>Login</button>
                    </div>
                </div>

            </form>

        </>
    );
}