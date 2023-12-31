import Link from "next/link";
import { useState } from "react";

function About(){
    const [invest, setInvest] = useState("Invest with Seventhythree");
    const [show, setShow] = useState("hide");
    const [up, setUp] = useState("");
    const [up2, setUp2] = useState("");
    const [spn, setSpn] = useState("");

    function set(){
        if(show == "show"){
            setShow("hide");
        }else{
            setShow("show")
        }
    }

    return(
        <div className=' h-full xl:h-screen mx-auto'>
            <div className=" w-full h-full py-[100px] flex flex-col items-center justify-center bg4 bg-cover bg-center">
                <nav className=" w-[300px] md:w-[700px] xl:w-[1280PX] h-[80px] absolute top-0  flex items-center justify-between">
                    <div className=" ">
                        <svg className=" w-20 md:w-40" width="99" height="35" viewBox="0 0 99 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M99 8.60789V0H0V8.60789H49.5L26.302 35H99V26.3921L45.6609 26.2297L49.5 21.9258H99V13.1555H57.1782L61.1807 8.60789H99Z" fill="white"/>
                        </svg>
                    </div>
                    <div className=" xl:w-[250px] flex justify-between gap-2">
                        <button className=" text-[18px] md:text-[24px] text-slate-300 hover:text-white" >About</button>
                        <button className=" text-[18px] md:text-[24px] text-slate-300 hover:text-white" >Service</button>
                        <button className=" text-[18px] md:text-[24px] text-slate-300 hover:text-white" >Team</button>
                    </div>
                </nav>
                <div className=" w-[300px] md:w-[700px] xl:w-[1280px] h-full xl:h-[700px] py-[60px] xl:py-[200px] mx-auto text-white relative">
                    <Link href="/" onMouseEnter={()=>setSpn("spn1")} onMouseLeave={()=>setSpn("spn2")} className=" absolute top-0 xl:top-28 right-5 cursor-pointer">
                        <svg className={`${spn} hidden xl:block`} width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M54 54L1 1M1 54L54 1" stroke="white"/>
                        </svg>
                        <svg className={`${spn} xl:hidden font-bold`} width="44" height="44" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M54 54L1 1M1 54L54 1" stroke="white"/>
                        </svg>
                    </Link>
                    <div className=" w-full h-full flex flex-col xl:flex-row gap-6 xl:gap-10">
                        <div className=" xl:w-[350px] h-full flex flex-col ">
                            <div>
                                <span className=" text-[35px] md:text-[50px] xl:text-[60px] font-bold">Contact us </span>
                                <span className=" text-[20px] md:text-[26px] xl:text-[34px]"> Fill the form</span>
                            </div>
                            <div className=" text-[18px] xl:text-[20px] text-slate-300">And we will get back to you as soon as we can</div>
                        </div>
                        <div className=" w-full h-full flex flex-col gap-6 xl:gap-10">
                            <div className=" flex flex-col">
                                <label className=" text-[20px] xl:text-[26px]" htmlFor="company">Name of your company*</label>
                                <input className=" w-full h-10 text-[18px] md:text-[20px] text-slate-400 placeholder:text-slate-400 border-b-2 border-slate-50 outline-none bg-transparent" type="text" name="company" placeholder="Enter your company name" id="company" />
                            </div>
                            <div className=" flex flex-col">
                                <label className=" text-[20px] xl:text-[26px]" htmlFor="email">Email*</label>
                                <input className=" w-full h-10 text-[18px] md:text-[20px] text-slate-400 placeholder:text-slate-400 border-b-2 border-slate-50 outline-none bg-transparent" type="email" name="email" placeholder="Enter your email" id="email" />
                            </div>
                            <div className=" flex flex-col relative">
                                <div onClick={set} className=" text-[20px] flex items-center cursor-pointer">
                                    <span className=" pr-2">{invest}</span>
                                    <div>
                                        <svg className={`${show =="show"?"hide":"show"}`} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L10 9L18 1" stroke="white"/>
                                        </svg>
                                        <svg className={`${show}`} width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 1L11 9L19 1" stroke="white"/>
                                            <path d="M2 1L11 9L19 1H2Z" fill="white" stroke="white"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`${show} w-max -ml-5 p-5 box-content pop1 rounded-sm absolute top-6 left-0 `}>
                                    <div onClick={()=>{ setInvest("Invest with Seventhythree"); setShow("hide")}} className=" text-[20px] cursor-pointer" >Invest with Seventhythree</div>
                                    <div onClick={()=>{ setInvest("Common party"); setShow("hide")}} className=" text-[20px] cursor-pointer mt-2">Common party</div>
                                    <div onClick={()=>{ setInvest("Other"); setShow("hide")}} className=" text-[20px] cursor-pointer mt-2">Other</div>
                                </div>
                            </div>
                            <div className=" flex flex-col">
                                <label className=" text-[20px] xl:text-[26px]" htmlFor="message">You message</label>
                                <input className=" w-full h-10 text-[18px] md:text-[20px] text-slate-400 placeholder:text-slate-400 border-b-2 border-slate-50 outline-none bg-transparent" type="text" name="message" placeholder="Enter your message" id="message" />
                            </div>
                            <div>
                                <button href="/contact-us" onMouseLeave={()=>setUp("down")} onMouseEnter={()=>setUp("up")} className=" h-16  flex gap-3 items-center justify-center mt-6 float-right">
                                    <div className=" h-8 xl:h-16 overflow-hidden">
                                        <div className={` flex flex-col ${up}`}>
                                        <span className=" text-[24px] xl:text-[40px] font-thin text-white">Send </span>
                                        <span className=" text-[24px] xl:text-[40px] font-thin text-white">Send </span>
                                        </div>
                                    </div>
                                    <svg width="35" height="12" viewBox="0 0 35 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35 6L25 0.226497V11.7735L35 6ZM0 7H26V5H0V7Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-[300px] xl:w-[450px] h-[220px] xl:h-[300px] bg3 absolute top-[35%] text-white flex flex-col items-center justify-center">
                    <div className=" text-[20px] xl:text-[28px]">Form submitted successfully</div >
                    <Link href="/" onMouseLeave={()=>setUp2("down")} onMouseEnter={()=>setUp2("up")} className=" h-16  flex gap-3 items-center justify-center mt-6 float-right">
                        <div className=" h-8 xl:h-16 overflow-hidden">
                            <div className={` flex flex-col ${up2}`}>
                            <span className=" text-[24px] xl:text-[40px] font-thin text-white">Come back </span>
                            <span className=" text-[24px] xl:text-[40px] font-thin text-white">Come back </span>
                            </div>
                        </div>
                        <svg width="35" height="12" viewBox="0 0 35 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35 6L25 0.226497V11.7735L35 6ZM0 7H26V5H0V7Z" fill="white"/>
                        </svg>
                    </Link>
                </div>
            </div>
          </div>
    )
}

export default About;