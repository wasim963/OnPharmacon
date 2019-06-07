function getAllProducts(done) {
    $.get('/api/products', function (data) {
        done(data);
    })
}


function createProductCard(product) {
    return $(`<div class="card col-2 offset-1 m-2">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${product.manufacturer}</h6>
                <p class="card-text">${product.price}</p>
                <h6>Discount : ${product.discount}</h6>
            </div>
        </div>`)
}

$(function () {

    let shoppingList = $('#productConatiner');
    // let submitBTN = $('#submitbtn');
    // let inputName = $('#name');
    // let inputManufacturer = $('#manufacturer');
    // let inputPrice = $('#price');
    getAllProducts(function (data) {
        shoppingList.empty();
        for (product of data) {
            //Create a new card element
            shoppingList.append(createProductCard(product))
        }
    })

    // submitBTN.click(function () {
    //     $.post('/api/products',
    //         {
    //             name :inputName.val(),
    //             manufacturer :inputManufacturer.val(),
    //             price : inputPrice.val()
    //         },
    //         function (data) {
    //             getAllProducts(data);
    //         })
    // })
});