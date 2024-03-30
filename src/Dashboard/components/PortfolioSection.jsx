import React from 'react';
import { IoIosAlert } from "react-icons/io";
import { RiDownloadFill } from "react-icons/ri";



const PortfolioSection = () => {
    return (
        <div className='flex flex-col lg:flex-row items-start w-1/2 lg:w-[90%] mx-auto gap-7 lg:gap-12 bg-white px-6 py-6 rounded-2xl mt-6'>

            <div className='flex flex-col lg:flex-row items-start lg:items-end gap-7 lg:gap-16 '>
                <div>
                    <div className='flex items-center gap-2 text-[#535D66]'>
                        <p className=' text-sm font-semibold'>Total Portfolio Value</p>
                        <IoIosAlert className='text-lg' />
                    </div>
                    <h2 className='text-2xl font-semibold tracking-wide'>PKR 112,312.24</h2>
                </div>
                <div>
                    <p className=' text-sm font-semibold text-[#535D66]'>Wallet Balances</p>
                    <div className='flex items-center gap-8'>
                        <div className='flex items-center'>
                            <h2 className='text-2xl font-semibold tracking-wide'>22.39401000</h2>
                            <p className='text-[#797E82] text-xs font-bold bg-[#F3F3F7] px-1.5 py-1 rounded-full'>BTC</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h2 className='text-2xl font-semibold tracking-wide'>PKR 1,300.00</h2>
                            <p className='text-[#797E82] text-xs font-bold bg-[#F3F3F7] px-1.5 py-1 rounded-full'>PKR</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex  items-center gap-2'>
                <div className='bg-primary cursor-pointer px-4 py-1.5 rounded-[10px] text-white flex items-center gap-2'>
                    <RiDownloadFill />
                    <p className='text-sm font-semibold'>Deposit</p>
                </div>
                <div className='bg-primary cursor-pointer px-4 py-1.5 rounded-[10px] text-white flex items-center gap-2'>
                    <RiDownloadFill className='rotate-180' />
                    <p className='text-sm font-semibold'>Withdraw</p>
                </div>
            </div>

        </div>
        
    )
}

export default PortfolioSection
