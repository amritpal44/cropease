import React from 'react'
import { useSelector } from 'react-redux'

const SupervisedOutput = () => {

    const {cropid, cropName} = useSelector((state) => state.supervised)

    console.log("coprid: ", cropid)

    return (
        <div className='pt-24'>
            {
                cropid === -1 ? (
                    <div>
                        Go to prediction page
                    </div>
                ) : (
                    <div>
                        <p>cropid {cropid}</p>
                        <p>cropname {cropName}</p>
                    </div>
                )
            }
        </div>
    )
}

export default SupervisedOutput