import { Component } from '@angular/core';
import { UserdataService } from '../../service/userdata.service';

@Component({
  selector: 'app-user-role-management',
  templateUrl: './user-role-management.component.html',
  styleUrl: './user-role-management.component.css'
})
export class UserRoleManagementComponent {

  users!:any;
  constructor(private userDataService:UserdataService){}

  ngOnInit(){
    this.getUserList();
  }
  getUserList(){
    this.userDataService.getUsers().subscribe((res:any)=>{
      console.log(res)
      this.users = res;
    });
  }
}


