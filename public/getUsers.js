
function createProfile(profile) {
    return $(`
                       <div class="row" style="height: 100px;">
                           <div class="col-11 offset-1">
                                 <br> <h2>Your Account</h2>
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
                                  <div id="AcFonts">Login Information</div><br>
                                   <div id="AcDet">
                                        <p>Username :<b>${profile[0].email}</b>  </p>
                                        <p>Password :<b>${profile[0].pass}</b> </p>
                                        <p>Mobile No :<b>${profile[0].phone}</b>  </p>
                                   </div>
                            </div>
                            <div class="col-5">
                                 <div id="AcFonts">Personal Information</div><br>
                                 <div id="AcDet">
                                      <p style="padding-left: 10px">Name :<b>${profile[0].fname}&nbsp;${profile[0].lname}</b>  </p>
                                      <p style="padding-left: 10px;">DOB :<b>${profile[0].dob}</b>  </p>
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
  //  let inputCreateBtn = $('#createBtn');
    let container = $('#container');

    refreshProfile(function (data) {
        container.empty();
      //  console.log(data);
        container.append(createProfile(data))
    });

    function refreshProfile(done) {

        $.get('/api/users/signup', function (data) {
           // console.log(typeof(data));
           // console.log(data);
            done(data);

        })
    }

});