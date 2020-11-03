let slider = (wrapperSel,btnSel,data)=>{
    const wrapper = document.querySelector(wrapperSel);
    const btn = document.querySelector(btnSel);
    const btnNumber = btn.querySelector('.pets__btn_number');
    const btnLeft = btn.querySelector('.left');
    const btnBegin = btn.querySelector('.begin');
    const btnRight = btn.querySelector('.right');
    const btnEnd = btn.querySelector('.end');
    
    function cardsTemplate(img,name){
        return ` 
        <div class="сard pets__cerd" data-name='${name}'>
            <div class="сard__img pets__img"><img class="сard__pic pets__pic" src="${img}" alt="${name}"></div>
            <h3 class="сard__name pets__name">${name}</h3>
            <button class="btn сard__btn pets__btng">Learn more</button>
        </div>
        `;
    }
    function createContent(a){
        let index = a;
        let fragment = '';
            if(document.body.clientWidth>1279){
                for(let i=0;i<48;i++){
                    if(i>=index*8 && i < index*8+8)fragment+=cardsTemplate(data[i].img,data[i].name)
                }
            }
            if(document.body.clientWidth<1279 && document.body.clientWidth>767){
                for(let i=0;i<48;i++){
                    if(i>=index*6 && i < index*6+6)fragment+=cardsTemplate(data[i].img,data[i].name)
                }
            }
            if(document.body.clientWidth<767){
                for(let i=0;i<48;i++){
                    if(i>=index*3 && i < index*3+3)fragment+=cardsTemplate(data[i].img,data[i].name)
                }
            }
        return fragment;
    }
    function hide(){
        wrapper.classList.remove('fade');
        wrapper.innerHTML = ``;
    }
    function show(a){
        let content = createContent(a);
        wrapper.insertAdjacentHTML('afterbegin',content);
    }
    let g =0;
    if(g===0){
        btnLeft.classList.toggle('pets__btn_noactive');
        btnBegin.classList.toggle('pets__btn_noactive');
    }
    btn.addEventListener('click',(e)=>{
        
        let maxg;
        if(document.body.clientWidth>1279){
            maxg = 5;
        }if(document.body.clientWidth<1279 && document.body.clientWidth>767){
            maxg = 7;
        }if(document.body.clientWidth<767){
            maxg = 15;
        }
        e.preventDefault();
        if(e.target && e.target.classList.contains('right')){
            if(g!==maxg){
                hide()
                g++;
                let h = g+1;
                show(g);
                btnNumber.textContent = h;
            }
        }
        if(e.target && e.target.classList.contains('left')){
            if(g!==0){
                btnLeft.classList.remove('pets__btn_noactive');
                btnBegin.classList.remove('pets__btn_noactive');
                hide();
                g--;
                let h = g+1;
                show(g);
                btnNumber.textContent = h;
            }
        }
        if(e.target && e.target.classList.contains('end')){
            if(g!==maxg){
                g=maxg;
                let h = g+1;
                btnNumber.innerText = h;
                hide()
                show(g);
            }
        }
        if(e.target && e.target.classList.contains('begin')){
            if(g!==0){
                g=0;
                let h = g+1;
                btnNumber.innerText = h;
                hide()
                show(g);
            }
        }

        if(g===0){
            btnLeft.classList.add('pets__btn_noactive');
            btnBegin.classList.add('pets__btn_noactive');
        }else{
            btnLeft.classList.remove('pets__btn_noactive');
            btnBegin.classList.remove('pets__btn_noactive');
        }
        if(g===maxg){
            btnRight.classList.add('pets__btn_noactive');
            btnEnd.classList.add('pets__btn_noactive');
        }else{
            btnRight.classList.remove('pets__btn_noactive');
            btnEnd.classList.remove('pets__btn_noactive');
        }
        wrapper.classList.add('fade');
    });
    show(0);
}

export default slider;