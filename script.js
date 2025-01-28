let buton=document.querySelector("button")

buton.addEventListener("click",()=>{
    let color1=Math.floor(Math.random(1)*255)
    let color2=Math.floor(Math.random(1)*255)
    let color3=Math.floor(Math.random(1)*255)
    document.body.style.background=`rgba(${color1},${color2},${color3})`
}) 