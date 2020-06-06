$( function() {
    $( "#datepicker" ).datepicker({ minDate: "+2", maxDate: "+1M +10D" });
  } );


$(document).ready(function () {
    /* Form Validation */
    $("#jQuery-form").validationEngine();
});




jQuery("#jQuery-form").validationEngine({'custom_error_messages' : {
        '#nameid' : {
            'required': {
                'message': "* This field is required and cant be left unfilled."
            },
            'custom[minSize]': {
                'message': "* The minimum length is not attained, increase the lenghth"
            }
        },
    }
});


