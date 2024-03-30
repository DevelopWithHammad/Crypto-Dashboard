import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { timings, tabs } from '../../constants';

const CurrentPrice = () => {
    return (
        <div className='w-1/2  bg-white px-6 py-6 rounded-2xl mt-6'>
            <div className='flex items-start justify-between'>
                <div>
                    <p className=' text-sm font-semibold text-[#535D66]'>Current Price</p>
                    <div className='flex items-end gap-2'>
                        <h2 className='text-2xl font-semibold tracking-wide'>PKR 26,670.25</h2>
                        <div className='flex items-center gap-0.5 text-[#059669] font-semibold'>
                            <LuArrowUpRight />
                            <span>0.04%</span>
                        </div>
                    </div>
                </div>
                <div className='flex  items-center gap-2'>
                    <div className='bg-primary cursor-pointer px-4 py-1.5 rounded-[10px] text-white flex items-center gap-2'>
                        <FaCirclePlus />
                        <p className='text-sm font-semibold'>Buy</p>
                    </div>
                    <div className='bg-primary cursor-pointer px-4 py-1.5 rounded-[10px] text-white flex items-center gap-2'>
                        <FaCircleMinus className='rotate-180' />
                        <p className='text-sm font-semibold'>Sell</p>
                    </div>
                </div>
            </div>
            {/* tabs */}
            <div className='flex items-center justify-center px-1.5 py-1.5 bg-[#F3F3F7] w-[180px] mt-4 ml-auto rounded-lg'>{tabs.map((item, index) => (
                <div key={index} className='px-3 text-[#797E82] font-semibold cursor-pointer'>{item.title}</div>
            ))}</div>

            <img src="src\assets\graph.svg" alt="graph" className='w-full mt-12' />
            <div className='flex items-center justify-between mt-4'>{timings.map((item, index) => (
                <p className='text-[#797E82] font-normal' key={index}>{item}</p>
            ))}</div>


        </div>
    )
}

export default CurrentPrice
