importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");


const firebaseConfig = {
    apiKey: "AIzaSyD8MK9ORTn0pntqXTON4kvChMBMfwnbAJw",
    authDomain: "webhepdesk.firebaseapp.com",
    projectId: "webhepdesk",
    storageBucket: "webhepdesk.appspot.com",
    messagingSenderId: "60624689963",
    appId: "1:60624689963:web:6039f74a4fc88477eb036e"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
});