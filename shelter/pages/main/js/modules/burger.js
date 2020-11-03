let burger = ()=> {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuItem = document.querySelectorAll('.header__nav .header__nav__link');
    const overlay = document.querySelector('.overlay');
    const logo = document.querySelector('.header__logo');
    const logo2 = document.querySelector('.nav-logo');

    logo.addEventListener('click',(e)=>{
        e.preventDefault()
    });

    burger.addEventListener('click',(e)=>{
        burger.classList.toggle('burger_active');
        menu.classList.toggle('header__nav_active');
        overlay.classList.toggle('overlay_active');
        logo.classList.toggle('header__logo_noactive');
        logo2.classList.toggle('nav-logo_active');
        document.body.classList.toggle('body_act');
    });
    overlay.addEventListener('click',(e)=>{
        burger.classList.remove('burger_active');
        menu.classList.remove('header__nav_active');
        logo.classList.remove('header__logo_noactive');
        logo2.classList.remove('nav-logo_active');
        overlay.classList.remove('overlay_active');
        document.body.classList.remove('body_act');
    });
    menuItem.forEach((item,i) =>{
        item.addEventListener('click',e => {
            if(i>1){
                e.preventDefault();
            }else{
                burger.classList.toggle('burger_active');
                menu.classList.toggle('header__nav_active');
            }
        });
        
    });
}
export default burger;