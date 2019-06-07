
function createDesPage(product) {
    return $(`
                       <div class="row" style="height: 100px;">
                           <div class="col-8 offset-4">
                                 <br> <h2>Product Details</h2>
                            </div>
                       </div>
                       <div class="row"style="height: 260px;">
                            <div class="col-2 offset-1">
                                 <p style="color: deeppink;font-size: 20px;">Account Information</p>
                                 <div id="AcInfo">
                                     <p><a href="#">Order History</a></p>
                                     <p><a href="#">Prescriptions</a></p>
                                     <p><a href="#">My WishList</a></p>
                                     <p><a href="#">My Product Reviews</a></p>
                                     <p><a href="#">Logout</a></p>
                                 </div>
                            </div>
                            <div class="col-4">
                                  <div id="AcFonts"></div><br>
                                   <div id="AcDet">
                                        <p>Product Name :<b>${product[0].name}</b>  </p>
                                        <p>Manufacturer :<b>${product[0].manufacturer}</b></p>
                                   </div>
                            </div>
                            <div class="col-5">
                                 <div id="AcFonts">Personal Information</div><br>
                                 <div id="AcDet">
                                      <p style="padding-left: 10px">Price :<b>Rs.${product[0].price}</b> </p>
                                      <p style="padding-left: 10px">Discount :<b>Rs.${product[0].discount}</b></p>
                                  </div>
                             </div>
                       </div>
                       <div class="row" style="height: 260px;">
                                <div class="col-2 offset-1">
                             
                                </div>
                                <div class="col-4">
                                     <div id="AcFonts">Billing Address</div>
                                </div>
                                <div class="col-5">
                                    <div id="AcFonts">Delivery Address</div>
                                </div>
                       </div>

            `)
}

$(function () {
    let desContainer = $('#desContainer');

    refreshProduct(function (data) {
        desContainer.empty();
        desContainer.append(createDesPage(data))
    });

    function refreshProduct(done) {

        $.get('/api/products/one', function (data) {
            // console.log(typeof(data));
            // console.log(data);
            done(data);

        })
    }

});