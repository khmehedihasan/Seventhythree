import Link from "next/link";
import Head from 'next/head';
import { useState } from "react";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import Image from 'next/image'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import linkedin from '../images/linkedin.png'

export default function Home() {

  const [up, setUp] = useState("");
  const [btn1, setBtn1] = useState("");
  const [btn2, setBtn2] = useState("");
  const [slide, setSlide] = useState("slide1");
  const [bar, setBar] = useState("bar1");
  const [count, setCount] = useState(1)


function nxt(){
  if(count == 1){
    setSlide("slide2");
    setBar("bar2");
    setCount(2)
  }

  if(count == 2){
    setSlide("slide3");
    setBar("bar3");
    setCount(3)
  }

}


function prev(){
  if(count == 3){
    setSlide("slide2");
    setBar("bar2");
    setCount(2)
  }

  if(count == 2){
    setSlide("slide1");
    setBar("bar1");
    setCount(1)
  }

}


  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200&display=swap" rel="stylesheet"></link>
      </Head>
      <div className=" ">
{/* //------------------------------------ home start------------------------------------------- */}

        <div className=' mx-auto'>
          <div className=" w-full h-screen  flex flex-col items-center justify-center bg-[url('../images/video.gif')] bg2 bg-cover bg-center">

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


            <h1 className=" text-[50px] md:text-[90px] xl:text-[130px] font-thin text-white">Seventhythree</h1>
            <h3 className=" w-[80%] md:w-[60%] xl:w-full text-center text-[18px] md:text-[24px] mt-2 font-thin text-white">Venture Capital Specializing in Web3, Blockchain, and Crypto-Asset Management</h3>
            <Link href="/contact-us" onMouseLeave={()=>setUp("down")} onMouseEnter={()=>setUp("up")} className=" h-16  flex gap-3 items-center justify-center mt-8 md:mt-16">
              <div className=" h-9 md:h-16 overflow-hidden">
                <div className={` flex flex-col ${up}`}>
                  <span className=" text-[24px] md:text-[40px] font-thin text-white">For investors </span>
                  <span className=" text-[24px] md:text-[40px] font-thin text-white">For investors </span>
                </div>
              </div>
              <svg width="35" height="12" viewBox="0 0 35 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 6L25 0.226497V11.7735L35 6ZM0 7H26V5H0V7Z" fill="white"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* //--------------------------------------- home end------------------------------------------ */}

        {/* //--------------------------------------- about start------------------------------------------ */}
        <div className=" py-[100px]  bg1 bg-right">
          <div className=" md:w-[700px] xl:w-[1280px] mx-auto flex flex-col gap-4 p-4 md:p-0 text-[18px] md:text-[24px] text-slate-200">
            <div className=" flex flex-col-reverse xl:flex-row gap-4 items-end xl:justify-between">
              <div>
                Welcome to Seventhythree, a <span className=" text-white font-extrabold">leading</span> venture capital firm specializing in investment services for web and blockchain projects, as well as offering crypto-asset management services for professional and institutional investors, and market-making services for tokens and CEX exchanges
              </div>
              <div className=" w-[250px] shrink-0 text-[40px] md:text-[60px] text-white font-bold">
                <span>About Us</span>
              </div>
            </div>
            <div className=" flex flex-col xl:flex-row gap-4">
              <div className=" flex flex-col md:flex-row gap-4">
                <div>At Seventhythree, we are passionate about leveraging the power of technology to drive innovation and growth in the digital space. With our <span className=" text-white font-extrabold">deep expertise</span> in blockchain technology and a keen eye for promising investment opportunities, <span className=" text-white font-extrabold">we strive</span> to connect visionary entrepreneurs with the capital they need to bring their projects to life.</div>

                <div>Our dedicated team of experienced <span className=" text-white font-extrabold">professionals</span> combines financial acumen with a comprehensive understanding of the ever-evolving digital landscape. We carefully evaluate projects, conducting thorough due diligence to identify those with the <span className=" text-white font-extrabold">highest potential for success</span>. By leveraging our extensive network and industry insights, we provide strategic guidance and support to help our portfolio companies achieve sustainable growth </div>
              </div>

              <div className=" flex flex-col gap-4">
                <div>
                <span className=" text-white font-extrabold">Transparency</span>, <span className=" text-white font-extrabold">integrity</span> and <span className=" text-white font-extrabold">professionalism</span> are the pillars of our approach. We believe in establishing long-term partnerships based on trust and mutual success. Our <span className=" text-white font-extrabold">commitment to excellence</span> is reflected in our rigorous risk management practices, ensuring the security and protection of our investors' assets  
            
                </div>
                <div className=" flex flex-col md:flex-row gap-4">
                  <div>Whether you are an individual investor, a professional, or an institution seeking to navigate the dynamic world of web and blockchain investments, Seventhythree is here to guide you. We offer <span className=" text-white font-extrabold">tailored solutions</span> designed to meet your specific needs, backed by a track record of delivering exceptional results </div>
                  <div> <span className=" text-white font-extrabold">Join us</span> on this exciting journey as we explore the boundless possibilities of the digital economy. Contact us today to learn more about how <span className=" text-white font-extrabold">Seventhythree can help</span> you achieve your investment goals</div>
                </div>
              </div>

            </div>
          </div>        
        </div>
        {/* //--------------------------------------- about end------------------------------------------ */}



        {/* //--------------------------------------- Team end------------------------------------------ */}


        <div className=" w-full h-full py-[100px] flex flex-col items-center justify-center bg3 bg-cover bg-left">
          <div className=" w-[300px] md:w-[700px] xl:w-[1280px] mx-auto">
            <h1 className=" text-center text-white text-[50px] md:text-[60px] font-bold">Team</h1>
            <ScrollingCarousel >
              <div className=" w-[300px] xl:w-[700px] h-[500px] md:h-[700px] px-12 xl:px-20 flex flex-col gap-4 md:gap-7 items-center mt-14 xl:mt-28">
                <div className=" w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] bg-[url('../images/person1.jpg')] bg-cover relative">
                  <div className=" w-[60px] h-[12px] xl:w-[100px] xl:h-[20px] absolute bottom-[2px] right-0 bg-[url('../images/linkedin.png')] bg-cover "></div>
                </div>
                <h2 className=" text-center text-white text-[30px] xl:text-[40px] font-bold">Andrea Santini</h2>
                <h3 className=" text-center text-white text-[20px] md:text-[22px] xl:text-[30px]">Ceo, Founder and Analyst</h3>
                <h4 className=" text-center text-white text-[14px] md:text-[18px] xl:text-[20px]">He has extensive experience in financial market analysis</h4>
              </div>

              <div className=" w-[300px] xl:w-[700px] h-[500px] md:h-[700px] px-12 xl:px-20 flex flex-col gap-4 md:gap-7 items-center mt-14 xl:mt-28">
                <div className=" w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] bg-[url('../images/person2.jpg')] bg-cover relative">
                  <div className=" w-[60px] h-[12px] xl:w-[100px] xl:h-[20px] absolute bottom-[2px] right-0 bg-[url('../images/linkedin.png')] bg-cover "></div>
                </div>
                <h2 className=" text-center text-white text-[30px] xl:text-[40px] font-bold">Marco Di Maggio</h2>
                <h3 className=" text-center text-white text-[20px] md:text-[22px] xl:text-[30px]">Chief Blockchain and Fintech, Crypto and Web3 laboratory at Harward</h3>
                <h4 className=" text-center text-white text-[14px] md:text-[18px] xl:text-[20px]">He is the Director of the Fintech, Crypto and Web3 laboratory at Harvard</h4>
              </div>

              <div className=" w-[300px] xl:w-[700px] h-[500px] md:h-[700px] px-12 xl:px-20 flex flex-col gap-4 md:gap-7 items-center mt-14 xl:mt-28">
                <div className=" w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] bg-[url('../images/person3.jpeg')] bg-cover relative">
                  <div className=" w-[60px] h-[12px] xl:w-[100px] xl:h-[20px] absolute bottom-[2px] right-0 bg-[url('../images/linkedin.png')] bg-cover "></div>
                </div>
                <h2 className=" text-center text-white text-[30px] xl:text-[40px] font-bold">Lucrezia Menoncello</h2>
                <h3 className=" text-center text-white text-[20px] md:text-[22px] xl:text-[30px]">Blockchain investment strategy manager</h3>
                <h4 className=" text-center text-white text-[14px] md:text-[18px] xl:text-[20px]">Investment strategy in Bitpanda Forbes under30</h4>
              </div>

              <div className=" w-[300px] xl:w-[700px] h-[500px] md:h-[700px] px-12 xl:px-20 flex flex-col gap-4 md:gap-7 items-center mt-14 xl:mt-28">
                <div className=" w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] bg-[url('../images/person4.jpg')] bg-cover relative">
                  <div className=" w-[60px] h-[12px] xl:w-[100px] xl:h-[20px] absolute bottom-[2px] right-0 bg-[url('../images/linkedin.png')] bg-cover "></div>
                </div>
                <h2 className=" text-center text-white text-[30px] xl:text-[40px] font-bold">Michele Miglio</h2>
                <h3 className=" text-center text-white text-[20px] md:text-[22px] xl:text-[30px]">Head of Growth</h3>
                <h4 className=" text-center text-white text-[14px] md:text-[18px] xl:text-[20px]">CEO Yggdrisil Capital Trust Data analisys Green techanalisys</h4>
              </div>
              <div className=" w-[300px] xl:w-[700px] h-[500px] md:h-[700px] px-12 xl:px-20 flex flex-col gap-4 md:gap-7 items-center mt-14 xl:mt-28">
                <div className=" w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] bg-[url('../images/person5.jpg')] bg-cover relative">
                  <div className=" w-[60px] h-[12px] xl:w-[100px] xl:h-[20px] absolute bottom-[2px] right-0 bg-[url('../images/linkedin.png')] bg-cover "></div>
                </div>
                <h2 className=" text-center text-white text-[30px] xl:text-[40px] font-bold">Matteo Arnaboldi</h2>
                <h3 className=" text-center text-white text-[20px] md:text-[22px] xl:text-[30px]">CMO</h3>
                <h4 className=" text-center text-white text-[14px] md:text-[18px] xl:text-[20px]">Marketing Consultant Expert in AI and Prompts</h4>
              </div>
              <div className=" w-[300px] xl:w-[700px] h-[500px] md:h-[700px] px-12 xl:px-20 flex flex-col gap-4 md:gap-7 items-center mt-14 xl:mt-28">
                <div className=" w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] bg-[url('../images/person6.jpeg')] bg-cover relative">
                  <div className=" w-[60px] h-[12px] xl:w-[100px] xl:h-[20px] absolute bottom-[2px] right-0 bg-[url('../images/linkedin.png')] bg-cover "></div>
                </div>
                <h2 className=" text-center text-white text-[30px] xl:text-[40px] font-bold">Omar Malik</h2>
                <h3 className=" text-center text-white text-[20px] md:text-[22px] xl:text-[30px]">Creative Director</h3>
                <h4 className=" text-center text-white text-[14px] md:text-[18px] xl:text-[20px]">CEO of Ciambelle Digital CEO of Moverai</h4>
              </div>
              <div className=" w-[300px] xl:w-[700px] h-[500px] md:h-[700px] px-12 xl:px-20 flex flex-col gap-4 md:gap-7 items-center mt-14 xl:mt-28">
                <div className=" w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] bg-[url('../images/person7.jpg')] bg-cover relative">
                  <div className=" w-[60px] h-[12px] xl:w-[100px] xl:h-[20px] absolute bottom-[2px] right-0 bg-[url('../images/linkedin.png')] bg-cover "></div>
                </div>
                <h2 className=" text-center text-white text-[30px] xl:text-[40px] font-bold">Tommaso Macchi</h2>
                <h3 className=" text-center text-white text-[20px] md:text-[22px] xl:text-[30px]">Analyst and Startup Selection Manager</h3>
                <h4 className=" text-center text-white text-[14px] md:text-[18px] xl:text-[20px]">Project Analyst Freelance Project Analyst Carboneble Business Consultant in AceAnalysis</h4>
              </div>

              <div className=" w-[300px] xl:w-[700px] h-[500px] md:h-[700px] px-12 xl:px-20 flex flex-col gap-4 md:gap-7 items-center mt-14 xl:mt-28">
                <div className=" w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] bg-[url('../images/person8.jpg')] bg-cover relative">
                  <div className=" w-[60px] h-[12px] xl:w-[100px] xl:h-[20px] absolute bottom-[2px] right-0 bg-[url('../images/linkedin.png')] bg-cover "></div>
                </div>
                <h2 className=" text-center text-white text-[30px] xl:text-[40px] font-bold">Ingan</h2>
                <h3 className=" text-center text-white text-[20px] md:text-[22px] xl:text-[30px]">Artificial Intelligence</h3>
                <h4 className=" text-center text-white text-[14px] md:text-[18px] xl:text-[20px]">Artificial intelligence for project and volumetric data analysis</h4>
              </div>
              

            </ScrollingCarousel>

          </div>
        </div>

        {/* //--------------------------------------- Team end------------------------------------------ */}

        {/* //--------------------------------------- Service start------------------------------------------ */}
        <div className=" w-full h-full py-[100px] bg4 bg-cover bg-right">
          <div className=" w-[300px] md:w-[700px] xl:w-[1280px] mx-auto flex flex-col xl:flex-row">
            {/* //-----0-------- */}
            <div className=" hidden w-[420px] h-[810px] border border-slate-400 xl:flex flex-col">
              <div onClick={nxt} onMouseLeave={()=>setBtn1("btn1out")} onMouseEnter={()=>setBtn1("btn1in")} className=" h-[420px] cursor-pointer flex items-center justify-center relative overflow-hidden">
                <svg width="40" height="74" viewBox="0 0 40 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L38 36L1 73" stroke="white" strokeWidth="2"/>
                </svg>
                <div className={` w-full h-[420px] absolute top-0 left-0 btn1 mt-[420px] ${btn1}`}></div>
                <div className={` w-[30px] h-[30px] absolute top-2 left-2 text-white text-[20px]`}>0{count}</div>
              </div>
              <div onClick={prev} onMouseLeave={()=>setBtn2("btn2out")} onMouseEnter={()=>setBtn2("btn2in")} className=" h-[420px] cursor-pointer flex items-center justify-center relative overflow-hidden">
                <svg width="40" height="74" viewBox="0 0 40 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39 73L2 38L39 1" stroke="white" strokeWidth="2"/>
                </svg>
                <div className={` w-full h-[420px] absolute top-0 left-0 btn1 -mt-[420px] ${btn2}`}></div>
              </div>
              <div className={` ${bar} h-5 bg-white`}></div>
            </div>
            {/* //-------0--------- */}
            <div className=" w-[300px] md:w-[700px]  xl:w-[1280px] mx-auto overflow-hidden">
              <div className={`w-[4200px] ${slide}`}>
                {/* //----------- */}
                <div className=" w-[300px] md:w-[700px] xl:w-[965px] h-full md:h-[650px] xl:h-[810px] float-left text-white py-10 px-4 flex flex-col gap-4 xl:gap-10">
                  <div className=" text-[50px] md:text-[60px] xl:text-[80px] font-bold">Service</div>
                  <div className=" w-[95%] my-5 md:my-0 md:w-[60%] xl:w-[50%] text-[20px] md:text-[26px] xl:text-[34px] font-bold">Investment Services for Web3 and Blockchain Projects</div>
                  <div className=" flex flex-col md:flex-row gap-10 md:gap-4">
                    <div className=" flex flex-col">
                      <div className=" h-[60px] md:h-[90px] xl:h-[120px] text-[22px] xl:text-[28px]">Project Evaluation </div>
                      <div className=" text-[16px] xl:text-[20px]">Our team of experts conducts in-depth analysis and due diligence on web and blockchain projects, identifying investment opportunities with high growth potential</div>
                    </div>
                    <div>
                      <div className=" h-[60px] md:h-[90px] xl:h-[120px] text-[22px] xl:text-[28px]">Funding and Capital Injection</div>
                      <div className=" text-[16px] xl:text-[20px]">We provide capital and financial support to selected projects, helping them scale their operations, develop innovative solutions, and reach their full potential</div>
                    </div>
                    <div>
                      <div className=" h-[60px] md:h-[90px] xl:h-[120px] text-[22px] xl:text-[28px]">Strategic Partnerships</div>
                      <div className=" text-[16px] xl:text-[20px]">We leverage our extensive network to forge strategic partnerships, connecting entrepreneurs with industry leaders, advisors, and resources to accelerate their growth</div>
                    </div>
                  </div>
                  <div className=" text-[18px] xl:text-[20px]">These services encompass our commitment to unlocking the potential of web and blockchain projects, supporting investors with their crypto-asset management needs, and providing liquidity and market-making solutions to token issuers and exchanges</div>
                </div>

                {/* //--------------- */}
                <div className=" w-[300px] md:w-[700px] xl:w-[965px] h-full md:h-[650px] xl:h-[810px] float-left text-white py-10 px-4 flex flex-col gap-4 xl:gap-10">
                  <div className=" text-[50px] md:text-[60px] xl:text-[80px] font-bold">Service</div>
                    <div className=" w-[95%] my-5 md:my-0 md:w-[60%] xl:w-[50%] text-[20px] md:text-[26px] xl:text-[34px] font-bold">Crypto-Asset Management</div>
                    <div className=" flex flex-col md:flex-row gap-10 md:gap-4">
                      <div className=" flex flex-col">
                        <div className=" h-[60px] md:h-[90px] xl:h-[120px] text-[22px] xl:text-[28px]">Project Evaluation </div>
                        <div className=" text-[16px] xl:text-[20px]">We offer tailored investment strategies and portfolio management services for professional and institutional investors, maximizing returns while managing risks in the dynamic crypto-asset market</div>
                      </div>
                      <div>
                        <div className=" h-[60px] md:h-[90px] xl:h-[120px] text-[22px] xl:text-[28px]">Risk Assessment and Compliance</div>
                        <div className=" text-[16px] xl:text-[20px]">Our team employs rigorous risk assessment methodologies and ensures compliance with regulatory frameworks, safeguarding the investments of our clients</div>
                      </div>
                      <div>
                        <div className=" h-[60px] md:h-[90px] xl:h-[120px] text-[22px] xl:text-[28px]">Market Analysis and Insights</div>
                        <div className=" text-[16px] xl:text-[20px]">We provide comprehensive market analysis and insights on crypto-assets, helping investors make informed decisions and capitalize on emerging trends</div>
                      </div>
                    </div>
                    <div className=" text-[18px] xl:text-[20px]">These services encompass our commitment to unlocking the potential of web and blockchain projects, supporting investors with their crypto-asset management needs, and providing liquidity and market-making solutions to token issuers and exchanges</div>
                </div>

                {/* //------------ */}
                <div className=" w-[300px] md:w-[700px] xl:w-[965px] h-full md:h-[650px] xl:h-[810px] float-left text-white py-10 px-4 flex flex-col gap-4 xl:gap-10">
                  <div className=" text-[50px] md:text-[60px] xl:text-[80px] font-bold">Service</div>
                    <div className=" w-[95%] my-5 md:my-0 md:w-[60%] xl:w-[50%] text-[20px] md:text-[26px] xl:text-[34px] font-bold">Market-Making Services for Tokens and CEX Exchanges</div>
                    <div className=" flex flex-col md:flex-row gap-10 md:gap-4">
                      <div className=" flex flex-col">
                        <div className=" h-[60px] md:h-[90px] xl:h-[120px] text-[22px] xl:text-[28px]">Liquidity Provision </div>
                        <div className=" text-[16px] xl:text-[20px]">We facilitate liquidity for tokens and CEX exchanges, ensuring smooth trading operations and minimizing market volatility</div>
                      </div>
                      <div>
                        <div className=" h-[60px] md:h-[90px] xl:h-[120px] text-[22px] xl:text-[28px]">Order Book Management</div>
                        <div className=" text-[16px] xl:text-[20px]">Our market-making services maintain efficient and balanced order books, enhancing market stability and optimizing trading opportunities</div>
                      </div>
                      <div>
                        <div className=" h-[60px] md:h-[90px] xl:h-[120px] text-[22px] xl:text-[28px]">Trading Strategies and Execution</div>
                        <div className=" text-[16px] xl:text-[20px]">We employ sophisticated trading strategies and advanced execution algorithms to provide competitive market-making services and maximize trading efficiency</div>
                      </div>
                    </div>
                    <div className=" text-[18px] xl:text-[20px]">These services encompass our commitment to unlocking the potential of web and blockchain projects, supporting investors with their crypto-asset management needs, and providing liquidity and market-making solutions to token issuers and exchanges</div>
                </div>
              </div>
            </div>
            {/* ///------------------ */}
            <div className=" xl:hidden w-[300px] md:w-[700px] h-[70px] md:h-[120px] border border-slate-400 flex flex-col">
              <div className=" w-[300px] md:w-[700px] h-[112px] flex">
                <div onClick={nxt} onMouseLeave={()=>setBtn1("btn1out2")} onMouseEnter={()=>setBtn1("btn1in2")} className=" w-[150px] md:w-[350px] h-[60px] md:h-[120px] cursor-pointer flex items-center justify-center relative overflow-hidden">
                  <svg className=" hidden xl:block" width="40" height="74" viewBox="0 0 40 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L38 36L1 73" stroke="white" strokeWidth="2"/>
                  </svg>
                  <svg className=" xl:block" width="20" height="54" viewBox="0 0 40 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L38 36L1 73" stroke="white" strokeWidth="2"/>
                  </svg>
                  <div className={` w-full h-[60px] md:h-[120px] absolute top-0 left-0 btn1 ml-[350px] ${btn1}`}></div>
                  <div className={` w-[30px] h-[30px] absolute top-2 left-2 text-white text-[12px] md:text-[20px]`}>0{count}</div>
                </div>
                <div onClick={prev} onMouseLeave={()=>setBtn2("btn2out2")} onMouseEnter={()=>setBtn2("btn2in2")} className=" w-[150px] md:w-[350px] h-[60px] md:h-[120px] cursor-pointer flex items-center justify-center relative overflow-hidden">
                  <svg className=" hidden xl:block" width="40" height="74" viewBox="0 0 40 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39 73L2 38L39 1" stroke="white" strokeWidth="2"/>
                  </svg>
                  <svg className=" xl:block" width="20" height="54" viewBox="0 0 40 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39 73L2 38L39 1" stroke="white" strokeWidth="2"/>
                  </svg>
                  <div className={` w-full h-[60px] md:h-[120px] absolute top-0 left-0 btn1 -ml-[350px] ${btn2}`}></div>
                </div>
              </div>
              <div className={` ${bar} h-2 bg-white`}></div>
            </div>
            {/* ///--------------------------- */}
          </div>
        </div>
        {/* //--------------------------------------- Service end------------------------------------------ */}

        {/* //--------------------------------------- Service end------------------------------------------ */}
        <div className=" hidden xl:block w-full h-[90px] bg4 bg-right bg-cover text-white">
          <div className=" flex items-center justify-evenly">
            <div>office@73capital.xyz</div>
            <div className=" flex gap-4">
                <Image src={logo1} alt="" />
                <Image src={logo2} alt="" />
                <Image src={logo3} alt="" />
            </div>
            <div className=" flex gap-4">
              <Image src={logo4} alt="" />
              <Image src={logo5} alt="" />
              <Image src={logo6} alt="" />
              <Image src={linkedin} alt="" />
            </div>
          </div>
        </div>

        <div className=" xl:hidden w-full h-[130px] xl:h-[90px] px-4 xl:px-0 bg4 bg-right bg-cover text-white">
          <div className=" flex flex-col xl:flex-row items-center justify-evenly">
            <div className=" hidden xl:block">office@73capital.xyz</div>
            <div className=" flex gap-4">
                <Image src={logo1} alt="" />
                <Image src={logo2} alt="" />
                <Image src={logo3} alt="" />
            </div>
            <div className=" w-full h-full flex items-center justify-between">
              <div className=" flex gap-4">
                <Image src={logo4} alt="" />
                <Image src={logo5} alt="" />
                <Image src={logo6} alt="" />
                <Image src={linkedin} alt="" />
              </div>
              <div className=" xl:hidden">office@73capital.xyz</div>
            </div>
          </div>
        </div>
        {/* //--------------------------------------- Service end------------------------------------------ */}
      </div>
    </>
  )
}
