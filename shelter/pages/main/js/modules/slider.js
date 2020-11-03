let slider = (wrapperSel,btnSel,data)=>{
    let wrapper = document.querySelector(wrapperSel);
    let btn = document.querySelectorAll(btnSel);


    function cardsTemplate(img,name,pos){
        return `
        <div data-name='${name}' class="pets__slides-cards ${pos}">
            <div class="pets__slides-cards__img"><img class="pets__slides-cards_img" src="${img}" alt="${name}"></div>
            <h3 class="pets__slides-cards__name">${name}</h3>
            <button class="btn pets__slides-cards__btn">Learn more</button>
        </div>
        `;
    }
    function createContent(pos,a){
        let rand = Math.floor(Math.random() * Math.floor(8));
        let fragment = '';
        let arr = [];
        let mas = a;
        if(document.body.clientWidth>1279){
            for(let i=0;i<3;i++){
                rand = Math.floor(Math.random() * Math.floor(8));
                while(arr.includes(rand) || mas.includes(data[rand].name)){
                    rand = Math.floor(Math.random() * Math.floor(8));
                }
                arr.push(rand);
                fragment+=cardsTemplate(data[rand].img,data[rand].name,pos)
            }
        }
        if(document.body.clientWidth<1279 && document.body.clientWidth>767){
            for(let i=0;i<2;i++){
                rand = Math.floor(Math.random() * Math.floor(8));
                while(arr.includes(rand) || mas.includes(data[rand].name)){
                    rand = Math.floor(Math.random() * Math.floor(8));
                }
                arr.push(rand);
                fragment+=cardsTemplate(data[rand].img,data[rand].name,pos)
            }
        }
        if(document.body.clientWidth<767){
            for(let i=0;i<1;i++){
                rand = Math.floor(Math.random() * Math.floor(8));
                while(arr.includes(rand) || mas.includes(data[rand].name)){
                    rand = Math.floor(Math.random() * Math.floor(8));
                }
                arr.push(rand);
                fragment+=cardsTemplate(data[rand].img,data[rand].name,pos)
            }
        }
        return fragment;
    }
    function hide(){
        wrapper.innerHTML = ``;
    }
    function show(pos,a){
        let content = createContent(pos,a);
        wrapper.insertAdjacentHTML('afterbegin',content);
    }
    function getPrevEl(){
        const pets = document.querySelectorAll('.pets__slides-cards');
        let arr = []
        pets.forEach(item =>{
            arr.push(item.dataset.name);
        });
        return arr;
    }

    function addAniation(ff){
        const cards = document.querySelectorAll('.pets__slides-cards');
        cards.forEach(item => {
            item.classList.add(ff)
        })
    }
    function removeAnimation(ff){
        const cards = document.querySelectorAll('.pets__slides-cards');
        cards.forEach(item => {
            item.classList.remove(ff)
        })
    }

    btn.forEach((item,i) =>{
        item.addEventListener('click',(e)=>{
            e.preventDefault();
            let a = getPrevEl();
            hide();
            show('pets__slides-cards_fade',a);
        });
        
    });

}

export default slider;