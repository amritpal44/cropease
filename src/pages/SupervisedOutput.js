import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import appleImage from '../assests/crops/apple.jpg';
import bananaImage from '../assests/crops/banana.jpg';
import blackgramImage from '../assests/crops/blackgram.webp';
import chickpeaImage from '../assests/crops/chickpea.png';
import coconutImage from '../assests/crops/coconut.jpg';
import coffeeImage from '../assests/crops/coffee.jpg';
import cottonImage from '../assests/crops/cotton.jpg';
import grapesImage from '../assests/crops/grapes.jpg';
import juteImage from '../assests/crops/jute.jpg';
import kidneybeansImage from '../assests/crops/kidneybeans.jpg';
import lentilImage from '../assests/crops/lentil.jpg';
import maizeImage from '../assests/crops/maize.jpg';
import mangoImage from '../assests/crops/mango.jpg';
import mothbeansImage from '../assests/crops/mothbeans.jpg';
import mungbeanImage from '../assests/crops/mungbean.jpg';
import muskmelonImage from '../assests/crops/muskmelon.jpg';
import orangeImage from '../assests/crops/orange.jpg';
import papayaImage from '../assests/crops/papaya.jpg';
import pigeonpeasImage from '../assests/crops/pigeonpeas.jpg';
import pomegranateImage from '../assests/crops/pomegranate.jpg';
import riceImage from '../assests/crops/rice.jpg';
import watermelonImage from '../assests/crops/watermelon.jpg';

const SupervisedOutput = () => {

    const {cropid, cropName} = useSelector((state) => state.supervised)
    const navigate = useNavigate();

    const getImageForCrop = (cropName) => {
        switch (cropName.toLowerCase()) {
            case 'apple':
                return appleImage;
            case 'banana':
                return bananaImage;
            case 'blackgram':
                return blackgramImage;
            case 'chickpea':
                return chickpeaImage;
            case 'coconut':
                return coconutImage;
            case 'coffee':
                return coffeeImage;
            case 'cotton':
                return cottonImage;
            case 'grapes':
                return grapesImage;
            case 'jute':
                return juteImage;
            case 'kidneybeans':
                return kidneybeansImage;
            case 'lentil':
                return lentilImage;
            case 'maize':
                return maizeImage;
            case 'mango':
                return mangoImage;
            case 'mothbeans':
                return mothbeansImage;
            case 'mungbean':
                return mungbeanImage;
            case 'muskmelon':
                return muskmelonImage;
            case 'orange':
                return orangeImage;
            case 'papaya':
                return papayaImage;
            case 'pigeonpeas':
                return pigeonpeasImage;
            case 'pomegranate':
                return pomegranateImage;
            case 'rice':
                return riceImage;
            case 'watermelon':
                return watermelonImage;
            // default:
            //     // Default image if cropName doesn't match any known crops
            //     return defaultImage;
        }
    };

    const backgroundImage = getImageForCrop(cropName);

    console.log("coprid: ", cropid)

    const clickHandler = (event) => {
        navigate("/current-prediction")
    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center text-slate-200' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)' }}>
            {
                cropid === -1 ? (
                    <div>
                        Go to prediction page
                    </div>
                ) : (
                    <div className='text-3xl'>   
                        <p>{cropName} is the best suitable crop for you to farm according to the provided parameters.</p>
                    </div>
                )
            }

            <div>
                <button onClick={clickHandler} className='bg-transparent mt-20 font-medium rounded-full border border-slate-200 px-[30px] py-[15px] text-center md:px-[38px] md:py-[20px] cursor-pointer hover:-translate-y-1 hover:bg-slate-200 hover:text-slate-950 ease-linear duration-200'>
                    Go Back To Prediction Page
                </button>
            </div>
        </div>
    )
}

export default SupervisedOutput