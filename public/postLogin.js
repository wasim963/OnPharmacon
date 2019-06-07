
$(function () {

    let inputEmail = $('#email');
    let inputPass = $('#pass');
    let inputloginBtn = $('#loginBtn');

    inputloginBtn.click(function () {

        if(inputEmail.val()=='' ||
            inputPass.val()=='' ){

            alert("Fill the boxes please!")
            return false;
        }else{

            $.post('/api/users/login',
                {
                    email :inputEmail.val(),
                    pass : inputPass.val()
                },
                function (data) {
                    // refreshProfile(data)
                }
            );
            inputEmail.val('');
            inputPass.val('');

        }
    })
});