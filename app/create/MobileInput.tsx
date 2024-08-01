import React, { useState } from 'react'

function MobileInput({ onMobileNumberChange, placeholder }: { onMobileNumberChange: any, placeholder: any }) {
    const [mobileNumber, setMobileNumber] = useState()
    const handleMobChange = (e: any) => {
        setMobileNumber(e.target.value)
        onMobileNumberChange(mobileNumber)
    }
    return (
        <div>
            {/* <input type="tel" className="input" value={mobileNumber} onChange={handleMobChange} /> */}
            <input
                type="tel"
                pattern="[0-9]{10}"
                // placeholder={placeholder}
                className="input" value={mobileNumber} onChange={handleMobChange}
            />

        </div>
    )
}

export default MobileInput
