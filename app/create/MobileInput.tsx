import React, { useEffect, useState } from 'react'

function MobileInput({ onMobileNumberChange, props }: { onMobileNumberChange: any, placeholder: any, props: any }) {
    const defaultMob = props?.defaultValue;

    const [mobileNumber, setMobileNumber] = useState(props?.defaultValue || "")

    const handleMobChange = (e: any) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {

            setMobileNumber(value)
        }

    }
    useEffect(() => {

        onMobileNumberChange(mobileNumber)
    }, [mobileNumber])
    return (
        <div>
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
