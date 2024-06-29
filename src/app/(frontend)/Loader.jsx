"use client"
import { MoonLoader } from 'react-spinners';

const Loader = () => {
    return (
        <>
            <div className='bg-black/90 h-screen text-white w-full absolute flex flex-col gap-4 justify-center items-center'>
                <span className='text-center text-zinc-200 text-5xl font-bold uppercase '>Webnike</span>
                <MoonLoader
                    color="#8206fd"
                    size={70}
                    speedMultiplier={29}
                />

            </div>
        </>
    )
}

export default Loader