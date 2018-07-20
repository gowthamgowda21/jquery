$(function () {
    if (localStorage.getItem("students") == null) {
        localStorage.setItem("students", JSON.stringify([]));
    }
    showRegistredStudents();

    dialog = $("#dialog").dialog({
        autoOpen: false,
        height: 500,
        width: 500,
        modal: true,
        title: 'Registration Form'
    });

    $(".regstu").click(function () {
        dialog.dialog("open");
    });

    /*date picker*/
    $("#dob").datepicker({
        changeYear: true,
        changeMonth: true,
        maxDate: "0d"
    });
    $(".submit").click(function () {

        var isValid = $("#regform").validate({
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
                course: {
                    required: true,
                },

                percentage: {

                    required: true,
                    min: 55,
                    max: 100

                },
                dob: {
                    required: true,
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
                course: {
                    required: "select one course"
                },
                percentage: {
                    required: "enter valid percentage",
                    min: "not eligible for placement",
                    max: "enter percentage below 100"
                },
                dob: {
                    required: "DOB cannot be empty"
                }

            }
        }).form();


        if (isValid) {

            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var course = $("#course").val();
            var percentage = $("#percentage").val();
            var dob = $("#dob").val();
            $(".reset").click();
            student = {
                "usn": usn,
                "name": name,
                "email": email,
                "mobile": mobile,
                "course": course,
                "percentage": percentage,
                "dob": dob
            }
            var students = JSON.parse(localStorage.getItem("students"));
            students.push(student);
            updateLocalStorageData(students);
            showRegistredStudents();
            dialog.dialog("close");
            return false;
        }

    });

    function showRegistredStudents() {
        var students = getDataFromLocalStorage();
        var data = " ";
        if (students.length == 0) {
            data = "<h3> No students registerd yet ....."

        } else {
            data += "<table id='regstudents'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>USN</th>";
            data += "<th>Name</th>";
            data += "<th>Email</th>";
            data += "<th>Mobile</th>";
            data += "<th>dob</th>"
            data += "<th>Branch</th>"
            data += "<th>Percentage</th>";
            data += "</tr></thead>";
            for (var i = 0; i < students.length; i++) {
                var j = i + 1;
                data += "<tr>";
                data += "<td>" + j + "</td>";
                data += "<td>" + students[i].usn + "</td>";
                data += "<td>" + students[i].name + "</td>";
                data += "<td>" + students[i].email + "</td>";
                data += "<td>" + students[i].mobile + "</td>";
                data += "<td>" + students[i].dob + "</td>";
                data += "<td>" + students[i].course + "</td>";
                data += "<td>" + students[i].percentage + "</td>";
                data += "</tr>";
            }
            data += "<table>";
        }
        $("#content").html(data);
        $("#regstudents").dataTable({
            "pageLength": 2

        })

    }

    function getDataFromLocalStorage() {
        var students = JSON.parse(localStorage.getItem("students"));
        return students;
    }

    function updateLocalStorageData(updatedStudentsArr) {

        localStorage.setItem("students", JSON.stringify(updatedStudentsArr));
    }
});
