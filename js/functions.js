function closeMe(){
    var x = document.getElementById('figuresDiv');
    x.className="closed";
}

function openMe(){
    var x = document.getElementById('figuresDiv');
    x.className="open";
}

function displayPicture(element){
    var frame = document.getElementById('frame');
    frame.innerHTML = element.alt;
    frame.style.backgroundImage="url('"+element.src+"')";
}

function undisplayPicture(){
    var frame = document.getElementById('frame');
    frame.innerHTML = "Figura";
    frame.style.backgroundImage="none";
}













function submitForm(){
    const form = document.forms['contactForm']
    
    var name     = form["name"].value
    var company  = form["company"].value
    var email    = form["email"].value
    var phone    = form["phone"].value
    var message  = form["message"].value

    console.log(name)

    saveMessage(name, company, email, phone, message)
    
    return false;
}

function saveMessage(name, company, email, phone, message){
    // DatabaseReference
    var newDatabaseReference = databaseReference.push();

    newDatabaseReference.set(
    {
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    }
    )
}



var firebaseConfig = {
    apiKey: "AIzaSyAR0feo6lROJHeV-uV9Tj-PXpke_i7yay0",
    authDomain: "projfinalprogweb.firebaseapp.com",
    databaseURL: "https://projfinalprogweb.firebaseio.com",
    projectId: "projfinalprogweb",
    storageBucket: "projfinalprogweb.appspot.com",
    messagingSenderId: "543682298278",
    appId: "1:543682298278:web:1112972887fe23ce1b4f67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// 

var databaseReference = firebase.database().ref("TT905_2020")
