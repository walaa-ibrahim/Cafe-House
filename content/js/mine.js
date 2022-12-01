//collect data
var userNameInp= document.querySelector('#userNameInp');
var userMailInp= document.querySelector('#userMailInp');
var subjectInp= document.querySelector('#subjectInp');
var userMessgInp= document.querySelector('#userMessgInp');
var sendMessage= document.querySelector('#sendMessage');
//alert message if fields are empty
sendMessage.addEventListener('click', function errorMessage(e){
    e.preventDefault;
    if (!userNameInp.val || !userMailInp.value || !subjectInp.value || !userMessgInp.value) {
        alert('Fill all fields');
    }
});



