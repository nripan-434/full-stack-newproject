import React from 'react'
import Readmore from '../components/Readmore';

const Landing = () => {
    return (
        <div className=' flex flex-col' >
            <div className='flex-2 text-sky-500 text-2xl font-[impact] flex justify-center items-center'>Welcome to [websitename]</div>
            <div className='flex-6'>
                <div className="p-3 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                    <Readmore />
                    <Readmore />
                    <Readmore />
                </div>
                <img className='slide-in-left w-79 h-70 object-cover object-right' src="https://t4.ftcdn.net/jpg/15/91/74/11/360_F_1591741147_4oqX7uafiIxZbArZJAEG37QVLjyVeQQ7.jpg" alt="" />
            </div>
            <div className='flex-2'>
                <div>
                    
                </div>
            </div>
            <div className='flex justify-center pt-14 bg-sky-500 text-white h-80'>
                <h1 className='font-[impact] text-4xl'>Login</h1>
                <form action="">
                    <input type="text" placeholder='enter username' />
                    <input type="password" placeholder='enter password' />
                    <button></button>

                </form>
            </div>
        </div>





    )
}

export default Landing
