var arr = [{firstName :'Mariana', lastName:'Vidigal', email:'ac@academiadecodigo.com', password: '123', address: 'Rua da Rosa', city: 'Macau',zipCode:'0000'},
{firstName :"Mahmudul", lastName:'Hasan', email:'ac@academiadecodigo.com', password: 'password', address: 'Rua da Rosa', city: 'Oslo',zipCode:'1111'} ]

$(document).ready(function () {

    $('#login').click(function () {
        console.log("test");
        checkCustomer();
    });
    
});
    
    function checkCustomer() {
        var userForm = $("#text-input");

        if(arr[0].email === $('#login-email').val() && arr[0].password === $('#login-pass').val()  ) {

       var message = '<h1>Welcome, ' + arr[0].firstName + '!\n\r ' + 
        'please note that you still not validated your login.</h1>'
            $(message).appendTo(userForm)
        }
    }
