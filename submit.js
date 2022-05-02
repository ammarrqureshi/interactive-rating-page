function submitRating() {
    

    

    document.getElementById("main").style.display="none";
    document.getElementById("thank-you").style.display="block";
    
  
    }

function displayRating()
    {
        var selectedItem;
    for(var item=0; item<document.form.rating.length; item++){
        if(document.form.rating[item].checked){
            selectedItem= document.form.rating[item].value;
             break;
            
        }
        

    }
    document.getElementById("selected").innerHTML=selectedItem;
    }