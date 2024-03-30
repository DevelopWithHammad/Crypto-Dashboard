import React from 'react';
import { transactionRecords } from '../../constants';

const Transactions = () => {
    return (
        <div className='w-1/2 gap-7 lg:gap-12 bg-white px-6 py-6 rounded-2xl mt-6'>
            <p className=' text-sm font-semibold text-[#535D66]'>Recent Transactions</p>
            <div className='mt-6'>{transactionRecords.map((item, index) => (
                <div key={index} className='flex items-start justify-between mt-6'>
                    <div className='flex'>
                        <div className='bg-[#F3F3F7] rounded-full w-10 h-10 flex items-center justify-center'>
                            <item.currency className={`${index === 1 ? 'text-xl' : 'text-2xl'}`} />
                        </div>
                        <div className='ml-4'>
                            <h4 className='text-base font-medium'>{item.title}</h4>
                            <p className='text-[#797E82]'>{item.date}</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <h2 className='text-base font-semibold'>{item.amount}</h2>
                        <p className='text-[#797E82]'>{item.profit}</p>
                    </div>
                </div>
            ))}</div>
            <button className='bg-[#EEEEF4] w-full py-2.5 mt-7 rounded-[10px] text-md font-semibold'>View All</button>
        </div>
    )
}

export default Transactions
