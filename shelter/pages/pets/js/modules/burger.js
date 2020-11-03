let burger = ()=> {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuAct = document.querySelector('.nav2');
    const menuItem = document.querySelectorAll('.header__link');
    const menuItemAct = document.querySelectorAll('.nav2__link');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('.header');
    const logo = document.querySelector('.header__logo');
    const logo2 = document.querySelector('.nav-logo');
    const pets = document.querySelector('.pets');


    burger.addEventListener('click',(e)=>{
        burger.classList.toggle('burger_active');
        menuAct.classList.toggle('nav2_active');
        overlay.classList.toggle('overlay_active');
        logo.classList.toggle('header__logo_noactive');
        logo2.classList.toggle('nav-logo_active');
        header.classList.toggle('header_active');
        pets.classList.toggle('pets_active');
        document.body.classList.toggle('body_act');
        if(burger.classList.contains('burger_active')){
            console.log('fff')
           logo.setAttribute('disabled','true');
           logo.style.cursor = 'default';
        }else{
            logo.removeAttribute('disabled');
            logo.style.cursor = 'pointer';
        }
    });
    overlay.addEventListener('click',(e)=>{
        burger.classList.remove('burger_active');
        pets.classList.remove('pets_active');
        menuAct.classList.remove('nav2_active');
        logo.classList.remove('header__logo_noactive');
        logo.removeAttribute('disabled');
        logo.style.cursor = 'pointer';
        logo2.classList.remove('nav-logo_active');
        document.body.classList.remove('body_act');
        overlay.classList.remove('overlay_active');
        header.classList.remove('header_active');
    });
    menuItem.forEach((item,i) =>{
        item.addEventListener('click',e => {
            if(i>1){
                e.preventDefault();
            }
        });
        
    });
    menuItemAct.forEach((item,i) =>{
        item.addEventListener('click',e => {
            if(i>1){
                e.preventDefault();
            }
        });
        
    });
}
export default burger;