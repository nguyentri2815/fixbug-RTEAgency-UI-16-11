$(document).ready(function () {
    //toggle nav
    $('.bars , .overlay').click(()=>{
        $('.nav , .overlay, .wrapper, .bars ').toggleClass('active');
    })
    //bo sung div responsize cho table
    var listTable=document.querySelectorAll('.table');
    for (let i = 0; i < listTable.length; i++) {
        listTable[i].outerHTML=`<div class='table-responsive'>${listTable[i].outerHTML}</div>`
    }
    //tab car-ins-page
    $('.tab-item').click(function(){
       let IdShow= $(this).attr('href');
        $('.tab-content,.tab-item ').removeClass('active');
        $(this).addClass('active');
        $(IdShow).addClass('active');
    })
});