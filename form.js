const firebaseConfig = {
    apiKey: "AIzaSyDuW0S8daSwMQtGfSO62E6KDFJVG2DhY0w",
    authDomain: "submitform-3fa0d.firebaseapp.com",
    databaseURL: "https://submitform-3fa0d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "submitform-3fa0d",
    storageBucket: "submitform-3fa0d.appspot.com",
    messagingSenderId: "690781776701",
    appId: "1:690781776701:web:dc0eb7b0204a596cae7354",
    measurementId: "G-TR3KPK8CY7"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var submitFormDB = firebase.database().ref('Portfolio');

document.getElementById('contact').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name =getElementByVal('Name');
    var email =getElementByVal('Email');
    var subject =getElementByVal('Subject');
    var message =getElementByVal('Message');

    saveMessage(Name,Email,Subject,Message);
}

const saveMessage=(Name,Email,Subject,Message)=>{
    var newSubmitform = contactDB.push();

    newContactform.set({
        Name : Name,
        Email : Email,
        Subject : Subject,
        Message : Message
    });
}

const getElementByVal = (id) => {
    return document.getElementById(id).value;

}
