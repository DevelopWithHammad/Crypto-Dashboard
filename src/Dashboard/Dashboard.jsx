import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import PortfolioSection from './components/PortfolioSection';
import CurrentPrice from './components/CurrentPrice';
import Transactions from './components/Transactions';
import Info from './components/Info';

const Dashboard = () => {
    return (
        <>
            <DashboardLayout title="Dashboard">
                <PortfolioSection />
                <div className='flex flex-col lg:flex-row items-center px-[55px] gap-6'>
                    <CurrentPrice />
                    <Transactions />
                </div>
                {/* src\assets\bg-1.svg */}
                <div className='flex flex-col lg:flex-row items-center px-[55px] gap-6'>
                    <Info
                        title="Loans"
                        text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
                        className="bg-white"
                        titleClass="bg-primary text-white"
                        style={{
                            backgroundImage: "url('src/assets/bg-1.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    />
                    <Info
                        title="Contact"
                        text="Learn more about our real estate, mortgage, and  corporate account services"
                        className="bg-primary"
                        titleClass="bg-white text-primary"
                        textClass="text-white"
                        style={{
                            backgroundImage: "url('src/assets/bg-2.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    />
                </div>
            </DashboardLayout>
        </>
    )
}

export default Dashboard
