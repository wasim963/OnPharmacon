var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 1000); // Change image every 2 seconds
}

// $(document).ready(function(){
// 	let library=$(`#library`)

//     library.mouseover(function(){
//            var share_link = $(this).prop('href');
//            window.open(share_link, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
//     })
// })

// let fb=document.getElementsById('fb');
// fb.onmouseover(function{
// 	alert("Follow us on facebook")
// })