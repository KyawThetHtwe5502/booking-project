import React from 'react'
import { FaHandHoldingHeart, FaHandHoldingUsd } from "react-icons/fa";

const DownloadAppHome = () => {
    return (
        <section className='bg-accent'>
            <div className='container mx-auto py-14'>
                <div className=''>
                    <div className='grid grid-cols-6 gap-y-4 gap-x-8'>
                        <div className='col-span-3 bg-white px-6 py-5 rounded-2xl'>

                            <div className='flex items-center gap-x-4'>
                                <FaHandHoldingHeart className='text-5xl' />
                                <div>
                                    <h4 className='font-bold font-heading text-xl mb-2'>24x7 Help</h4>
                                    <p>If we fall short of your expectation in any way, let us know</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 bg-white px-6 py-5 rounded-2xl'>
                            <div className='flex items-center gap-x-4'>
                                <FaHandHoldingUsd className='text-5xl' />
                                <div>
                                    <h4 className='text-xl font-heading font-bold mb-3'>Payment Trust</h4>
                                    <p>All refunds come with no questions asked guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <h3 className='text-xl font-heading font-bold mb-6'>Download app</h3>
                            <div className='grid grid-cols-2 gap-x-4 w-[80%]'>
                                <img src="google-play.svg" alt="" />
                                <img src="app-store.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloadAppHome