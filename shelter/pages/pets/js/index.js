import burger from './modules/burger';
import getData from './modules/data';
import createList from './modules/createList';
import slider from './modules/slider';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded',e =>{
    "use strict";
    document.querySelector('.btnMain').addEventListener('click',(e)=>{
            location.href='../main/index.html';
    });
    burger();
    getData('../../assets/pets.json')
        .then(data =>{
            const arr = createList(data);
            slider('.pets__wrapper','.pets__wrapper-btn',arr);
            modal('.pets__wrapper','.overlay','.modal','.modal__content','.modal__close',data);
        })
        .catch(e => {
            console.log(e)
        })

});