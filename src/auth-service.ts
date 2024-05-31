import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: firebase.User | null = null;
  error: any;
  login: any;

  credential: any;

  constructor(public auth: AngularFireAuth) {
    this.auth.authState.subscribe((user) => (this.user = user));
  }

  async emailSignin(email: string, password: string) {
    try {
      const credential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      const provider = new firebase.auth.EmailAuthProvider();
      this.credential = await this.auth.signInWithPopup(provider);
      this.user = credential.user;
    } catch (error: any) {
      this.error = error;
      console.log('Erro ao fazer login', error);
    }
  }

  async googleSignin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.credential = await this.auth.signInWithPopup(provider);
      this.user = this.credential.user;
    } catch (error) {
      this.error = error;
    }
  }

  async facebookSignin() {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.credential = await this.auth.signInWithPopup(provider);
      this.user = this.credential.user;
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.log(
          'o popup foi fechado pelo usuário antes de finalizar a operação'
        );
      } else {
        this.error = error;
        console.log('erro ao fazer login facebook:', error);
      }
    }
  }

  async signOut() {
    try {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('deslogado');
          this.credential.signOut();
        })
        .catch((error) => {
          console.log('error', error);
        });
    } catch (error) {
      this.error = error;
    }
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }
}
function getAuth() {
  throw new Error('Function not implemented.');
}
