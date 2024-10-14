function otpGenerate(){
    let otp = ""
    for(let i =0; i <7;i++){
        otp+=Math.floor(Math.random()*10)
    }
    document.getElementById('otpmsg').innerHTML = otp;
}