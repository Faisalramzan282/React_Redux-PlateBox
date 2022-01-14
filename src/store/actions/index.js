// import Firebase from "../../config/firebase"
// import firebase from "firebase"
// import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth"


const set_data=(data)=>{

 
    return (dispatch)=>{
         console.log(data)
         dispatch({type:"SET_DATA",data:data})
    }
 

}

// const facebook_login=()=>{
//   console.log("facbook login ha ")
//   return(dispatch)=>{
//     const provider = new FacebookAuthProvider();
//     const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
    
//     const user = result.user;

//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;

//     console.log("users is==>",user)
//   })
//   .catch((error) => {
    
//     const errorCode = error.code;
//     const errorMessage = error.message;
    
//     const email = error.email;
    
//     const credential = FacebookAuthProvider.credentialFromError(error);

//     console.log("error message is ==>",errorMessage)
//   });
//   }
//}
export default set_data
    //facebook_login

