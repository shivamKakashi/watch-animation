//movement animation to happen
const card = document.querySelector('.card')
const container = document.querySelector('.container')
const watch = document.querySelector('.watch img')
const title = document.querySelector('.info h1')
const discription = document.querySelector('.info h3')
const purchase = document.querySelector('button.purchase')
const sizes = document.querySelector('.size')


//movement animation event
container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth/2 -e.pageX)/25
    let yAxis = (window.innerHeight/2 -e.pageY)/25
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)` 
})

//Animate in
container.addEventListener('mouseenter',(e)=>{
    card.style.transition = "none"
    //popout
    title.style.transform = 'translateZ(100px)'
    watch.style.transform = 'translateZ(100px) rotateZ(25deg)'
    discription.style.transform = 'translateZ(100px)'
    purchase.style.transform = 'translateZ(100px)'
    sizes.style.transform = 'translateZ(100px)'
})


//Animate out
container.addEventListener("mouseleave",(e)=>{
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    //popin
    title.style.transform = 'translateZ(0px)'
    watch.style.transform = 'translateZ(0px) rotateZ(0deg)'
    discription.style.transform = 'translateZ(0px)'
    purchase.style.transform = 'translateZ(0px)'
    sizes.style.transform = 'translateZ(0px)'
})