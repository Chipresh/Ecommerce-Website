import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../Assets/login/logo.jpg";

const Login = () => {

    const navigate = useNavigate()

    const emailDetails = "preciouschidimma647@gmail.com"
    const passwordDetails = "lastdays313"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const handleLogin = () => {

        if (email === emailDetails && password === passwordDetails) {
            navigate("/home")
        }
        else {
            setError(true)
            setEmail("")
            setPassword("")
        }
    }
    return (
        <>
            <div className='h-[100vh] bg-[#333] flex justify-center items-center'>
f
                <div className='w-[35%] bg-[#fff] mx-auto flex flex-col justify-center p-8'>
                    {/* {email} {password} */}
                    <div>
                        <h2 className=' text-[2rem] text-[#DB4444] font-semibold'>Welcome To Exclusive</h2>
                        <img src={logo} alt='logo' className='h-[200px] mx-16' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        {error && <p style={{ color: 'red' }}>Incorrect login details</p>}
                        <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}  className='p-3 w-[80%] border-2 border-black'/>
                        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='p-3  mt5 w-[80%] border-2 border-black'/>
                        <div className='py-2'>
                            <button onClick={handleLogin} className='h-10 w-24 text-center bg-[#DB4444] rounded-sm text-white text-[16px] font-bold'>Login</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Login;