import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuthenticate = false;
  userData: any; // Save logged in user data
  public userToken: string;
  isLoggedInn : boolean;
  checkloginwithMS: boolean = false;
  static JWT: any;
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone ,// NgZone service to remove outside scope warning
    public firebaseAuth: AngularFireAuth,
    public msalService: MsalService,
    public http: HttpClient
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })

    // this.http.get("https://graph.microsoft.com/v1.0/me").subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //     console.log(localStorage.setItem('user',JSON.stringify(this.userData)))
    //     console.log(JSON.parse(localStorage.getItem('user')))
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // })

  }

  // Sign in with email/password
  SignIn(email, password) {
    this.logoutMS()
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result)
       // alert("You are login successfully.")

          this.router.navigate(['dashboard']);


      //  console.log( this.SetUserData(result.user));
      //   console.log( firebase.auth().currentUser.getIdToken());

      }).catch((error) => {
        window.alert(error.message)
      })

  }



  // GetToken(): string {
  //   this.afAuth.onAuthStateChanged( user => {
  //     if (user) {
  //       console.log(user)
  //       user.getIdToken().then(idToken => {
  //         this.userToken = idToken;

  //           // this shows the userToken
  //         console.log('token inside getToken method ' + this.userToken);
  //       });
  //     }
  //   });

  //   // this shows userToken as undefined
  //   console.log('before return ' + this.userToken);
  //   return this.userToken;
  // }


  // GetToken(): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     this.afAuth.onAuthStateChanged( user => {
  //       if (user) {
  //         user.getIdToken().then(idToken => {
  //           this.userToken = idToken;
  //           resolve(idToken);
  //           console.log(this.userToken)

  //         });
  //       }
  //     });
  //   })
  // }

  CheckSignin(){
    this.firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        user.getIdToken().then(idToken => {
          this.userToken = idToken;
         // console.log(this.userToken)
          this.ngZone.run(() => {
            this.isLoggedInn= true;
            this.router.navigate(['dashboard']);
          });
        });
      } else {
        this.router.navigate(['/sign-in']);
        this.isLoggedInn= false;
      }
    });
  }


  // login(email, password): boolean {
  //   if (email !== null && password !== null) {
  //     this.isAuthenticate = true;
  //     return this.isAuthenticate;
  //   }
  //   this.isAuthenticate = false;
  //   return this.isAuthenticate;
  // }


  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        //this.SendVerificationMail();
        this.SetUserData(result.user);
        alert("You register account successfully.")
        this.router.navigate(['sign-in']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null ) ? true : false;

  }

//sign in with Microsoft
beforeSignIn(){
  this.msalService.instance.handleRedirectPromise().then( res => {
    if (res != null && res.account != null) {
      this.msalService.instance.setActiveAccount(res.account)
      console.log(res.accessToken)
    }
  })
}

checkBeforeSignIn(){
  this.http.get("https://graph.microsoft.com/v1.0/me")
  .subscribe(profile => {
    console.log(profile)
    if(profile == null){
      console.log("oke")
      this.router.navigate(['/sign-in'])
      this.checkloginwithMS = false;
    }
    else{
      this.router.navigate(['/dashboard'])
      console.log(" not oke")
      this.checkloginwithMS =true;
    }

  });
}

  MicrosoftAuth(){
    const request = {scopes: ["openid", "profile"]}
    this.msalService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        this.msalService.instance.setActiveAccount(response.account);
        console.log(response)
        this.router.navigate(['/dashboard'])
      });
      this.msalService.instance.acquireTokenPopup(request)
  }

  CheckisLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount() != null
  }

  logoutMS() {
    this.msalService.logout()
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      userPrincipalName: user.userPrincipalName,
      id: user.id

    }
    return userRef.set(userData, {
      merge: true
    })
  }


  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
       localStorage.removeItem('user');
       localStorage.clear();
      this.router.navigate(['sign-in']);
    })
  }


  //get id token of current user
  // getCurrentUserToken(){
  //   firebase.auth().currentUser.getIdToken()
  //   .then(
  //     (token: string) => {
  //       localStorage.setItem('isLoggedIn', token)
  //       console.log(token)
  //     }
  //   )
  //   localStorage.getItem('isLoggedIn');
  // }

    isAuthenticated(): boolean{
      return !!localStorage.getItem('user');
    }

  // isAuthenticated(){
  //   return (localStorage.getItem('isLoggedIn')) ? true : false;
  // }

  authbeforelogin(){
    let abc= false;
    const getuid =  localStorage.getItem('user');
    if(getuid !== null){
      abc=true;
    }
    else {
      abc= false;
    }
    return abc;
  }


// authsubmitlogin(abc: false){
// const getid = localStorage.getItem('user');
// if(getid !== null){
//   abc=true;
// }
// }



}
