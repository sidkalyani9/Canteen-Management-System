import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public utensilIcon = faUtensils

  constructor(private _authService: SocialAuthService,
      private router: Router,
    // private _userService: UserService         
  ){}

  user!: SocialUser;
  public desctroySuject$ = new Subject<void>();

  ngOnInit(): void {
    localStorage.removeItem('userToken')
    this._authService.authState
    .pipe(takeUntil(this.desctroySuject$))  
    .subscribe((user) => {
      console.log(user)
      this.router.navigate(['/admin'])
      // this._userService.validateUser(user.idToken)
      //   .pipe(takeUntil(this.desctroySuject$))
      //   .subscribe((data)=> {
      //     console.log("DATA1" + data)
      //     if(data['msg'] == "notFound"){
      //       console.log("DATA: " + data['msg'])
      //       localStorage.setItem('userToken',JSON.stringify(data))
      //       this.router.navigate(['/signup'])
      //     }
      //     else{
      //       localStorage.setItem('user',JSON.stringify(data))
      //       this.router.navigate(['/home'])
      //     }
      //   })
      
    })
  }


}
