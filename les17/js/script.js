$(document).ready(function() {
    function showModal(){
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown('slow');
    }
    $('.main_btna').on('click', showModal); 
    $('[href = "#sheldure"]').on('click', showModal); 
    $('.main_btn').on('click', showModal);
    
    
    
    $('.close').on('click', function() {
        $('.modal').slideUp('slow');
        $('.overlay').fadeToggle('slow');
    });  
});