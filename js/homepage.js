
$(document).ready(function(){
$("form").on("submit",function(){
$('#btn-send').prop('disabled', true);
$('#statSuccess').show();
document.getElementById('statSuccess').innerHTML = "Sending...";
formData = {
'name'     : $('input[name=name]').val(),
'email'    : $('input[name=email]').val(),
'subject'  : $('input[name=subject]').val(),
'message'  : $('textarea[name=message]').val()
};


$.ajax({
url : "php/processContactUs.php",
type: "POST",
data : formData,
success: function(data, textStatus, jqXHR)
{

$('#statSuccess').text(data.message);
$('#statSuccess').show();
$('#statError').hide();
if (data.code) //If mail was sent successfully, reset the form.
$('#contact-form').closest('form').find("input[type=text], textarea").val("");
$('#inputEmail').val("");
},
error: function (jqXHR, textStatus, errorThrown)
{
$('#statError').text("Technical error!. Email us using hainnovate121@gmail.com");
$('#statSuccess').hide();
$('#statError').show();

}
});
$('#btn-send').prop('disabled', false);
return false;
  });

});
