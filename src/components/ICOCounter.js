import React, {useState, useEffect, useRef} from 'react'
import { BsFillGiftFill, BsFillArrowUpRightSquareFill } from 'react-icons/bs'

const ICOCounter = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('August 29, 2022 13:30:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current)
      }else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000)
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });

  return (
    <div className='flex flex-col md:justify-between justify-center items-center pb-16'>
        <div className='md:w-3/4 py-8 md:px-4'>
          <h1 className='md:text-5xl text-3xl text-center font-extrabold text-white py-4'>ICO EVENT</h1>
          <div className='flex flex-col justify-center items-center white-glassmorphism p-4 shadow-md shadow-cyan-400'>
            <h1 className='text-white text-3xl uppercase text-center font-sans'>FAIRLAUNCH</h1>
            <h1 className='text-white text-3xl uppercase text-center font-sans'>ON</h1>
            <h1 className='text-white text-3xl uppercase text-center font-sans'>PINKSALE</h1>
            <div className='flex flex-col justify-center items-center p-6'>
                <table className='text-center'>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Days</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Hours</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Mins</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Secs</th>
                  <tr>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{timerDays}:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{timerHours}:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{timerMinutes}:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{timerSeconds}</td>
                  </tr>
                </table>
                <button className='flex font-semibold text-black tracking-wide bg-gradient-to-l from-yellow-300 to-yellow-600 hover:bg-gradient-to-r hover:shadow-md hover:shadow-blue-800 duration-100 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
                  <a href='https://www.pinksale.finance/#/launchpad/0xc3C060928d8f109E7997dd64Ff866B98Ddb33C3B?chain=BSC' target='_blank' rel="noreferrer" >Join Now</a>
                </button>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default ICOCounter