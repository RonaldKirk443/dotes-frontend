import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  oldUser: User = new User();
  newUser: User = new User();

  edit : string = 'none';
  hiddenOptions: string[] = ['Private', 'Public'];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser()?.subscribe(result => {
      this.oldUser = new User(result);
      this.newUser = new User(result);
    });
  }

  editMode(edit: string) {
    this.newUser = new User(this.oldUser);
    this.edit = edit;
  }

  cancelEditing() {
    this.newUser = new User(this.oldUser);
    this.edit='none';
  }

  updatePfp() {
    this.updateUser();
  }

  updateEmail() {
    this.updateUser();
  }

  updateUsername() {
    this.updateUser();
  }

  updatePassword() {
    this.updateUser();
  }

  updateHiddenStatus() {
    this.updateUser();
  }

  updateUser() {
    this.authService.updateUser(this.newUser).subscribe(result => {
      this.oldUser = new User(result);
      this.newUser = new User(result);
    });
    this.edit = 'none';
  }
}
