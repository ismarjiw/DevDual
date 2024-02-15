import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""

  duelUsers: any;

  loading = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  async onSubmit() {
    this.loading = true;

    try {
      this.duelUsers = await this.userService.duelUsers(this.usernameOne, this.usernameTwo);
      console.log('Both user details:', this.duelUsers);
      console.log('First user repos:', this.duelUsers[0]['public-repos']); 
      console.log('Second user repos:', this.duelUsers[1]['public-repos']); 
    } catch (error) {
      throw error;
    } finally {
      this.loading = false; 
    }
  }
}
