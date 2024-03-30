import React from 'react';
import { RiDownloadFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { transactionsTabs } from '../../constants';
import { tableData } from '../../constants';



const TransactionChart = () => {
    return (
        <div className='px-28 pb-12'>
            <div className='bg-primary w-[130px] cursor-pointer px-4 py-1.5 rounded-[10px] text-white flex items-center ml-auto mt-6 gap-2'>
                <RiDownloadFill />
                <p className='text-sm font-semibold'>Export CSV</p>
            </div>
            <div className='chart bg-white pl-4 pr-6 mt-3'>
                <div className="tabs text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex items-center justify-between">
                    <ul className="flex flex-wrap -mb-px">
                        {transactionsTabs.map((item, index) => (
                            <li className="me-2">
                                <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                    <div className='flex items-center gap-2'>
                                        <span className='text-black font-semibold'>{item.title}</span>
                                        <span className='bg-[#F3F3F7] text-[#797E82] px-2 py-0.5 rounded-full'>{item.value}</span>
                                    </div>
                                </a>
                            </li>
                        ))}

                    </ul>
                    <div className='flex items-center gap-2 mr-2 border py-2 px-2 rounded-lg'>
                        <IoSearchOutline className='text-xl text-[#797E82] cursor-pointer' />
                        <input type="text" className='outline-none placeholder:text-xs' placeholder='Search by ID or destination' />
                    </div>
                </div>
                <div class="tableChart relative overflow-x-auto">
                    <table class="w-full text-left">
                        <thead class="text-xs text-[#797E82]">
                            <tr className='border border-b text-sm'>
                                <th scope="col" class="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center cursor-pointer">
                                        Date & Time
                                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg></a>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Type
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center cursor-pointer">
                                        Amount
                                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg></a>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Status
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6  font-semibold">
                                        <div className='flex items-start h-full'>
                                            {item.id}
                                        </div>
                                    </th>
                                    <td class="px-6 py-4 flex flex-col">
                                        <div className='flex flex-col '>
                                            <span className='text-black font-semibold'>
                                                {item.date}
                                            </span>
                                            <span className='text-xs text-[#797E82]'>
                                                {item.time}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div className='flex flex-col'>
                                            <span className='text-black font-semibold'>
                                                {item.type.name}
                                            </span>
                                            <span className='text-xs text-[#797E82]'>
                                                {item.type.method}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div className='flex flex-col'>
                                            <span className='text-black font-semibold'>
                                                {item.amount}
                                            </span>
                                            <span className='text-xs text-[#797E82]'>
                                                {item.profit}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div className={`tracking-wide py-2 px-1 flex items-center justify-center text-white text-xs font-semibold rounded-full ${item.status === "Pending" ? 'bg-[#797E82]' : item.status === "Processing" ? 'bg-[#F5A50B]' : item.status === "Cancelled" ? 'bg-[#DC2626]' : item.status === "Completed" ? 'bg-[#059669]' : ''}`}>{item.status}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TransactionChart
