
$(function () {

    let inputFname = $('#fname');
    let inputLname = $('#lname');
    let inputDob = $('#dob');
    let inputGender = $('#gender');
    let inputEmail = $('#email');
    let inputPass = $('#pass');
    let inputCpass = $('#cpass');
    let inputPhone = $('#phone');
    let inputCreateBtn = $('#createBtn');

    inputCreateBtn.click(function () {

        if(inputFname.val()=='' ||
            inputLname.val()=='' ||
            inputDob.val()=='' ||
            inputGender.val()=='' ||
            inputEmail.val()=='' ||
            inputPass.val()=='' ||
            inputCpass.val()=='' ||
            inputPhone.val()==''){

            alert("All fields are compulsory!")
            return false;
        }else{

            $.post('/api/users/signup',
                {
                    fname : inputFname.val(),
                    lname : inputLname.val(),
                    dob : inputDob.val(),
                    gender :inputGender.val(),
                    email :inputEmail.val(),
                    pass : inputPass.val(),
                    cpass :inputCpass.val(),
                    phone :inputPhone.val()
                },
                function (data) {
                    // refreshProfile(data)
                }
            );
            inputFname.val('');
            inputLname.val('');
            inputDob.val('');
            inputGender.val('');
            inputEmail.val('');
            inputPass.val('');
            inputCpass.val('');
            inputPhone.val('');

        }
    })
});