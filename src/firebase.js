import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyD_zgGnjB_0RgIw50ZadOoKHv3TFhbfvPs",
	authDomain: "mern-instagram-clone-38ad2.firebaseapp.com",
	projectId: "mern-instagram-clone-38ad2",
	storageBucket: "mern-instagram-clone-38ad2.appspot.com",
	messagingSenderId: "77527754575",
	appId: "1:77527754575:web:2ba6f6f82e6e7f798e873a",
	measurementId: "G-7XPJRX3SZF"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}
