

const firebaseConfig = {
  apiKey: "AIzaSyAtJM86ijFTRnqzeDcbz65J3ZV4rbEUX9Y",
  authDomain: "contact-form-polytech.firebaseapp.com",
  databaseURL: "https://contact-form-polytech-default-rtdb.firebaseio.com",
  projectId: "contact-form-polytech",
  storageBucket: "contact-form-polytech.appspot.com",
  messagingSenderId: "907370793671",
  appId: "1:907370793671:web:680db7da590ceecd0ecce2"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var age = getElementVal("age");
  var ageExp = getElementVal("Annee d'experience");

  saveMessages(name, emailid, age, ageExp,msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, age, ageExp, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    age: age,
    annee_d_experience: ageExp,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
