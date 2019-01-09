import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    var config = {
      apiKey: "AIzaSyAVyRGLC-DAtzxX0ldMkKIgm3EOawaw7Aw",
      authDomain: "mon-blog-angular-2a791.firebaseapp.com",
      databaseURL: "https://mon-blog-angular-2a791.firebaseio.com",
      projectId: "mon-blog-angular-2a791",
      storageBucket: "mon-blog-angular-2a791.appspot.com",
      messagingSenderId: "348046783029"
    };
    firebase.initializeApp(config);
}
}
