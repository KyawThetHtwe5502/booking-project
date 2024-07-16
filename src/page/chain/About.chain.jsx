import React from 'react'
import Counter from './Counter'
import { Button } from '../../components/ui/button';
import { BsCashCoin, BsCreditCard2Back, BsWallet, BsWifi, BsTags, BsEye } from "react-icons/bs";

const AboutChain = () => {
    return (
        <section className='container mx-auto'>
            <div>
                <h2 className='text-5xl font-bold font-heading leading-tight mb-3'>We always provide the best for our hotel visitors. We are happy to help you.</h2>
                <p className='text-gray-500'>We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done.</p>
                <div className='mt-8'>
                    <div className='grid grid-cols-3 gap-x-6'>
                        <div className='p-8 w-full bg-accent rounded-2xl flex flex-col justify-center gap-8'>
                            <div className='flex justify-between items-center'>
                                <span className='font-heading text-4xl font-bold text-blue-600'><Counter  endValue={10} speed={3000} /></span>
                                <h6 className='font-heading font-medium'>Total Hotels</h6>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='inline-flex items-center font-heading text-4xl font-bold text-blue-600 '>
                                    <Counter endValue={200} speed={4000} />+
                                </span>
                                <h6 className='font-heading font-medium'>Total Staff</h6>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='inline-flex items-center font-heading text-4xl font-bold text-blue-600 '>
                                    <Counter endValue={50} speed={3000} />+
                                </span>
                                <h6 className='font-heading font-medium'>Amazing Services</h6>
                            </div>

                        </div>
                        <div className='relative rounded-2xl overflow-hidden'>
                            <img src="aboutImg.jpg" alt="" />
                            <Button className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-base font-heading font-medium inline-flex items-center gap-2"><BsEye className='text-white' />View 360</Button>
                        </div>
                        <div>
                        <ul className='flex flex-col gap-6 py-6 px-2'>
                            <li className='inline-flex items-center gap-x-2'>
                                <BsCashCoin className='text-[#17A2B8]'/>
                                <span>Best Rate Guaranteed</span>
                            </li>
                            <li className='inline-flex items-center gap-x-2'>
                                <BsCreditCard2Back className='text-[#F7C32E]'/>
                                <span>Payment at Hotel
                                </span>
                            </li>
                            <li className='inline-flex items-center gap-x-2' >
                                <BsWallet className='text-[#0CBC87]'/>
                                <span>Exclusive Members Rewards
                                </span>
                            </li>
                            <li className='inline-flex items-center gap-x-2'>
                                <BsWifi className='text-[#D6293E]'/>
                                <span>WIFI Access
                                </span>
                            </li>
                            <li className='inline-flex items-center gap-x-2' >
                                <BsTags className='text-[#FD7E14]' />
                                <span>No Hidden Changes </span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutChain