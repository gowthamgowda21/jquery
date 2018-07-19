$(function () {
$(".submit").click(function(){
    
   var isValid= $("#regform").validate({
        rules: {
            usn: {
                required: true,
                minlength: 10,
                maxlength: 10

            },
            name: {
                required: true,
                minlength: 4
            },

            email: {
                required: true,
                email: true
            },

            mobile: {
                required: true,
                minlength: 10,
                maxlength: 13
            },
            course :{
                required : true,
            },

            percentage: {

                required: true,
                min:55,
                max:100
                
            }


        },
        messages: {
            usn: {
                required: "usn can't be empty",
                minlength: "usn must be 10 characters",
                maxlength: "usn must be 10 characters"
            },
            name: {

                required: "name can't be empty",
                minlength: "name must be 4 characters"
            },
            email: {
                required: "email can't be empty"

            },
            mobile: {
                required: "mobile number can't be empty",
                minlength: "mobile number must be 10 characters",
                maxlength: "mobile number must be 13 characters"
            },
            course :{
              required: "select one course" 
            },
            percentage: {
                required: "enter valid percentage",
                min:"not eligible for placement",
                max:"enter percentage below 100"
            }

        }
    }).form();
    
    
    if(isValid){
        
        var usn = $("#usn").val();
        var name = $("#name").val();
        var email = $("#email").val();
        var mobile = $("#mobile").val();
        var course = $("#course").val();
        var percantage = $("#percentage").val();
        $(".reset").click();
        student = {
            "usn":usn,
                "name":name,
                "email":email,
                "mobile":mobile,
                "course":course,
                "percantage":percantage
          
        }
      console.log(student);
        return false;
    }
    
});

});
