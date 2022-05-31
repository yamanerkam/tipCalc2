const billAmount=document.querySelector("#billAmount")
let billAmounttextContent=billAmount.textContent
const serviceQuality=document.querySelector("#serviceQuality")
const totalPeople = document.querySelector("#totalPeople")
const tip = document.querySelector("#tip")
const calculate =document.querySelector("#calculate")

calculate.addEventListener("click",()=>{
    if(billAmount.value>0 & totalPeople.value>0){
        console.log("yeah")
        console.log(serviceQuality.value)
        let result=billAmount.value*serviceQuality.value/totalPeople.value
        let resultFinal=Math.round(result*100)/100
        tip.textContent=resultFinal

    }else{
        tip.textContent="invalid numbers try again"
    }
})

