
function getThis(preview) {

    var pid = preview.id;
    // var pid1 = preview.getAttribute('id');
    pid = pid.split('=')[1];

    $.post('/api/products/one',
        {
            id: pid
        },
        function (data) {
            // getAllProducts(data);
            //alert(data[0].name+"  Hi");
        })
}
//
// $(function () {
//
//     const desConatiner = $('#desContainer');
//
//     function refreshPage(product) {
//         alert("hello jquery");
//         desConatiner.empty();
//         let div = createelement(product);
//         desConatiner.append(div);
//     }
//
//     function createelement(product) {
//         let div = $(`<div class="row mt-1"></div>`);
//
//         let name = $(`<div class="col-4">${product[0].name}</div>`);
//         let manuf = $(`<div class="col-4">${product[0].manufacturer}</div>`);
//         let price = $(`<div class="col-4">${product[0].price}</div>`);
//         let star = $(`<div class="col-4">${product[0].star}</div>`);
//         let review = $(`<div class="col-4">${product[0].review}</div>`);
//
//         div.append(name).append(manuf).append(price).append(star).append(review);
//         return div;
//     }
//
//     // $.get('/api/products/one', function (data) {
//     //     console.log(data+"  Hello");
//     //     //console.log((data[0].name));
//     //     refreshPage(data);
//     // });
//
//
// });





