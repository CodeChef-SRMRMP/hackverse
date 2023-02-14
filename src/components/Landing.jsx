import React from 'react';
const Landing = () => {

    const title = <svg id="title" width="0" height="0" viewBox="0 0 0 0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
    <linearGradient id="paint0_linear_3_14" x1="3" y1="37.0001" x2="585" y2="37.0001" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FF1CF7"/>
    <stop offset="1" stop-color="#00F0FF"/>
    </linearGradient>
    </defs>
</svg>
    
    return (
        <div className="text-center overflow-hidden items-center flex flex-col lg:gap-8 md:gap-6 gap-4 p-4">
            <h1 className="bg-gradient-to-r bg-clip-text text-transparent lg:text-[60px] font-bold from-slate-200 to-slate-400 text-xl md:text-4xl">A HACKATHON LIKE NEVER BEFORE</h1>
            <svg viewBox="0 0 1000 200">
                {title}
                <text id="paint0_linear_3_14" x="50%" y="50%" dy=".35em" textAnchor="middle">
                    HACK VERSE
                </text>
            </svg>	
            <h1 className="bg-gradient-to-r bg-clip-text text-transparent text-gray-300 font-bold lg:text-3xl text-sm md:text-lg from-slate-200 to-slate-400">LARGEST STUDENT RUN WEB 3 HACKATHON IN CHENNAI</h1>
        </div>
    )
}

export default Landing;