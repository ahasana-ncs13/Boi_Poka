const getStoreBookData = ()=>{

    const storeBookSTR = localStorage.getItem("readlist")
    if(storeBookSTR){
        const storeBooks = JSON.parse(storeBookSTR)
        return storeBooks;
    }
    else{
        return []
    }

}

const addToStoreBooks = (id) =>{
    const getStoreData = getStoreBookData();

    if(getStoreData.includes(id)){
        alert("book is already added")
    }
    else{
        getStoreData.push(id);
        const storeBook = JSON.stringify(getStoreData);
        localStorage.setItem("readlist",storeBook);
    }
}

export {addToStoreBooks,getStoreBookData}