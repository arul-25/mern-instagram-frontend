import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCrRa0CdcStkiCsH-PgnyqTzrHi0APZ7Bo",
	authDomain: "react-instagram-clone-b7239.firebaseapp.com",
	projectId: "react-instagram-clone-b7239",
	storageBucket: "react-instagram-clone-b7239.appspot.com",
	messagingSenderId: "466208532109",
	appId: "1:466208532109:web:3e6842cea8fa24fb31e4c4",
	measurementId: "G-XCC1R3DVHB"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}
