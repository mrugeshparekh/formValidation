var validClassName = 'valid';
var invalidClassName = 'invalid';
var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

//Must be at least 8 characters
//At least 1 number, 1 lowercase, 1 uppercase letter
//At least 1 special character from @#$%&!/\
//original regular expression /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
//I add couple of special character in the regular expression
//May be it does not contain all punctuation character
var passwordRegex = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
var upperRegx = /([A-Z])/g;
var lowerRegX = /([a-z])/g;
var digitRegx = /([0-9])/g;

$(document).ready(function() {

    $('#firstName, #lastName').on('change, focusout, keyup', function(){
	nameValidation.bind(this)();
    });

    $('#email').on('change, focusout, keyup', function(){
	emailValidation.bind(this)();
    });

    $('#password').on('change, focusout, keyup', function(){
	passwordValidation.bind(this)();
    });

    $('#reTypePassword').on('change, focusout, keyup', function(){
	comparePassword.bind(this)();
    });

    $('#firstName, #lastName, #email').focusin(function(){
	$(this).removeClass(invalidClassName);
    });
    
});


function nameValidation(){
    if($(this).val().length == 0){
        $(this).addClass(invalidClassName).removeClass(validClassName);
    }
    else{
        $(this).removeClass(invalidClassName).addClass(validClassName);
    }
}

function emailValidation(){
    if($(this).val().length == 0 || !emailRegex.test($(this).val())){
	$(this).addClass(invalidClassName).removeClass(validClassName);
    }
    else{
	$(this).removeClass(invalidClassName).addClass(validClassName);
    }
}

function passwordValidation(){
    if($(this).val().length == 0 || !passwordRegex.test($(this).val())){
        $(this).addClass(invalidClassName).removeClass(validClassName);
    }
    else{
        $(this).removeClass(invalidClassName).addClass(validClassName);
    }
}

function comparePassword(){
        if($(this).val() != $('#password').val() || $(this).val().length == 0){
        $(this).addClass(invalidClassName).removeClass(validClassName);
    }
    else{
        $(this).removeClass(invalidClassName).addClass(validClassName);
    }
}
