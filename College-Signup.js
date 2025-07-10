// ✅ Import Firestore methods from the correct Firebase SDK
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { db } from "./firebase-Config.js"; // ✅ Your own config module

// ✅ Form submit event
document.getElementById("collegeForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  // Get the input elements
  const collegeNameInput = document.getElementById("collegeName");
  const locationInput = document.getElementById("location");

  // Extract values
  const collegeName = collegeNameInput.value;
  const location = locationInput.value;

  try {
    // Add document to Firestore
    await addDoc(collection(db, "colleges"), {
      collegeName,
      location,
      createdAt: new Date().toISOString()
    });

    // ✅ Correct string interpolation
    console.log(`[College] College registered: ${collegeName}`);
    alert("College Registered Successfully");

    // Optional: clear form
    collegeNameInput.value = "";
    locationInput.value = "";

  } catch (error) {
    console.error(`[College] Error: ${error.message}`);
    alert("Failed to register college. Try again.");
  }
});
