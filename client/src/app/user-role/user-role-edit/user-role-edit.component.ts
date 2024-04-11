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


//   // js for dropdown
//   this.selectedAll = document.querySelectorAll(".wrapper-dropdown");

// this.selectedAll.forEach((selected: Element): void => {
//   const optionsContainer = selected.children[2] as HTMLElement;
//   const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");

//   selected.addEventListener("click", () => {
//     let arrow = selected.children[1] as HTMLElement;

//     if (selected.classList.contains("active")) {
//       handleDropdown(selected, arrow, false);
//     } else {
//       let currentActive = document.querySelector(".wrapper-dropdown.active") as HTMLElement;

//       if (currentActive) {
//         let anotherArrow = currentActive.children[1] as HTMLElement;
//         handleDropdown(currentActive, anotherArrow, false);
//       }

//       handleDropdown(selected, arrow, true);
//     }
//   });

//   // update the display of the dropdown
//   optionsList.forEach((o: Element) => {
//     o.addEventListener("click", () => {
//       (selected.querySelector(".selected-display") as HTMLElement).innerHTML = o.innerHTML;
//     });
//   });
// });

// // check if anything else other than the dropdown is clicked
// window.addEventListener("click", (e) => {
//   if (!(e.target as HTMLElement).closest(".wrapper-dropdown")) {
//     this.closeAllDropdowns(); // Using 'this' to refer to the class method
//   }
// });

// // close all the dropdowns
// closeAllDropdowns() { // Removed 'this.' from the function declaration
//   const selectedAll = document.querySelectorAll(".wrapper-dropdown");
//   selectedAll.forEach((selected: Element) => {
//     let arrow = selected.children[1] as HTMLElement;

//     handleDropdown(selected, arrow, false);
//   });
// }

// // open/close a dropdown
// function handleDropdown(dropdown: Element, arrow: HTMLElement, open: boolean) {
//   if (open) {
//     arrow.classList.add("rotated");
//     dropdown.classList.add("active");
//   } else {
//     arrow.classList.remove("rotated");
//     dropdown.classList.remove("active");
//   }
// }


}
