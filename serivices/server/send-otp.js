export async function sendOTP(data) {
    return await fetch('https://', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "session_token": String(data.sessionToken),
                "otp": Number(data.OTP)
            })
        }
    )
}
