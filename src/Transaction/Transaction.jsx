import React from 'react';
import DashboardLayout from "../components/DashboardLayout";
import { RiDownloadFill } from "react-icons/ri";
import TransactionChart from './components/TransactionChart';


const Transaction = () => {
    return (
        <div className=''>
            <DashboardLayout title="Transactions">
                <TransactionChart />
            </DashboardLayout>

        </div>
    )
}

export default Transaction
