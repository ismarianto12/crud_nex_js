import Router from "next/router";
import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.clear();
        Router.push('/login');
    }, [])
}

export default Logout;