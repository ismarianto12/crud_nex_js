import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    const [value, setValue] = useState({
        username: '',
        password: '',

    });
    // const context = useContext(value);

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
            <link rel="stylesheet" href="http://doc.gotrain.id/assets/css/atlantis.css" />
            <link rel="stylesheet" href="http://doc.gotrain.id/assets/css/bootstrap.min.css" />
            <div className="login wrapper wrapper-login wrapper-login-full p-0">
                <div className="login-aside w-100 h-46 d-flex flex-column align-items-center justify-content-center text-center" style={{ background: 'url("http://doc.gotrain.id/assets/img/spk.jpg")', backgroundSize: 'cover', backgroundPosition: 'bottom center' }}>
                    <div style={{}}>
                        <h2 className="title fw-bold text-black mb-3" style={{ marginTop: '-60px', color: '#fff' }}>Login aplikasi</h2>
                    </div>
                </div>
                <div className="login-aside w-20 d-flex align-items-center justify-content-center bg-white">
                    <form method="POST" onSubmit={handleSubmit.bind(this)} className="form-hocrizontal">
                        <input type="hidden" name="_token" defaultValue="QJkFaunLiloDS2Kuvdip7TpLp3AE7k4IwMsKCYQH" />
                        <div className="container container-login container-transparent animated fadeIn" style={{ display: 'block' }}>
                            <h3 className="text-center">Login Aplikasi</h3>
                            <div className="login-form">
                                <div className="form-group">
                                    <label htmlFor="username" className="placeholder"><b>Username</b></label>
                                    <input id="username" name="username" onChange={handleChange} type="text" className="form-control" value={value.username} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="placeholder"><b>Password</b></label>
                                    <div className="position-relative">
                                        <input id="password" name="password" onChange={handleChange} type="password" className="form-control" value={value.password} required />
                                        <div className=" show-password">
                                            <i className="icon-eye" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group form-action-d-flex mb-3">
                                    <button type='submit' className="btn btn-secondary col-md-5 float-right mt-3 mt-sm-0 fw-bold">Sign
                                        In</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}