let createList = (data)=> {
    let fullPetsList = [];
    let pets = data;
   
   function sort863 (list){
    let length = list.length;

    for(let i = 0;i < (length/6); i++){
        const stepList = list.slice(i*6,(i*6)+6);

        for(let j = 0; j < 6; j++){
            const duplicateItem = stepList.find((item,ind)=>{
                return item.name === stepList[j].name && (ind!==j);
            });

            if(duplicateItem !== undefined){
                const ind = (i*6)+j;
                const which8OfList = Math.trunc(ind/8);

                const elem = list.splice(ind,1)[0];
                list.splice(which8OfList*8,0,elem);

                i-=2;
                break;
            }
        }
    }
    return list;
   }

    fullPetsList = (()=>{
        let tempArr = []
        for(let i=0;i<6;i++){
            const newPets = pets;
            for(let j = pets.length; j>0;j--){
                let randInd = Math.floor(Math.random() * j);
                const randElem = newPets.splice(randInd,1)[0];
                newPets.push(randElem);
            }

            tempArr = [...tempArr,...newPets];
        }
        return tempArr;
    })();

    

    return sort863(fullPetsList);
}

export default createList;