let page = document.title;

function changePageName(where){
    var Pagename = document.getElementById('PageName');
    if(Pagename){
        Pagename.innerText = where;
    }
    else{
        console.error("Elemento <h1> com Id ='where' n foi encontrado")
    }
}
changePageName(page);