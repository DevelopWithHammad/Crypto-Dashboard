import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import SupportInfo from './components/SupportInfo'
import { MdEmail } from "react-icons/md";
import { IoChatbubble } from "react-icons/io5";
import Info from "../Dashboard/components/Info"

const Support = () => {
  return (
    <div>
      <DashboardLayout title="Support">
        <div className='con px-28 pb-12 mt-7 flex items-center gap-6'>
          <div className='left flex flex-col mb-7 justify-around gap-12  h-[550px]'>
            <SupportInfo icon={MdEmail} title="Contact Us" text="Have a question or just want to know more? Feel free to reach out to us." />
            <SupportInfo icon={IoChatbubble} title="Live Chat" text="Don’t have time to wait for the answer? Chat with us now." />
            <Info
              title="Chatbot"
              text="Chat with us"
              className="bg-primary w-full !mt-0"
              titleClass="bg-white text-primary"
              textClass="text-white"
              style={{
                backgroundImage: "url('src/assets/bg-2.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
          </div>
          <div className='right w-[60%] bg-white px-6 py-6 rounded-2xl'>
            <h3 className='font-semibold'>You will receive response within 24 hours of time of submit.</h3>
            <form>
              <div className='flex items-center gap-6 mt-8'>
                <div className='flex flex-col'>
                  <label htmlFor="name" className='text-sm font-semibold'>Name</label>
                  <input type="text" placeholder='James' id='name' className='bg-transparent border py-1.5 px-2 rounded-[8px] mt-2 outline-none' />
                </div>
                <div className='flex flex-col'> 
                  <label htmlFor="surname" className='text-sm font-semibold'>Surname</label>
                  <input type="text" placeholder='Arthur' id='surname' className='bg-transparent border py-1.5 px-2 rounded-[8px] mt-2 outline-none' />
                </div>
              </div>
              <div className='flex flex-col mt-6'>
                <label htmlFor="surname" className='text-sm font-semibold'>Email</label>
                <input type="text" placeholder='name@mail.com' id='surname' className='bg-transparent border py-1.5 px-2 rounded-[8px] mt-2 outline-none' />
              </div>
              <div className='flex flex-col mt-6'>
                <label htmlFor="message" className='text-sm font-semibold'>Message</label>
                <textarea placeholder='Your Message' id="message" cols="30" rows="3" className='bg-transparent border py-1.5 px-2 rounded-[8px] mt-2 outline-none resize-none'></textarea>
              </div>
              <p className='text-sm font-semibold mt-8'>I agree with <span className='text-primary'>Terms & Conditions.</span></p>
              <button className='bg-[#EEEEF4] w-full py-2.5 mt-8 rounded-[10px] text-md font-semibold'>Send a Message</button>
              <button className='bg-[#EEEEF4] w-full py-2.5 mt-2 rounded-[10px] text-md font-semibold'>Book a Meeting</button>
            </form>
          </div>
        </div>
      </DashboardLayout>
     
    </div>
  )
}

export default Support
