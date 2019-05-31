$(document).ready(function(){ 

    //removes the present preloader quickly
    $('.preloader').fadeOut(10);
    $('#loader-2').fadeOut(10);
    
    //toggle men (top-right) show/hide
    $('.menu-icon').click(function(){

        $('.menu').toggleClass('active');
        $('#about').click(function(){
            $('.about-wrapper').toggleClass('active');
        })
        $('#overlay-btn').click(function(){
            $('.overlay').toggleClass('active');
        })
    })

    
    var count=0;
    //removes the email tag cuz we dont need it in the main email input page
    $('.tag-wrapper').css({"display": "none", "visibility": "hidden"});

    // handles the input fields=============================
    document.getElementById("email").oninput = function() {
        // alert(count++);
        check_email();
    }
    document.getElementById("password").oninput = function() {
        check_password();
    }

    function check_email() {   
        var email = $('#email').val(); 
        // alert("working!!");
        //if theres somthing in the text field, then add class active else remove active
        //active: the label gors upward...
        //also handles enabling and disabling of the "next" button.
        if (email == "" || email.length == 0)
        {
            // alert("no text");
            $('.email-label').removeClass('active');
            $("#next").attr("disabled", "disabled");
        } else {
            $('.email-label').addClass('active');
            $("#next").removeAttr("disabled");
        }

    }
    function check_password() {
        var password = $('#password').val();
        if (password == "" || password.length == 0)
        {
            $('password-label').removeClass('active');
            $("#sign-in").attr("disabled", "disabled");
        } else {
            $('password-label').addClass('active');
            $("#sign-in").removeAttr("disabled");
        }
    }
    
    //working improved:
    //when user focus on the field, label becomes active
    //when focusout: if theres nothing on the field, remove active else add active.

    $(".field").focus(function(){
        $('.field-label').addClass('active');
    });
    //ensures clicking anywhere inside the input field ad the class active
    $(".field-label").click(function(){
        $('.field-label').addClass('active');
    });


    $(".email-field").focusout(function(){
        var email = $('.email-field').val(); 
        if (email == "" || email.length == 0 ) $('.email-label').removeClass('active');
        else $('.email-label').addClass('active');
    });
    $(".password-field").focusout(function(){
        var pass = $('.password-field').val(); 
        if (pass == "" || pass.length == 0 ) $('.password-label').removeClass('active');
        else $('.password-label').addClass('active'); 
    })
    // handles the input fields ends here========================


    //when the next button is clicked...
    $('#next').click(function(e){
        e.preventDefault();
        $('.preloader').fadeIn(500).delay(4000).fadeOut(300);
        $('.slide-content').addClass('pass-input');

        //handles email text on the email tag...
        var email= $('#email').val();        
        if(email.includes('@gmail.com')) $('.email-text').html(email);
        else $('.email-text').html(email+"@gmail.com");

        //2.5s after the next button is clicked
        setTimeout(function(){
            $('.h_main').html('Welcome');
            $('.h_sub').css({"display": "none", "visibility": "hidden"});
            $('.tag-wrapper').css({"display": "", "visibility": "visible"});
            // fixed a minor glitch
            $('.field-label').removeClass('active');
        }, 2500);

        
    })


    // show-hide password
    // the img isn't in the DOM when your event handler is registered. you can use 
    var pass_flag = 0;
    $('body').on('click','img.show-hide-pass',function(){
        if(pass_flag==0){
            $('.show-hide-pass').attr('src','assets/img/eye.svg');
            $('#password').attr('type','text');
            pass_flag=1;
        } else {
            $('.show-hide-pass').attr('src','assets/img/eye_off.svg');
            $('#password').attr('type','password');
            pass_flag=0;
        }    
    })

    //when the go back button is clicked
    $('.go-back').click(function(){
        
        $('.preloader').fadeIn(500).delay(4000).fadeOut(300);
        $('.slide-content').toggleClass('pass-input');

        //2.5s after the go-back button is clicked 
        setTimeout(function(){
            $('.h_main').html('Sign in');
            $('.h_sub').css({"display": "block", "visibility": "visible"});
            $('.tag-wrapper').css({"display": "none", "visibility": "hidden"});
        }, 2500);
        //clears password field
        $('#password').val(""); 
        //resets password visibility choice
        $('.show-hide-pass').attr('src','assets/img/eye_off.svg');
        $('#password').attr('type','password');
        pass_flag=0;
    })

    // when sign-in button is clicked
    $('#sign-in').click(function(){
        $('#loader-2').fadeIn(500).delay(4000).fadeOut(300);
    })

    
    
})