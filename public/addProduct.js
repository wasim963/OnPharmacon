// function getAllProducts(done) {
//     $.get('/api/products', function (data) {
//         done(data);
//     })
// }
//
// function createProductCard(product) {
//     return $(`<div class="card col-3 m-2">
//             <div class="card-body">
//                 <h5 class="card-title">${product.name}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">${product.manufacturer}</h6>
//                 <p class="card-text">${product.price}</p>
//                 <h6>Star : ${product.star}</h6>
//                 <p>Review : ${product.review}</p>
//             </div>
//         </div>`)
// }

$(function () {

    let shoppingList = $('#shopping-list');
    let submitBTN = $('#submitBtn');
    let inputName = $('#name');
    let inputManufacturer = $('#manufacturer');
    let inputPrice = $('#price');
    let inputDiscount = $('#discount');

    getAllProducts(function (data) {
        shoppingList.empty();
        for (product of data) {
            //Create a new card element
            shoppingList.append(createProductCard(product))
        }
    });

    submitBTN.click(function () {
        $.post('/api/products',
            {
                name :inputName.val(),
                manufacturer :inputManufacturer.val(),
                price : inputPrice.val(),
                discount : inputDiscount.val()
            },
            function (data) {
               // getAllProducts(data);
            })
    })
});