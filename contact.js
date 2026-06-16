import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const form = document.getElementById("contactForm");
const feedback = document.getElementById("contactMessage");


form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    try {

        await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            message: message,
            createdAt: serverTimestamp()
        });


        feedback.innerHTML = "Message sent successfully!";
        feedback.style.color = "green";


        form.reset();

    } catch (error) {

        feedback.innerHTML = "Error sending message.";
        feedback.style.color = "red";

        console.error(error);
    }

});