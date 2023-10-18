import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  loggedIn : boolean = true;
  imageSource: string = "";

  constructor(private authService : AuthService) {
    console.log("Header constructor")
    this.loggedIn = authService.isLoggedIn();
    if (this.loggedIn) {
      this.authService.getUser()?.subscribe(user => {if (user.pfpLink) {this.imageSource = user.pfpLink}})
    }
  }

  ngOnInit(): void {
    console.log("Header onInit")
  }

  logOut() {
    console.log("LOG OUT");
    this.authService.logoutUser();
  }


}
