import React from 'react'
import {Label} from "../../components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {Input} from "../../components/ui/input"
import { Button } from '../../components/ui/button'
const FormSectionContact = () => {
    return (
        <section className='container mx-auto mb-8'>
            <div className='grid grid-cols-12  items-center gap-x-8'>
                <div className='col-span-12 lg:col-span-6 xl:col-span-6 mb-5 lg:mr-5 xl:mr-5'>
                    <img src="contact.svg" alt="" />
                </div>
                <div className='col-span-12 lg:col-span-6 xl:col-span-6 p-6 bg-accent rounded-xl relative'>
                    <h3 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl xl:text-4xl mb-5'>Send us message</h3>
                    <form className='flex flex-col space-y-8'>
                    <div className='flex items-center justify-between gap-x-6'>
                        <div className='basis-1/2'>
                        <Label className="text-base text-gray-500 font-normal mb-2 block" htmlFor="name">Your name *</Label>
                        <Input type="text" id="name" name="name" />
                        </div>
                        <div className='basis-1/2'>
                        <Label className="text-base text-gray-500 font-normal mb-2 block" htmlFor="email">Email address *</Label>
                        <Input type="email" id="email" name="email" />
                        </div>
                        
                    </div>
                    <div>
                    <Label className="text-base text-gray-500 font-normal block mb-2" htmlFor="phone">Mobile number *</Label>
                    <Input type="number" id="phone" name="phone" />
                    </div>
                    <div>
                    <Label className="text-base text-gray-500 font-normal block mb-2" htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" />
                    </div>
                    <div className='flex items-center gap-x-2'>
                    <Checkbox id="check" name="check" className="border-gray-500 dark:bg-gray-600 dark:focus:bg-blue-500 dark:text-white focus:bg-gray-500" /> 
                    <Label className="text-base  text-gray-500 font-normal" htmlFor="check">
                    By submitting this form you agree to our terms and conditions.
                    </Label>
                    </div>
                    <Button type="submit" className="self-start text-base font-bold dark:bg-[#0b0a12] dark:text-white dark:hover:bg-gray-700">Send Message</Button>   
                    </form>
                    <span className='absolute bottom-0 right-0 translate-x-2 translate-y-[25%]'>
                    <svg className="fill-yellow-600 dark:fill-yellow-500" width="104.2px" height="95.2px">
							<circle cx="2.6" cy="92.6" r="2.6" />
							<circle cx="2.6" cy="77.6" r="2.6" />
							<circle cx="2.6" cy="62.6" r="2.6" />
							<circle cx="2.6" cy="47.6" r="2.6" />
							<circle cx="2.6" cy="32.6" r="2.6" />
							<circle cx="2.6" cy="17.6" r="2.6" />
							<circle cx="2.6" cy="2.6" r="2.6" />
							<circle cx="22.4" cy="92.6" r="2.6" />
							<circle cx="22.4" cy="77.6" r="2.6" />
							<circle cx="22.4" cy="62.6" r="2.6" />
							<circle cx="22.4" cy="47.6" r="2.6" />
							<circle cx="22.4" cy="32.6" r="2.6" />
							<circle cx="22.4" cy="17.6" r="2.6" />
							<circle cx="22.4" cy="2.6" r="2.6" />
							<circle cx="42.2" cy="92.6" r="2.6" />
							<circle cx="42.2" cy="77.6" r="2.6" />
							<circle cx="42.2" cy="62.6" r="2.6" />
							<circle cx="42.2" cy="47.6" r="2.6" />
							<circle cx="42.2" cy="32.6" r="2.6" />
							<circle cx="42.2" cy="17.6" r="2.6" />
							<circle cx="42.2" cy="2.6" r="2.6" />
							<circle cx="62" cy="92.6" r="2.6" />
							<circle cx="62" cy="77.6" r="2.6" />
							<circle cx="62" cy="62.6" r="2.6" />
							<circle cx="62" cy="47.6" r="2.6" />
							<circle cx="62" cy="32.6" r="2.6" />
							<circle cx="62" cy="17.6" r="2.6" />
							<circle cx="62" cy="2.6" r="2.6" />
							<circle cx="81.8" cy="92.6" r="2.6" />
							<circle cx="81.8" cy="77.6" r="2.6" />
							<circle cx="81.8" cy="62.6" r="2.6" />
							<circle cx="81.8" cy="47.6" r="2.6" />
							<circle cx="81.8" cy="32.6" r="2.6" />
							<circle cx="81.8" cy="17.6" r="2.6" />
							<circle cx="81.8" cy="2.6" r="2.6" />
							<circle cx="101.7" cy="92.6" r="2.6" />
							<circle cx="101.7" cy="77.6" r="2.6" />
							<circle cx="101.7" cy="62.6" r="2.6" />
							<circle cx="101.7" cy="47.6" r="2.6" />
							<circle cx="101.7" cy="32.6" r="2.6" />
							<circle cx="101.7" cy="17.6" r="2.6" />
							<circle cx="101.7" cy="2.6" r="2.6" />
						</svg>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default FormSectionContact