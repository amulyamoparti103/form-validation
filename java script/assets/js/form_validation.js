function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function displayDetails(){ 
    var name = document.frm.name.value;
    var age = document.frm.age.value;
    var gender = document.frm.gender.value;
    var email = document.frm.email.value;
    var mobile = document.frm.mobile.value;

	var nameErr = emailErr = mobileErr = ageErr = genderErr = true;
    if(name == "") {
        printError("nameErr","Please Enter Name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    if(age == "Select") {
        printError("ageErr", "Please select your Age");
    } else {
        printError("ageErr", "");
        ageErr = false;
    }
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
        var regex = /^([a-zA-Z\d\.-]+)@([a-z]+)\.([a-z])$/
        if(regex.test(email) == false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
	if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", 
            	"Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    if (nameErr  == false ||  emailErr == false || mobileErr == false
       ||ageErr == false || genderErr == true)
        return false;
}

