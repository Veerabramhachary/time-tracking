const dailyTitle = document.querySelector("#daily");
const weeklyTitle = document.querySelector("#weekly");
const monthlyTitle = document.querySelector("#monthly");

dailyTitle.addEventListener('click',()=> {
    dailyTitle.classList.toggle("active");
    weekly.classList.toggle("active");
    daily2();
    
})

weeklyTitle.addEventListener('click',()=> {
    weeklyTitle.classList.toggle("active");
    monthlyTitle.classList.remove('active');
    dailyTitle.classList.remove("active");
    weekly2();
})

monthlyTitle.addEventListener('click', () => {
    weeklyTitle.classList.remove("active");
    dailyTitle.classList.remove("active");
    monthlyTitle.classList.toggle("active");
    monthly();
})

// Daily data starts here
async function daily2() {
    const response = await fetch("./data.json")
    const data = await response.json();
// work data start
    document.querySelector(".data-work").innerText=data[0].timeframes.daily.current+ "hrs";
    document.querySelector(".dataLast1").innerHTML="Last week - " + data[0].timeframes.daily.previous+ "hrs";
// work data ends
// play data starts
    document.querySelector('.data-play').innerText= data[1].timeframes.daily.current+"hrs";
    document.querySelector('.dataLast2').innerHTML="Last week - "+data[1].timeframes.daily.previous + "hrs";
// play data ends
// study data starts

    document.querySelector('.data-study').innerText= data[2].timeframes.daily.current+"hrs";
    document.querySelector('.dataLast3').innerHTML="Last week - "+data[2].timeframes.daily.previous + "hrs";

    //Exercise data starts 
    document.querySelector('.data-exercise').innerText= data[3].timeframes.daily.current+"hrs";
    document.querySelector('.dataLast4').innerHTML="Last week - "+data[3].timeframes.daily.previous + "hrs";
    //Exercise data ends

    //social data starts
    document.querySelector('.data-social').innerText= data[4].timeframes.daily.current+"hrs";
    document.querySelector('.dataLast5').innerHTML="Last week - "+data[4].timeframes.daily.previous + "hrs";
    //social data ends

    //Self care data starts
    document.querySelector('.data-self-care').innerText= data[3].timeframes.daily.current+"hrs";
    document.querySelector('.dataLast6').innerHTML="Last week - "+data[3].timeframes.daily.previous + "hrs";
    //self care data ends
}
// Daily data ends here

// weekly data starts here
async function weekly2() {
    const response = await fetch("./data.json")
    const data = await response.json();
// work data start
    document.querySelector(".data-work").innerText=data[0].timeframes.weekly.current+ "hrs";
    document.querySelector(".dataLast1").innerHTML="Last week - " + data[0].timeframes.weekly.previous+ "hrs";
// work data ends

// play data starts
    document.querySelector('.data-play').innerText= data[1].timeframes.weekly.current+"hrs";
    document.querySelector('.dataLast2').innerHTML="Last week - "+data[1].timeframes.weekly.previous + "hrs";
// play data ends

// study data starts

    document.querySelector('.data-study').innerText= data[2].timeframes.weekly.current+"hrs";
    document.querySelector('.dataLast3').innerHTML="Last week - "+data[2].timeframes.weekly.previous + "hrs";

    //Exercise data starts 
    document.querySelector('.data-exercise').innerText= data[3].timeframes.weekly.current+"hrs";
    document.querySelector('.dataLast4').innerHTML="Last week - "+data[3].timeframes.weekly.previous + "hrs";
    //Exercise data ends

    //social data starts
    document.querySelector('.data-social').innerText= data[4].timeframes.weekly.current+"hrs";
    document.querySelector('.dataLast5').innerHTML="Last week - "+data[4].timeframes.weekly.previous + "hrs";
    //social data ends

    //Self care data starts
    document.querySelector('.data-self-care').innerText= data[3].timeframes.weekly.current+"hrs";
    document.querySelector('.dataLast6').innerHTML="Last week - "+data[3].timeframes.weekly.previous + "hrs";
//self care data ends

}

async function monthly() {
    const response = await fetch("./data.json")
    const data = await response.json();
// work data start
    document.querySelector(".data-work").innerText=data[0].timeframes.monthly.current+ "hrs";
    document.querySelector(".dataLast1").innerHTML="Last week - " + data[0].timeframes.monthly.previous+ "hrs";
// work data ends

// play data starts
    document.querySelector('.data-play').innerText= data[1].timeframes.monthly.current+"hrs";
    document.querySelector('.dataLast2').innerHTML="Last week - "+data[1].timeframes.monthly.previous + "hrs";
// play data ends

// study data starts

    document.querySelector('.data-study').innerText= data[2].timeframes.monthly.current+"hrs";
    document.querySelector('.dataLast3').innerHTML="Last week - "+data[2].timeframes.monthly.previous + "hrs";

    //Exercise data starts 
    document.querySelector('.data-exercise').innerText= data[3].timeframes.monthly.current+"hrs";
    document.querySelector('.dataLast4').innerHTML="Last week - "+data[3].timeframes.monthly.previous + "hrs";
    //Exercise data ends

    //social data starts
    document.querySelector('.data-social').innerText= data[4].timeframes.monthly.current+"hrs";
    document.querySelector('.dataLast5').innerHTML="Last week - "+data[4].timeframes.monthly.previous + "hrs";
    //social data ends

    //Self care data starts
    document.querySelector('.data-self-care').innerText= data[3].timeframes.monthly.current+"hrs";
    document.querySelector('.dataLast6').innerHTML="Last week - "+data[3].timeframes.monthly.previous + "hrs";
//self care data ends
}
