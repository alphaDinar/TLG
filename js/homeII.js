const menu = document.querySelector('.menu')
const navII = document.querySelector('.navII')
const navTag = document.querySelector('.navTag')
menu.onclick = ()=>{
    menu.classList.toggle('active')
    navII.classList.toggle('show')
}
const navOptions = {
    rootMargin : '-50px'
}
const navTagO = new IntersectionObserver(function(entries,navTagO){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            navTag.classList.add('change')
            navTag.href = '#pageI'
        }else{   
            navTag.classList.remove('change')
            navTag.href = '#pageIV'
        }
    })
},navOptions)
navTagO.observe(pageI)



function miniView(){
    navBar.style.display = 'none'
    menu.style.opacity = '1'
    menu.style.position = 'fixed'
    menu.style.height = '50px'
    menu.style.zIndex = '1000'
    menu.onclick = ()=>{
        menu.classList.toggle('active')
        navII.classList.toggle('show')
    }
}

if(window.innerWidth < 700){
    miniView()
}
window.onresize = ()=>{
    if(window.innerWidth < 700){
        miniView()
    }
}