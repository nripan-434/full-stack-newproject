import React from 'react'

const Userregister = () => {
    return (
        <div >
            <h1>User Registration</h1>

            <div className='flex justify-center h-screen items-center '>
                <form action="" className='flex flex-col  gap-8'>
                        <input type="text" placeholder='enter first name' />
                    <div>                         
                    <input type="text" placeholder='enter user email' />
                    <input type="password" placeholder='enter password' />                      
                    </div>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                    <button className='bg-blue-500  text-white p-2 rounded-md'>Register</button>

                </form>
            </div>


        </div>
    )
}

export default Userregister
