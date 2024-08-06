import React, { useEffect, useState } from 'react'

function MobileInput({ onMobileNumberChange, props }: { onMobileNumberChange: any, placeholder: any, props: any }) {
    const defaultMob = props?.defaultValue;
    // console.log("mobile number is #### ", defaultMob);

    const [mobileNumber, setMobileNumber] = useState(props?.defaultValue || "")
    console.log("mobile number is #### ", mobileNumber);

    const handleMobChange = (e: any) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {

            setMobileNumber(value)
        }
        console.log("mobile number is #### ", mobileNumber);

    }
    useEffect(() => {

        onMobileNumberChange(mobileNumber)
    }, [mobileNumber])
    return (
        <div>
            {/* <input type="tel" className="input" value={mobileNumber} onChange={handleMobChange} /> */}
            <input
                type="tel"
                pattern="[0-9]{10}"
                inputMode="numeric"  // Suggests numeric keyboard on mobile
                placeholder="Enter 10-digit mobile number"
                className="input"
                value={mobileNumber}
                onChange={handleMobChange}
            />


        </div>
    )
}

export default MobileInput
