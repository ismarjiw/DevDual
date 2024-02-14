import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css'],
})
export class InspectComponent implements OnInit {

  username: string = '';
  user: any;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    try {
      this.user = this.userService.inspectUser(this.username);
    } catch (error) {
      console.log('Failed to fetch user details', error);
    }
    
  }
}
