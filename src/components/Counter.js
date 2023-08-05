import { useEffect, useState } from 'react';
import { calculateTimeLeft } from './utils/utils';


export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <div class="flex gap-4">
  <div class="w-16 md:w-20 lg:w-24 flex flex-col justify-center items-center rounded bg-blue-500 bg-opacity-10">
    <span class="w-full py-1 text-4xl md:text-5xl lg:text-6xl text-gray-300 from-slate-200 to-slate-400 text-center white-space-nowrap overflow-hidden">{timeLeft.days}</span>
    <span class="w-full py-0.5 text-xs md:text-sm lg:text-sm text-gray-300 from-slate-200 to-slate-400 uppercase font-bold text-center white-space-nowrap overflow-hidden">Days</span>
  </div>

  <div class="w-16 md:w-20 lg:w-24 flex flex-col justify-center items-center rounded bg-blue-500 bg-opacity-10">
    <span class="w-full py-1 text-4xl md:text-5xl lg:text-6xl text-gray-300 from-slate-200 to-slate-400 text-center white-space-nowrap overflow-hidden">{timeLeft.hours}</span>
    <span class="w-full py-0.5 text-xs md:text-sm lg:text-sm text-gray-300 from-slate-200 to-slate-400 uppercase font-bold text-center white-space-nowrap overflow-hidden">Hours</span>
  </div>

  <div class="w-16 md:w-20 lg:w-24 flex flex-col justify-center items-center rounded bg-blue-500 bg-opacity-10">
    <span class="w-full py-1 text-4xl md:text-5xl lg:text-6xl text-gray-300 from-slate-200 to-slate-400 text-center white-space-nowrap overflow-hidden">
      {timeLeft.minutes}
    </span>
    <span class="w-full py-0.5 text-xs md:text-sm lg:text-sm text-gray-300 from-slate-200 to-slate-400 uppercase font-bold text-center white-space-nowrap overflow-hidden">Minutes</span>
  </div>

  <div class="w-16 md:w-20 lg:w-24 flex flex-col justify-center items-center rounded bg-blue-500 bg-opacity-10">
    <span class="w-full py-1 text-4xl md:text-5xl lg:text-6xl text-gray-300 from-slate-200 to-slate-400 text-center white-space-nowrap overflow-hidden">
      {timeLeft.seconds}
    </span>
    <span class="w-full py-0.5 text-xs md:text-sm lg:text-sm text-gray-300 from-slate-200 to-slate-400 uppercase font-bold text-center white-space-nowrap overflow-hidden">Seconds</span>
  </div>
</div>


  );
};
