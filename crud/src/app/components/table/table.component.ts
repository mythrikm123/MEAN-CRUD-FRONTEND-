import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableserviceService } from 'src/app/services/tableservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: any;
  user: any;
  userId: string='';
  constructor(private data:TableserviceService,private route: ActivatedRoute, private http: HttpClient){}
  ngOnInit() {
     this.getusers();
  }

  // get the users
  getusers(){
    this.data.getUsers().subscribe((users) => {
      this.users=users
      console.log(this.users);
    })
  }
  
  //delete the user
  deleteUser(id: string) {
    this.data.deleteUsers(id).subscribe(
      () => {
        console.log('User deleted successfully');
        this.getusers();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  // Edit the user
  editUser(id: string) {
    const user = this.users.find((p: any) => p._id === id);
    if (user) {
      const newUsername = prompt('Enter the new username:', user.username);
      const newPassword = prompt('Enter the new password:', user.password);
      const newEmail = prompt('Enter the new email:', user.email);
      if (newUsername !== null || newPassword !== null || newEmail !== null) {
        const updatedUser = {
          username: newUsername || user.username,
          password: newPassword || user.password,
          email: newEmail || user.email
        };
        this.data.updateUser(id, updatedUser).subscribe(
          () => {
            console.log('User updated successfully');
            this.getusers(); 
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
  }
  
  
  
  
  
  
  
}
