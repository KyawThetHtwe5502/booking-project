import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { BsHeadset, BsInboxesFill, BsGlobe2, BsPhone, BsTelephone, BsEnvelope } from "react-icons/bs";
import { Button } from '../../components/ui/button';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

const HeroSectionContact = () => {
    return (
        <section className='container mx-auto mb-20'>
            <div className='flex mb-12'>
            <div className='basis-5/6'>
                <h1 className='font-heading font-bold text-6xl leading-tight'>Let's connect and get to know each other</h1>
                <p className='text-xl text-gray-500'>Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for any astonished unreserved.</p>
            </div>
            </div>
            <div id='wy' className='grid grid-cols-3 gap-x-6'>
                <Card className="shadow-md rounded-2xl"> 
                    <CardHeader className="flex justify-center items-center ">
                        <span className='w-[56px] h-[56px] bg-accent  flex justify-center items-center rounded-full'><BsHeadset className='text-xl text-[#17a2b8]' /></span>
                        <CardTitle className="font-heading font-bold text-xl">Call us</CardTitle>
                        <CardDescription className="text-base text-center">Imprudence attachment him his for sympathize. Large above be to means.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center  gap-x-2 -mt-2">
                        <Button className="text-sm bg-accent gap-x-2  text-blue-700">
                            <BsPhone /> +123 456 789
                        </Button>
                        <Button className="text-sm bg-accent gap-x-2 text-gray-800">
                            <BsTelephone /> +(222)4567 568
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="shadow-md rounded-2xl">
                    <CardHeader className="flex justify-center items-center ">
                        <span className='w-[56px] h-[56px] bg-accent  flex justify-center items-center rounded-full'><BsInboxesFill className='text-xl text-[#d6293d]' /></span>
                        <CardTitle className="font-heading font-bold text-xl">Email us</CardTitle>
                        <CardDescription className="text-base text-center">Large above be to means. Him his for sympathize.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center items-center -mt-2">
                        <a href="" className='flex items-center gap-x-1 text-blue-700'>
                            <BsEnvelope /><span className='underline'>
                                example@gmail.com
                            </span>
                        </a>
                    </CardFooter>
                </Card>
                <Card className="relative shadow-md rounded-2xl">
                    <span className='absolute top-0 right-0 -translate-y-1/3 translate-x-[16%]'>
                    <svg className="fill-warning" width="77px" height="77px">
						<path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z" />
					</svg>
                    </span>
                    <CardHeader className="flex justify-center items-center">
                        <span className='w-[56px] h-[56px] bg-accent  flex justify-center items-center rounded-full'><BsGlobe2 className='text-xl text-[#fd7d14]' /></span>
                        <CardTitle className="font-heading font-bold text-xl">Social media</CardTitle>
                        <CardDescription className="text-base">Sympathize Large above be to means.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center items-center -mt-2">
                        <ul className='flex items-center gap-x-3'>
                            <li className=''>
                                <Button className="bg-[#5d82d1] hover:bg-[#5475bc] w-8 h-8"><a href="" className=''>
                                    <FaFacebookF /></a></Button> </li>
                            <li>
                                <Button className="w-8 h-8 bg-[#c22b72] hover:bg-[#af2767]">
                                    <a href="">
                                        <FaInstagram /></a>
                                </Button>
                            </li>
                            <li>
                                <Button className="w-8 h-8 bg-[#40bff5] hover:bg-[#3aacdd]">
                                    <a href="">
                                        <FaTwitter /></a>
                                </Button>
                            </li>
                            <li>
                                <Button className="w-8 h-8 bg-[#238cc8] hover:bg-[#4136ae]">
                                    <a href="">
                                        <FaLinkedinIn /></a>
                                </Button>
                            </li>
                        </ul>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default HeroSectionContact