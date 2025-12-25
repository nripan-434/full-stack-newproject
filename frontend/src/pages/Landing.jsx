import React from 'react'
import Readmore from '../components/Readmore';

const Landing = () => {
    return (
        <div className=' flex flex-col' >
                <div className='absolute top-12 bg-sky-500 h-2 w-full text-white  ' ></div>

            <div className='flex-2 mt-3 text-sky-500 text-2xl font-[impact] flex justify-center items-center'>Welcome to [websitename]</div>
            <div className='flex-6'>
                <div className="p-3 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                    <Readmore />
                    <Readmore />
                    <Readmore />
                </div>
                <div className='sm:flex '>
                <img className='slide-in-left w-79 h-70 object-cover object-right' src="https://t4.ftcdn.net/jpg/15/91/74/11/360_F_1591741147_4oqX7uafiIxZbArZJAEG37QVLjyVeQQ7.jpg" alt="" />
                </div>
            </div>
            <div className='relative'>
                <div className='absolute top-3 bg-white h-2 w-full text-white  ' ></div>
                <div className='flex   justify-center bg-cover   items-center pt-5 bg-sky-500 text-white h-100'>
                    <div className='shadow-[0_0_25px_rgba(0,0,0,0.2)]  p-15 rounded-xl'>
                        <form action="" className=' w-60 flex flex-col ml-5 gap-6'>
                            <h1 className='font-[impact] text-4xl pb-4 underline'>Login</h1>

                            <input className='outline-0 h-6' type="text" placeholder='enter username' />
                            <input className='outline-0 h-6' type="password" placeholder='enter password' />
                            <button className='bg-white text-blue-500 rounded-xl hover:shadow-xl p-1'>Sign in</button>


                        </form>
                    </div>
                </div>
            </div>
        </div>





    )
}

export default Landing
