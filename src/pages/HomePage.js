//import homebuildings2 from "../assests/images/istockphoto-1289383957-170667a.webp"
// import './HomePage.css'
import { useEffect } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'

import cropeasebackground from "../assests/images/cropease-background.jpg"
// import threedoctors from "../assests/images/threedoctors.png"
import whychooseus from "../assests/images/whychooseus.jpg"

import Footer from '../components/Footer'

const HomePage = () => {

  const hiddenClass = "hidden-transition"
  const Delay1 = "hidden-transition-delay-1"
  const Delay2 = "hidden-transition-delay-2"

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-transition');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  return (
    <div className='relative pt-16'>

      {/* SECTION 1 */}
      {/* asix -z-10 karne se buttons kam nahi karege */}
      <div className='relative flex flex-wrap flex-col w-full justify-center items-center mb-24'> 

        <img className="absolute  w-full object-cover rounded-xl sm:rounded-[4rem] -z-10  top-0 -translate-y-28" src={cropeasebackground} alt='home page background'/>

        {/* WELCOME DIV */}
        <div className={`mt-20 md:mt-24 w-full sm:w-[35rem] flex flex-col my-5 `}>

          <div className={`flex flex-col justify-center  text-center text-slate-100 m-2`}>

            <h1 className={`font-sans text-2xl font-bold  ${hiddenClass}`}>
              WELCOME TO CROPEASE
            </h1>

            <h1 className={` text-3xl md:text-4xl md:font-bold sm:pt-7 p-4 ${hiddenClass} ${Delay1}`}>
              Enhance Your Farming Experience with Precision Crop Prediction
            </h1>

            <p className={`text-[16px] sm:text-[18px] pt-6 md:pt-4  ${hiddenClass} ${Delay1}`}>
              Welcome to our platform designed to revolutionize your farming methods. Explore our cutting-edge technology that predicts crop yields with precision, empowering you to make informed decisions for a prosperous harvest.
            </p>

          </div>

          {/* TWO BUTTONS */}
          <div className={`flex md:flex-row flex-col gap-5 justify-around pt-10 text-slate-200 text-[18px] font-bold ${hiddenClass} ${Delay2} m-6`}>

            <SecondaryButton linkto={"/current-prediction"}>
              Predict Your Crop
            </SecondaryButton>
        
            {/* <SecondaryButton linkto={"/future-prediction"}>
              Future Projection
            </SecondaryButton> */}

          </div>
        </div>
      </div>
      



      {/* SECTION 3 WHY CHOOSE US */}
      <div className='m-9 xl:m-auto max-w-7xl py-10 sm:py-[40px] sm:pt-32 rounded-[4rem] flex p-3 flex-col lg:flex-row justify-center items-center font-clarity-city gap-4 lg:gap-28 mt-8'>

        <div className={`${hiddenClass} ${Delay1} text-[16px] sm:text-[18px] font-medium lg:w-1/2`}>
          <h1 className='text-blue-500 font-bold text-[24px] sm:text-[28px]'>WHY CHOOSE US</h1>
          <p className='text-[36px] lg:text-[40px] font-semibold leading-tight'>Empowering Your Farming Experience</p>

          <div className='flex flex-col mt-9'>

            <div className='flex flex-col gap-7 sm:flex-row sm:gap-10 border-b border-slate-400 pb-7'>
              <div className='flex gap-5 hover:translate-x-3 transition-all delay-100 duration-300'>
                {/* <img src={residentcare} alt='residentcare' className='w-[50px] sm:w-[80px] object-cover' /> */}
                <div>
                  <h1 className='text-[20px] sm:text-2xl font-semibold'>Precise Crop Data</h1>
                  <p className='text-[14px] lg:text-lg font-medium text-slate-500'>Access accurate and detailed data for informed crop management decisions.</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-7 sm:flex-row sm:gap-10 border-b border-slate-400 pb-7 mt-7'>
              <div className='flex gap-5 hover:translate-x-3 transition-all delay-100 duration-300'>
                {/* <img src={qualitysupport} alt='qualitysupport' className='w-[50px] sm:w-[80px] object-cover' /> */}
                <div>
                  <h1 className='text-[20px] sm:text-2xl font-semibold'>Quality support</h1>
                  <p className='text-[14px] sm:text-lg font-medium text-slate-500'>Reliable and quality support tailored to your needs.</p>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap flex-col gap-7 md:flex-row sm:gap-10 mt-7'>
              <div className='flex gap-5 hover:translate-x-3 transition-all delay-100 duration-300'>
                {/* <img src={nursestaff} alt='nursestaff' className='w-[50px] sm:w-[80px] object-cover rounded-full' /> */}
                <div>
                  <h1 className='text-[20px] sm:text-2xl font-semibold'>Personalized Recommendations</h1>
                  <p className='text-[14px] sm:text-lg font-medium text-slate-500'>Receive tailored recommendations based on comprehensive crop analysis.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className={`${hiddenClass} ${Delay2} w-[300px] mt-4 lg:mt-0 lg:w-[450px] `}>
          <img src={whychooseus} alt='nurse helping person' className='rounded-lg' />
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default HomePage