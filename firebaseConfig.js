 // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";

  // ✅ Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBxJ2uB2zYrSXZYRwMG2TYCS51j2DRymLg",
    authDomain: "carrier-guidance-5c80b.firebaseapp.com",
    projectId: "carrier-guidance-5c80b",
    storageBucket: "carrier-guidance-5c80b.appspot.com", // ✅ FIXED
    messagingSenderId: "185931790985",
    appId: "1:185931790985:web:d3656cccdc9e2c18102458",
    measurementId: "G-38SZ35GZ49"
  };

  // ✅ Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);