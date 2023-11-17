// Hero.jsx

import Image from 'next/image';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='flex flex-col md:flex-row items-center justify-center pt-16 md:pt-36 px-4 md:px-8'>
                <div className='flex-1 text-center md:text-left'>
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-4'>
                        Find, Search, or Order -- quickly and easily!
                    </h1>
                    <p className='text-lg md:text-xl text-gray-600 mb-8'>
                        Streamline your online shopping experience with our effortless ordering process.
                    </p>
                </div>
                {/* You can add an Image component here if needed */}
            </div>
        </div>
    );
};

export default Hero;
