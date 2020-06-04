import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  currentUser: User;
  userRef?: AngularFirestoreDocument<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
   }

   async googleSignin() {
     const provider = new auth.GoogleAuthProvider();
     const credential = await this.afAuth.signInWithPopup(provider);
     this.currentUser = credential.user;
     this.userRef = this.afs.doc(`users/${credential.user.uid}`);
     return this.signInHelper(credential.user);
   }

   private signInHelper(user) {
    const data = { 
      uid: user.uid, 
      email: user.email
    } 

    return this.userRef.set(data, { merge: true })
   }

   async signOut() {
     await this.afAuth.signOut();
     this.router.navigate(['/']);
   }
   
   async loadEditorData() {
     var editable = null;
     if (this.userRef == undefined) {
       await this.googleSignin();
     }
     await this.userRef.get().toPromise().then((doc) => {
       if (doc.exists) {
         editable = doc.get('editorData');
       }
     });
     
     return editable;
   }

   storeEditorData(editorData) {
    const data = { 
      uid: this.currentUser.uid, 
      email: this.currentUser.email,
      editorData: editorData
    } 

    return this.userRef.set(data, { merge: true })

    }
}
