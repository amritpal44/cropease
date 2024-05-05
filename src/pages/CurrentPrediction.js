import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Common/Navbar'
import { useForm } from 'react-hook-form'
import { apiConnector } from '../services/apiconnector'
import toast from 'react-hot-toast'
import { predictionendpoint } from '../services/apis'
import { useDispatch } from 'react-redux'
import { setId, setName } from '../slices/supervisedSlice'
import { useNavigate } from 'react-router-dom'

const CurrentPrediction = () => {

  const hiddenClass = "hidden-transition"
  const Delay1 = "hidden-transition-delay-1"
  const Delay2 = "hidden-transition-delay-2"

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //for initial loading transition
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } 
        // else {
        //   entry.target.classList.remove('show');
        // }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-transition');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);



    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm()

    const submitDataForm = async (data) => {
        // console.log("Form Data - ", data)
        try {
        setLoading(true)
        const res = await apiConnector(
            "POST",
            predictionendpoint.CURRENT_PREDICTOIN_API,
            data
        )
        // console.log("res: ", res)
        if(res?.data?.success === true){
            toast.success("Prediction Successful");
        }
        
        const[cropId, cropName] = res.data.data.split(" ")

        dispatch(setName(cropName))
        dispatch(setId(cropId))

        // console.log("cropid: ", cropId)
        // console.log("cropname: ", cropName) 

        // console.log("Email Res - ", res)

        setLoading(false)

        navigate("/current-output")
        } catch (error) {
        console.log("ERROR MESSAGE - ", error)
        setLoading(false)
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
        reset({
            N: "",
            P: "",
            K: "",
            temperature: "",
            humidity: "",
            ph: "",
            rainfall: ""
        })
        }
    }, [reset, isSubmitSuccessful])


  return (

    <div id='contactus' className='mx-auto w-full min-h-screen bg-[#0d192b] px-[20px] font-clarity-city pt-10'>
        <div className='max-w-7xl mx-7 flex justify-center flex-col lg:flex-row lg:mx-auto gap-5 sm: pt-20'>
            <div className= {`${hiddenClass} ${Delay1} mt-14 flex flex-col lg:w-2/6`}>
                <h1 className='text-blue-500 font-bold text-[28px]'>Crop Prediction</h1>
                <p className=' text-[25px] lg:text-[50px] font-semibold leading-tight text-slate-200 mt-8'>Predict your crop</p>
                <p className='text-slate-500 mt-5 text-[18px]'>
                    Get real-time crop insights with our current prediction feature. Using cutting-edge algorithms, we analyze temperature data for accurate yield forecasts. 
                </p>
            </div>

            <div className={`${hiddenClass} ${Delay2} rounded-3xl py-8 lg:p-14 flex gap-3 flex-col w-full lg:w-[900px]  mx-auto`}>
                <form className="flex flex-col gap-7" onSubmit={handleSubmit(submitDataForm)}>

                    {/* P & K */}
                    <div className="flex flex-col gap-5 lg:flex-row">
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <input
                            type="number"
                            name="N"
                            id="N"
                            placeholder="Nitrogen(N) content in ppm"
                            className="form-style sm:text-xl rounded-lg  w-full px-3 lg:px-[18px] py-[10px] lg:py-[12px] bg-slate-100"
                            {...register("N", { required: true })}
                            />
                            {errors.N && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please Enter Nitrogen value.
                            </span>
                            )}
                        </div>
                        
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <input
                            type="number"
                            name="P"
                            id="P"
                            placeholder="Phosphorus(P) content in ppm"
                            className="form-style sm:text-xl rounded-lg  w-full px-3 lg:px-[18px] py-[10px] lg:py-[12px] bg-slate-100"
                            {...register("P", {required: true})}
                            />
                            {errors.P && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please Enter Phosphorus value.
                            </span>
                            )}
                        </div>
                    </div>

                    {/* N & temperature */}
                    <div className="flex flex-col gap-5 lg:flex-row">

                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <input
                            type="number"
                            name="K"
                            id="K"
                            placeholder="Potassium(K) content in ppm"
                            className="form-style sm:text-xl rounded-lg  w-full px-3 lg:px-[18px] py-[10px] lg:py-[12px] bg-slate-100"
                            {...register("K", { required: true })}
                            />
                            {errors.K && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please Enter Potassium value.
                            </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <input
                            type="number"
                            name="temperature"
                            id="temperature"
                            placeholder="Enter Temperature in Celsius"
                            className="form-style sm:text-xl rounded-lg  w-full px-3 lg:px-[18px] py-[10px] lg:py-[12px] bg-slate-100"
                            {...register("temperature", { required: true })}
                            />
                            {errors.temperature && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please Enter Temperature value.
                            </span>
                            )}
                        </div>
                    </div>

                    {/* himidity & ph */}
                    <div className="flex flex-col gap-5 lg:flex-row">
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <input
                            type="number"
                            name="humidity"
                            id="humidity"
                            placeholder="Enter Humidity in %"
                            className="form-style sm:text-xl rounded-lg  w-full px-3 lg:px-[18px] py-[10px] lg:py-[12px] bg-slate-100"
                            {...register("humidity", { required: true })}
                            />
                            {errors.humidity && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please Enter Humidity value.
                            </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <input
                            type="float"
                            name="ph"
                            id="ph"
                            placeholder="Enter PH value of soil"
                            className="form-style sm:text-xl rounded-lg  w-full px-3 lg:px-[18px] py-[10px] lg:py-[12px] bg-slate-100"
                            {...register("ph", { required: true })}
                            />
                            {errors.ph && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please Enter PH value.
                            </span>
                            )}
                        </div>
                    </div>
                    
                    {/* rainfall */}
                    <div className="flex flex-col gap-2">
                        <input
                            type="number"
                            name="rainfall"
                            id="rainfall"
                            placeholder="Enter seasonal rainfall value of your area in mm."
                            className="form-style sm:text-xl rounded-lg  w-full px-3 lg:px-[18px] py-[10px] lg:py-[12px] bg-slate-100"
                            {...register("rainfall", { required: true })}
                        />
                        {errors.rainfall && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter rainfall value of your area.
                            </span>
                        )}
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className={`bg-[#3d65ff] rounded-lg text-slate-200 sm:rounded-lg font-bold text-xl sm:text-2xl  sm:px-[18px] py-[12px] sm:py-[17px] cursor-pointer hover:-translate-y-1 ease-linear duration-200 mt-4
                            ${
                            loading ? 'opacity-30 cursor-not-allowed' : ''
                            }
                        `}
                        >
                        Submit
                    </button>
                </form>
            </div>
        </div>
      
    </div>

  )
}

export default CurrentPrediction