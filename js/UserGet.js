$().ready(() => {

$.getJSON("http://localhost:8080/Users/Get/1")
.then((resp)=> {
    console.log(resp);
    render(resp.data);
})

})

function render(user) {
    $("#pid").val(user.id);
    $("#pname").val(user.firstName + " "+ user.lastName);
    $("#pusername").val(user.userName);
    $("#pphone").val(user.phoneNumber);
    $("#pemail").val(user.email);
    $("#previewer").prop("checked", user.reviewer);
    $("#padmin").prop("checked", user.admin);
   
}