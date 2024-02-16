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

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  
  userWithMostRepos(): any {
    if (!this.duelUsers || this.duelUsers.length < 2) {
      return null; // Handle case where duelUsers array is not yet populated or doesn't have enough users
    }
  
    // Determine the user with the most public repos
    return this.duelUsers.reduce((prevUser: any, currentUser: any) => {
      return prevUser['public-repos'] > currentUser['public-repos'] ? prevUser : currentUser;
    });
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
