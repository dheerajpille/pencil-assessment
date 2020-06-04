import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';

const firebaseConfig = {
  apiKey: "AIzaSyCDnnrrOZm6N3a6KVz7uY1NfEVGPubYgN4",
  authDomain: "pencil-assessment-bd6f3.firebaseapp.com",
  databaseURL: "https://pencil-assessment-bd6f3.firebaseio.com",
  projectId: "pencil-assessment-bd6f3",
  storageBucket: "pencil-assessment-bd6f3.appspot.com",
  messagingSenderId: "58615329243",
  appId: "1:58615329243:web:a228c678426af544c0b7fe",
  measurementId: "G-DTYB81V10V"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [AppComponent, EditorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
