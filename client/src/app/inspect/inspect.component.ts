import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import { ProfileComponent } from '../profile/profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css'],
})
export class InspectComponent implements OnInit {

  username: string = '';
  user: any;
  error: any;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  async onSubmit() {
    this.error = '';
    try {
      this.user = await this.userService.inspectUser(this.username);
    } catch (error) {
      this.error = error;
      throw error;
    }
  }
}
