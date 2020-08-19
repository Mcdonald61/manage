

    var email = document.getElementById('email').value;


  function emailerror(){

    if(email.value == null){
      document.getElementById('error').innerHTML = "enter a valid email";
      document.getElementById('error').style.color = "red";
      console.log(email + "hey");
     } else{
      document.getElementById('error').innerHTML = "none";
      document.getElementById('error').style.color = "none";

  }
  }