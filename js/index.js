$(document).ready(function() { 
    
    
    function Checking() {
    console.log("Checking");
    $.ajax({  
        url: 'http://localhost:3000/products',  
       
        type: 'GET',  
        
        dataType: 'json',  
        
        success: function(data, textStatus, xhr) {  
             
            console.log(data);  
           
        },  
        error: function(xhr, textStatus, errorThrown) {  
            console.log('Error in Database');  
           
        }  
    });  
    }
   
}); 