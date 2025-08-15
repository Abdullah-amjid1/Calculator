import React from 'react'
import { X } from 'lucide-react';

export function openModel() {
    const model = document.querySelector('form');
    model.classList.remove('hidden');
}

export default function Model() 
{
    function closeModel() 
    {
        const model = document.querySelector('form');
        model.classList.add('hidden');
        
    }
    function openSection2()
    {
        const section1 = document.getElementById("section");
        const section2 = document.getElementById("section2");
        section1.classList.add("hidden");
        section2.classList.remove("hidden");
    }
    function openSection3()
    {
        const section1 = document.getElementById("section2");
        const section2 = document.getElementById("section3");
        section1.classList.add("hidden");
        section2.classList.remove("hidden");
    }    
    function openSection4()
    {
        const section1 = document.getElementById("section3");
        const section2 = document.getElementById("section4");
        section1.classList.add("hidden");
        section2.classList.remove("hidden");
    }

    function openSection5()
    {
        const section1 = document.getElementById("section4");
        const section2 = document.getElementById("section5");
        const close = document.getElementById("Cancel");
        close.style.color = "white";
        const form = document.querySelector("form")
        section1.classList.add("hidden");
        section2.classList.remove("hidden");
        form.style.backgroundColor = "#f06b6d";

    }
    return (
    <>
    <style>
    {`
        form {
            transition: background-color 0.3s ease;
        }
        
    `}
    </style>
    <form action="" className='w-[400px] h-[580px]  absolute right-8 bottom-8 rounded-3xl px-6 py-5 hidden shadow-[0_0_20px_0_rgba(0,0,0,0.15)] bg-white' >
        <div className='w-full flex justify-end'>
            <button type='button' className='flex cursor-pointer'  onClick={closeModel}><X id='Cancel' size={20}/></button>
        </div>
        <section className='' id='section'>
            <div>
                <p className='font-bold text-xl text-[#170F49]'>Chose Assessment Type</p>
                <p className='text-[#170F49]'>(Always consult your doctor before administering any medicine.)</p>
            </div>
            <div className='w-full ' >
                <label className='font-semibold text-[#170F49]'>What would you like to assess today?</label>
                <select name="" id="" placeholder='Enter your Answer' className='w-full rounded-2xl bg-white px-2 py-4 mt-2  focus:outline-none border border-zinc-300' >
                    <option value="">Select Condition</option>
                    <option value="">Heart Disease</option>
                    <option value="">Stroke</option>
                    <option value="">Diabetes</option>
                    <option value="">Kidney Disease</option>
                    <option value="">Obesity</option>
                    <option value="">Hypertension</option>
                    <option value="">Chronic Pain</option>
                    <option value="">Respiratory Disease</option>
                    <option value="">Blood Disorder</option>
                    <option value="">Skin Conditions</option>
                </select>
            </div>
            <div className='w-full flex justify-end mt-67'>
                <button type='button' className='px-14 py-4 rounded-xl bg-[#f06b6d] text-white font-semibold cursor-pointer' id='Close' onClick={openSection2}>Next</button>
            </div>
        </section>
        <section className='hidden' id='section2'>
            <div>
                <p className='text-xl font-bold text-[#170F49]'>Let’s evaluate your 10-year risk for heart disease.</p>
            </div>
            <div className='mt-3'>
                <label className='flex font-semibold text-lg text-[#170F49]'>Age<p className='font-bold text-red-600'>*</p></label>
                <input type="text" placeholder='Enter Age' className='w-full rounded-2xl bg-white px-4 py-4 mt-2  focus:outline-none border border-zinc-300 my-2' />

                <label className='flex font-semibold text-lg text-[#170F49]' >Weight<p className='font-bold text-red-600'>*</p></label>
               <div className='flex'>
                 <input type="text" placeholder='Enter Weight' className='w-full rounded-l-2xl bg-white px-4 py-4 mt-2  focus:outline-none border border-zinc-300 my-2' />

                <select name="" id="" className=' rounded-r-2xl bg-white px-4 py-4 mt-2  focus:outline-none border border-zinc-300 my-2 text-zinc-500'>
                    <option value="">Kg</option>
                </select>
               </div>

                <label className='flex font-semibold text-lg text-[#170F49]'>Gender</label>
                <select name="" id="" className='w-full rounded-2xl bg-white px-4 py-4 mt-2  focus:outline-none border border-zinc-300 my-2 text-zinc-500' >
                    <option value="">Select Gender</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                </select>
            </div>
            <div className='w-full flex justify-end mt-15'>
                <button type='button' className='px-14 py-4 rounded-xl bg-[#f06b6d] text-white font-semibold cursor-pointer' id='Close' onClick={openSection3}>Next</button>
            </div>
        </section>
        <section className='hidden' id='section3'>
            <div> 
                <p className='text-xl font-bold text-[#170F49]'>Let’s evaluate your 10-year risk for heart disease.</p>
            </div>
            <div className='mt-3'>

                <label className='flex font-medium text-[14px] text-[#170F49]' >Do you smoke cigarettes?</label>
                <select name="" id="" className='w-full rounded-2xl bg-white px-4 py-4 mt-2  focus:outline-none border border-zinc-300 my-2 text-zinc-500'>
                    <option value="">Select Y/N</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>

                <label className='flex font-medium text-[14px] text-[#170F49]'>What is your systolic blood pressure?</label>
                <input type="text" name="" id="" placeholder='mmHg' className='w-full rounded-2xl bg-white px-4 py-4 mt-2  focus:outline-none border border-zinc-300 my-2'/>

                <label className='flex font-medium text-[14px] text-[#170F49]'>Are you currently on blood pressure medication?</label>
                <select name="" id="" className='w-full rounded-2xl bg-white px-4 py-4 mt-2  focus:outline-none border border-zinc-300 my-2 text-zinc-500'>
                    <option value="">Select Y/N</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>

            </div>
            <div className='w-full flex justify-end mt-21'>
                <button type='button' className='px-14 py-4 rounded-xl bg-[#f06b6d] text-white font-semibold cursor-pointer' id='Close' onClick={openSection4}>Next</button>
            </div>
        </section>
        <section className='hidden' id='section4'>
            <div> 
                <p className='text-xl font-bold text-[#170F49]'>Let’s evaluate your 10-year risk for heart disease.</p>
            </div>
            <div className='mt-3'>

                <label className='flex font-medium text-[14px] text-[#170F49]'>What is your total cholesterol level?</label>
                <input type="text" name="" id="" placeholder='mg/dL' className='w-full rounded-2xl bg-white px-4 py-4 mt-2  focus:outline-none border border-zinc-300 my-2'/>

                <label className='flex font-medium text-[14px] text-[#170F49]'>What is your HDL (good) cholesterol level?</label>
                <input type="text" name="" id="" placeholder='mg/dL' className='w-full rounded-2xl bg-white px-4 py-4 mt-2  focus:outline-none border border-zinc-300 my-2'/>

                <label className='flex font-medium text-[14px] text-[#170F49]'>Do you have diabetes?</label>
                <select name="" id="" className='w-full rounded-2xl bg-white px-4 py-4 mt-2  focus:outline-none border border-zinc-300 my-2 text-zinc-500'>
                    <option value="">Select Y/N</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>

            </div>
            <div className='w-full flex justify-end mt-21'>
                <button type='button' className='px-14 py-4 rounded-xl bg-[#f06b6d] text-white font-semibold cursor-pointer' id='Close' onClick={openSection5}>Estimate</button>
            </div>
        </section>
        <section className='hidden' id='section5'>
            <div className='w-full h-[216px] bg-[#ffd1d2] rounded-2xl mt-2 p-3'>
                <div className='flex flex-col gap-2'>
                    <p className='text-xl font-bold text-[#170F49]'>Result</p>
                    <p className='text-lg text-[#170F49] font-medium'>Accourding to your input</p>
                </div>
                <div className='w-full my-3'>
                    <div className='bg-white text-center py-5 rounded-xl border border-[#170F49]'>
                        <p className='font-bold text-[#170F49]'>Estimated 10-year heart disease risk: 9%</p>
                    </div>
                </div>
                <div>
                    <p className='text-lg text-[#170F49] font-medium'>This is  Considered borderline risk.</p>
                </div>
            </div>
             <div className='w-full flex justify-end mt-55 '>
                <button type='button' className='px-8 py-4 font-bold rounded-xl bg-white text-[#170F49]  cursor-pointer' id='Close' >Estimate Again</button>
            </div>
        </section>

    </form>
    </>
  )
}
