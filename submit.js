function submitRating() {
    document.getElementById("main").style.display="none";
    document.getElementById("thank-you").style.display="block";

    

    let selectedRating= document.getElementById("rate-5-number").innerHTML;
    document.getElementById("selected").innerHTML=selectedRating;
    }