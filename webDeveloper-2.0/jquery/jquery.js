function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$('#submitButton').click(function () {

    var error = '';
    var missing = '';
    if ($("#email").val() == "") {
        missing += "<br>Email ";
    }
    if ($("#phone").val() == "") {
        missing += "<br>Telephone ";
    }
    if ($("#password").val() == "") {
        missing += "<br>Password ";
    }
    if ($("#passwordConfirm").val() == "") {
        missing += "<br>Confirm Password ";
    }
    if(missing!=""){
        error+="<p>The following are missing "+missing+"</p>";
    }

    if (isEmail($("#email").val()) === false) {
        error += "<p>Enter email in correct format </p>";
    }
    if (!$.isNumeric($('#phone').val())) {
        error += "<p>Enter a valid number </p>";
    }
    if ($('#password').val() != $('#passwordConfirm').val()) {
        error = "<p>passwords do not match </p>";
    }
    if(error!=""){
        $("#error").html(error);
    }
    else{
        $("#success").show();
        $("#error").hide();
    }
});
