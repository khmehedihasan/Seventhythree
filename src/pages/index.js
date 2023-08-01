import Link from "next/link";
import Head from 'next/head';
import { useState } from "react";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

export default function Home() {

  const [up, setUp] = useState("")


  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200&display=swap" rel="stylesheet"></link>
      </Head>
      <div className=" ">
{/* //------------------------------------ home start------------------------------------------- */}

        <div className=' mx-auto'>
          <div className=" w-full h-screen  flex flex-col items-center justify-center bg-[url('../images/video.gif')] bg2 bg-cover bg-center">

            <nav className=" w-[1280PX] h-[80px] absolute top-0  flex items-center justify-between">
              <div className=" ">
                <svg width="99" height="35" viewBox="0 0 99 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M99 8.60789V0H0V8.60789H49.5L26.302 35H99V26.3921L45.6609 26.2297L49.5 21.9258H99V13.1555H57.1782L61.1807 8.60789H99Z" fill="white"/>
                </svg>
              </div>
              <div className=" w-[250px] flex justify-between">
                <button className=" text-[24px] text-slate-300 hover:text-white" >About</button>
                <button className=" text-[24px] text-slate-300 hover:text-white" >Service</button>
                <button className=" text-[24px] text-slate-300 hover:text-white" >Team</button>
              </div>
            </nav>


            <h1 className=" text-[130px] font-thin text-white">Seventhythree</h1>
            <h3 className=" text-[24px] mt-2 font-thin text-white">Venture Capital Specializing in Web3, Blockchain, and Crypto-Asset Management</h3>
            <button onMouseLeave={()=>setUp("down")} onMouseEnter={()=>setUp("up")} className=" h-16  flex gap-3 items-center justify-center mt-16">
              <div className="h-16 overflow-hidden">
                <div className={` flex flex-col ${up}`}>
                  <span className=" text-[40px] font-thin text-white">For investors </span>
                  <span className=" text-[40px] font-thin text-white">For investors </span>
                </div>
              </div>
              <svg width="35" height="12" viewBox="0 0 35 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 6L25 0.226497V11.7735L35 6ZM0 7H26V5H0V7Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>

        {/* //--------------------------------------- home end------------------------------------------ */}

        {/* //--------------------------------------- about start------------------------------------------ */}
        <div className=" py-[100px]  bg1 bg-right">
          <div className=" w-[1280px] mx-auto flex flex-col gap-4 text-[24px] text-slate-200">
            <div className=" flex gap-4 justify-between">
              <div>
                Welcome to Seventhythree, a <span className=" text-white font-extrabold">leading</span> venture capital firm specializing in investment services for web and blockchain projects, as well as offering crypto-asset management services for professional and institutional investors, and market-making services for tokens and CEX exchanges
              </div>
              <div className=" w-[250px] shrink-0 text-[60px] text-white font-bold">
                <span>About Us</span>
              </div>
            </div>
            <div className=" flex gap-4">
              <div className=" flex gap-4">
                <div>At Seventhythree, we are passionate about leveraging the power of technology to drive innovation and growth in the digital space. With our <span className=" text-white font-extrabold">deep expertise</span> in blockchain technology and a keen eye for promising investment opportunities, <span className=" text-white font-extrabold">we strive</span> to connect visionary entrepreneurs with the capital they need to bring their projects to life.</div>

                <div>Our dedicated team of experienced <span className=" text-white font-extrabold">professionals</span> combines financial acumen with a comprehensive understanding of the ever-evolving digital landscape. We carefully evaluate projects, conducting thorough due diligence to identify those with the <span className=" text-white font-extrabold">highest potential for success</span>. By leveraging our extensive network and industry insights, we provide strategic guidance and support to help our portfolio companies achieve sustainable growth </div>
              </div>

              <div className=" flex flex-col gap-4">
                <div>
                <span className=" text-white font-extrabold">Transparency</span>, <span className=" text-white font-extrabold">integrity</span> and <span className=" text-white font-extrabold">professionalism</span> are the pillars of our approach. We believe in establishing long-term partnerships based on trust and mutual success. Our <span className=" text-white font-extrabold">commitment to excellence</span> is reflected in our rigorous risk management practices, ensuring the security and protection of our investors' assets  
            
                </div>
                <div className=" flex gap-4">
                  <div>Whether you are an individual investor, a professional, or an institution seeking to navigate the dynamic world of web and blockchain investments, Seventhythree is here to guide you. We offer <span className=" text-white font-extrabold">tailored solutions</span> designed to meet your specific needs, backed by a track record of delivering exceptional results </div>
                  <div> <span className=" text-white font-extrabold">Join us</span> on this exciting journey as we explore the boundless possibilities of the digital economy. Contact us today to learn more about how <span className=" text-white font-extrabold">Seventhythree can help</span> you achieve your investment goals</div>
                </div>
              </div>

            </div>
          </div>        
        </div>
        {/* //--------------------------------------- about end------------------------------------------ */}



        {/* //--------------------------------------- Team end------------------------------------------ */}


        <div className=" w-full h-full py-[100px] flex flex-col items-center justify-center bg3 bg-cover bg-center">
          <div className=" w-[1280px] mx-auto">
            <h1 className=" text-center text-white text-[50px] font-bold">Team</h1>
            <ScrollingCarousel>
              <div className=" w-[600px] h-[700px] bg-slate-400"></div>
              <div className=" w-[600px] h-[700px] bg-red-400"></div>
              <div className=" w-[600px] h-[700px] bg-blue-400"></div>
              <div className=" w-[600px] h-[700px] bg-green-400"></div>
              <div className=" w-[600px] h-[700px] bg-blue-400"></div>
              <div className=" w-[600px] h-[700px] bg-green-400"></div>
              <div className=" w-[600px] h-[700px] bg-slate-400"></div>

            </ScrollingCarousel>

          </div>
        </div>



        {/* //--------------------------------------- Team end------------------------------------------ */}
      </div>
    </>
  )
}
