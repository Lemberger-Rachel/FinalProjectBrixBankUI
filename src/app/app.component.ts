import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BrixBank';

constructor(private route:Router) {
}
  logout(){
    this.route.navigate(["./login"]);
    sessionStorage.setItem("currentUser","")
  }
}
