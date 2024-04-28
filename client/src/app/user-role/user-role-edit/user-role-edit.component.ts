import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../../service/userdata.service';

@Component({
  selector: 'app-user-role-edit',
  templateUrl: './user-role-edit.component.html',
  styleUrl: './user-role-edit.component.css'
})
export class UserRoleEditComponent {

  order!: any;
  payment!: any;


  user: any;
  defaultRole!: string;
  role!: string;
  id!: any;
  getData!: any;
  selectedAll!:any;

  constructor(private router: Router, private route: ActivatedRoute, private userDataService: UserdataService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userDataService.getUser(this.id).subscribe((res: any) => {
      console.log(res)
      this.user = res
    })
  }


  updateRole(data: any) {
    this.role = data.role;
    var inputdata = {
      name: this.user.name,
      course: this.user.course,
      email: this.user.email,
      phone: this.user.phone,
      role: this.role
    }
    this.userDataService.updateUser(inputdata, this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        alert("succesfully updated")
        this.router.navigateByUrl('/admin/user-role');
      }
    });


  }
}