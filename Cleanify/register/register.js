var arr = [{firstName :'Mariana', lastName:'Vidigal', email:'ac@academiadecodigo.com', password: '123', address: 'Rua da Rosa', city: 'Macau',zipCode:'0000'},
{firstName :"Mahmudul", lastName:'Hasan', email:'ac@academiadecodigo.com', password: 'password', address: 'Rua da Rosa', city: 'Oslo',zipCode:'1111'} ]

$(document).ready(function () {

$('#signup').click(function () {
    addNewCustomer();
});

    Object.keys(arr).forEach(element => {
        console.log(arr[element]);
    })

    
});


function getCustomer(){}

/*
function register()                                    
{ 
    var firstName = document.forms["RegForm"]["First Name"];
    var lastName = document.forms["RegForm"]["Last Name"];               
    var email = document.forms["RegForm"]["Email"];
    var password = document.forms["RegForm"]["Password"]; 
    var address = document.forms["RegForm"]["Address"];   
    var city = document.forms["RegForm"]["City"];  
    var zipCode =  document.forms["RegForm"]["Zip-Code"];
    //var choice =  document.forms["RegForm"]["Choice"];  
       
   
    if (firstName.value == "")                                  
    { 
        window.alert("Please enter your first name."); 
        firstName.focus(); 
        return false; 
    }
    
    if (lastName.value == "")                                  
    { 
        window.alert("Please enter your last name."); 
        lastName.focus(); 
        return false; 
    }
   
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        address.focus(); 
        return false; 
    } 

    if (city.value == "")                               
    { 
        window.alert("Please enter your city."); 
        city.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (zipCode.value == "")                           
    { 
        window.alert("Please enter your Zip-Code."); 
        zipCode.focus(); 
        return false; 
    } 
   
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   
    if (choice.selectedIndex < 1)                  
    { 
        alert("Please enter your course."); 
        choice.focus(); 
        return false; 
    }
   
    return true; 
    
}
*/
