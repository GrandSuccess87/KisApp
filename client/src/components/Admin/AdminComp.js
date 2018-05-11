import React from "react"
// import "./Admin.css";


const AdminComp = props => (
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
    
    // create a function that retrieves the users' profile information
   
    onSignIn = (googleUser) => {
   
    // obtain the users Google ID, name, profile URL, and email address
    
        var profile = googleUser.getBasicProfile();
        // Do not send user ID to the backend! Use an ID token instead.
        console.log('ID: ' + profile.getID()); 
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    };

   // create a function that will sign out the user

   <a href="#" onclick="signOut();">Sign Out</a>

    signOut = () => {
       var auth2 = gapi.auth2.getAuthInstance();
       auth2.signOut()
       .then(res => {
           console.log('User Signed Out');
       })
       .catch(err => console.log(err));
       
   };
);

export default AdminComp;
