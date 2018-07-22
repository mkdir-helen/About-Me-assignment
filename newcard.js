/*
function flip() {
    $('.card').toggleClass('flipped');
}
*/


// function flip(){
//     $('.card').on('click', function() {
//         $(this).toggleClass('flipped');
//       });
// }


// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('flipped');
// });



function more(){
    var x = document.getElementById("more_text");
    if (x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



function flip(){
    $(document).ready(function(){
        $('.card').click(function(){
            $(this).toggleClass('flipped');
        });
    });
}

    

