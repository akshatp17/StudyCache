import React from 'react'
import { AiFillNotification } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Noti = (props) => {
    return (
        <div className='w-full flex just items-center bg-[#EEAA11] text-black'>
            <div className='flex justify-center items-center gap-2 w-full px-2 py-0.5 text-md'>
                <p className='font-semibold'><AiFillNotification /></p>
                <p className=''>{props.noti}</p>
                <Link to={props.link} className='text-[#1155EE] underline'>Read more</Link>
            </div>
        </div>
    )
}

export default Noti
