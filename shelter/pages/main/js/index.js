import burger from './modules/burger';
import getData from './modules/data';
import slider from './modules/slider';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded',e =>{
    "use strict"
    document.querySelectorAll('.btnPets').forEach(item =>{
        item.addEventListener('click',(e)=>{
            location.href='../pets/pets.html';
        });
    });
    burger();
    getData('../../assets/pets.json')
        .then(data =>{
            slider('.pets__slides-block','.pets__arrows',data);
            modal('.pets__slides-block','.overlay','.modal','.modal__content','.modal__close',data);
        })
        .catch(e => {
            console.log(e)
        })
});