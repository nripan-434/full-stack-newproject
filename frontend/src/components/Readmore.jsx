import React, { useState } from 'react'

const Readmore = ({data}) => {
    const [showMore, setShowMore] = useState(false);

    return (
      
            <div className={ ` slide-in-right   relative overflow-hidden transition-all duration-300   pb-3  border-4 rounded-xl p-3  border-sky-500 ${!showMore?'line-clamp-2  h-36 ':'line-clamp-none h-40 lg:h-50 md:h-70  ' } ` }>{data? data : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, suscipit ad excepturi id dignissimos voluptatibus nisi aliquid velit inventore culpa reiciendis, quam tempora iure impedit, nihil est necessitatibus animi modi.'}
           
                <div className=' absolute hidden md:hidden xl:hidden sm:block bottom-0 pl-1 z-40 right-3 bg-white'>
                    {
                        showMore ? <button className='text-blue-900 underline' onClick={() => { setShowMore(false) }}>read less</button> : <button className='text-blue-900 underline' onClick={() => { setShowMore(true) }}>read more</button>
                    }
                </div>
            </div>
    )
}

export default Readmore
