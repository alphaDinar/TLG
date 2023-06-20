const navBar = document.querySelector('.navBar')
const logo = document.getElementById('logo') 
const pageI = document.querySelector('.pageI')
const menu = document.querySelector('.menu')
const navII = document.querySelector('.navII')
const navTag = document.querySelector('.navTag')
const tagA = document.querySelector('.tagA')

function trackNav(){
    const pageIoptions = {
        rootMargin : '-200px'
    }
    const navObserve = new IntersectionObserver(function(entries,navObserve){
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                logo.style.display = 'none'
                menu.style.opacity = '1'
                menu.style.height = '50px'
                navBar.style.display = 'none'
            menu.onclick = ()=>{
                menu.classList.toggle('active')
                navII.classList.toggle('show')
            }
            }else{
                menu.style.opacity = '0'
                menu.style.height = '0'
                if(menu.classList.contains('active')){
                    menu.classList.remove('active')
                }
                navBar.style.display = 'flex'
                logo.style.display = 'flex'
                logo.style.zIndex = '1'
                logo.style.top = '78px'
                if(navII.classList.contains('show')){
                    navII.classList.remove('show')
                }
            }
        })
    },pageIoptions)
    navObserve.observe(pageI)
}
function miniView(){
    navBar.style.display = 'none'
    menu.style.opacity = '1'
    menu.style.height = '50px'
    menu.style.zIndex = '1000'
    menu.onclick = ()=>{
        menu.classList.toggle('active')
        navII.classList.toggle('show')
    }
}

if(window.innerWidth > 700){
    trackNav()
}else if(window.innerWidth < 700){
    miniView()
}


window.onresize = ()=>{
    if(window.innerWidth > 700){
        trackNav()
    }
    else if(window.innerWidth < 700){
        miniView()
    }
}

const navOptions = {
    rootMargin : '-350px'
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
