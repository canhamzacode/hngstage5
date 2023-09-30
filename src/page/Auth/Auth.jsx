import React, { useState } from 'react'
import logo from "../../assets/Image/logo2.svg"
import { FcGoogle, FcSimCard } from "react-icons/fc"
// import { Link } from 'react-router-dom'
import {AiFillFacebook} from "react-icons/ai"

const Auth = () => {

    return (
        <div className='w-full grid gap[20px]  h-[100vh]' >
            <div className='w-full min-h-[100vh] flex flex-col gap-[25px] items-start p-[64px] px-[40px] max-w-[550px] mx-auto '>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-[160px] h-[60px]'>
                        <a href="/">
                            <img src={logo} alt="" className='w-full h-full' />
                        </a>
                    </div>
                </div>
                <div className='grid gap-[40px] w-full'>
                    <div className='flex items-center justify-center flex-col text-center'>
                        <h2 className='text-3xl font-bold mb-2'>Log in or Sign up</h2>
                        <p className='text-lg'>Join millions of others in sharing successful moves on HelpMeOut.</p>
                    </div>
                    <div className='w-full grid gap-[15px]'>
                        <button  className='px-[30px] py-[10px] rounded-md border border-black w-full font-bold flex items-center gap-2 justify-center'>
                            <FcGoogle size={35} />
                            <p>
                                Continue with Google
                            </p>
                        </button>
                        <button  className='px-[30px] py-[10px] rounded-md border border-black w-full font-bold flex items-center gap-2 justify-center'>
                            <AiFillFacebook size={35} />
                            <p>
                                Continue with Facebook
                            </p>
                        </button>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <hr className='w-full' />
                </div>
                <form className="w-full grid gap-[15px]">
                    <div className='w-full grid gap-[10px]'>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input id='email' type="text" placeholder='e.g user@gmail.com' className=' p-[10px] border-[#E8E8E8] border rounded-md' />
                    </div>
                    <div className='w-full grid gap-[10px]'>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input id='password' type="password" placeholder='Password' className=' p-[10px] border-[#E8E8E8] border rounded-md' />
                    </div>
                    <button type='submit' className='px-[30px] py-[15px] rounded-md border border-black w-full font-bold bg-[#120B48] text-white'>
                        Sign Up
                    </button>
                </form >
            </div>
        </div>
    )
}

export default Auth