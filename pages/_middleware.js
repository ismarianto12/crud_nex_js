import { NextFetchEvent, NextRequest } from 'next/server';
import { useEffect } from "react";

export default function middleware(req) {

    if (typeof window !== 'undefined') {
        const item = localStorage.getItem('sess_app');
        console.log(JSON.parse(item));
        alert('asda');

    } else {
        // const item = req.localStorage;
        // console.log('asdad' + req.localStorage.sess_app);
    }

    // return NextResponse

}