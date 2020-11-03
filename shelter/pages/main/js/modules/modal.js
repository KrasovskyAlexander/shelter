let modals = (wrapperSel,overlaySel,modalSel,modalContentSel,closeSel,data)=> {
    let wrapper = document.querySelector(wrapperSel);
    let overlay = document.querySelector(overlaySel);
    let modal = document.querySelector(modalSel);
    let close = document.querySelector(closeSel);
    let content = document.querySelector(modalContentSel);


    function modalTemplate(img,name,type,breed,descr,age,inoculations,diseases,parasites){
        return `
        <div class="modal__img"><img src="${img}" alt="${name}"></div>
        <div class="modal__descr">
            <h3 class="modal__name">${name}</h3>
            <h4 class="modal__species">${type} - ${breed}</h4>
            <div class="modal__text">${descr}</div>
            <ul class="modal__ul">
                <li class="modal__li"><strong>Age:</strong> ${age}</li>
                <li class="modal__li"><strong>Inoculations:</strong> ${inoculations}</li>
                <li class="modal__li"><strong>Diseases:</strong> ${diseases}</li>
                <li class="modal__li"><strong>Parasites:</strong> ${parasites}</li>
            </ul>
        </div>
        `
    }

    function clean(){
        content.innerHTML = '';
    }

     
    wrapper.addEventListener('click',(e)=>{
        if(e.target && (e.target.classList.contains('pets__slides-cards')||(e.target.classList.contains("pets__slides-cards_img")) ||(e.target.classList.contains("pets__slides-cards__img")) || (e.target.classList.contains("pets__slides-cards__btn")) || (e.target.classList.contains("pets__slides-cards__name")) )){
            clean();
            let a = e.target.dataset.name;
            if(!a){
                a = e.target.parentNode.dataset.name;
            }
            if(!a){
                let b = e.target.parentNode;
                a = b.parentNode.dataset.name;
            }
            let counter = 0;
            for(let i = 0;i<data.length;i++){
                if(data[i].name == a){
                    counter = i;
                    break;
                }
            }
            let fragment = modalTemplate(data[counter].img,data[counter].name,data[counter].type,data[counter].breed,data[counter].description,data[counter].age,data[counter].inoculations,data[counter].diseases,data[counter].parasites);
            content.insertAdjacentHTML('afterbegin',fragment);
            modal.classList.add('modal_active');
            overlay.classList.add('overlay_active');
            document.body.classList.add('body_act');
            if(document.body.clientWidth>1200) document.body.style.paddingRight = '16px';
        }
    });
  
    close.addEventListener('click',e =>{
        e.preventDefault();
        modal.classList.remove('modal_active');
        overlay.classList.remove('overlay_active');
        document.body.classList.remove('body_act');
        if(document.body.clientWidth>1200) document.body.style.paddingRight = '0px';
    });
    overlay.addEventListener('click',e =>{
        e.preventDefault();
        modal.classList.remove('modal_active');
        document.body.classList.remove('body_act');
        if(document.body.clientWidth>1200) document.body.style.paddingRight = '0px';
    });
    close.addEventListener('mouseover',(e)=>{
        close.classList.add('modal__close_active');
    })
    overlay.addEventListener('mouseover',(e)=>{
        close.classList.add('modal__close_active');
    })
    close.addEventListener('mouseout',(e)=>{
        close.classList.remove('modal__close_active');
    })
    overlay.addEventListener('mouseout',(e)=>{
        close.classList.remove('modal__close_active');
    })
}

export default modals;