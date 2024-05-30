import React from 'react';
import Image from 'next/image';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const FeedCard: React.FC = () => {
  return (
    <div className=' border border-r-0  border-b-0  border-l-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer '>
      <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-2'>
          <Image 
            src="https://images.pexels.com/photos/23644605/pexels-photo-23644605/free-photo-of-a-woman-standing-by-the-water-in-front-of-houses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height={50}
            width={50}
            alt="Woman standing by the water in front of houses"
          />
        </div>
        <div className='col-span-10 '>
           <h5>Deep sen</h5>
           <p className='   text-sm'>is it just me or everyone else? do you feel the code quality decrese as the project size increse? just refactored a lot of bad code #codelife</p>
           <div className='flex justify-between  mt-5 text-xl   items-center p-2  w-[90%]'>
             <div>
               <BiMessageRounded/>
             </div>
             <div>
               <FaRetweet/>
             </div>
             <div>
               <AiOutlineHeart />
             </div>
             <div>
               <BiUpload />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
