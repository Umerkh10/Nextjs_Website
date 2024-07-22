import Image from 'next/image'
import React from 'react'

const AppPartners = () => {
  return (
    <div className='bg-slate-200 dark:bg-transparent pr-6 pl-6 pt-16 pb-10'>
        <div className='text-center uppercase text-4xl font-extrabold' data-aos="fade-up" >our client & partners</div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-8 ' data-aos="fade-down">

            <div className='border border-black  dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center  '><Image className=' pt-4' src="/imgs/client-1.png" width={140} height={60}
                alt='client'></Image></div>
            </div>

            <div className='border border-black  dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className=' mt-6' src="/imgs/client-2.png" width={140} height={60}
                alt='client'></Image></div>
            </div>

            <div className='border border-black  dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className=' ' src="/imgs/client-3.png" width={140} height={60}
                alt='client'></Image></div>
            </div>

            <div className='border border-black  dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className=' mt-10' src="/imgs/client-4.PNG" width={140} height={60}
                alt='client'></Image></div>
            </div>



            <div className='border border-black dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className=' ' src="/imgs/client-5.PNG" width={140} height={60}
                alt='client'></Image></div>
            </div>

            <div className='border border-black dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className=' mt-6' src="/imgs/client-6.PNG" width={140} height={60}
                alt='client'></Image></div>
            </div>

            <div className='border border-black dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className='-mt-2 ' src="/imgs/client-7.PNG" width={140} height={60}
                alt='client'></Image></div>
            </div>

            <div className='border border-black dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className=' ' src="/imgs/client-8.PNG" width={90} height={60} alt='client'></Image></div>
            </div>

            <div className='border border-black dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className='mt-4 ' src="/imgs/client-9.PNG" width={80} height={60}
                alt='client'></Image></div>
            </div>

            <div className='border border-black dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className=' mt-4' src="/imgs/client-10.PNG" width={80} height={60}
                alt='client'></Image></div>
            </div>

            <div className='border border-black dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className='-mt-2 ' src="/imgs/client-7.PNG" width={140} height={60}
                alt='client'></Image></div>
            </div>

            <div className='border border-black dark:bg-slate-200 h-28'>
                <div className='flex items-center justify-center'><Image className=' ' src="/imgs/client-8.PNG" width={90} height={60} alt='client'></Image></div>
            </div>

        
        </div>

    </div>
  )
}

export default AppPartners