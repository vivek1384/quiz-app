import { Component, inject } from '@angular/core';
import { Admin } from '../../app.component';
import { LoginService } from '../../login.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObg : Admin = new Admin()
  userData : Admin[] = []
  adminData : Admin[] = []
  loginService = inject(LoginService)
  router = inject(Router)
  name: string = ''
  password: string = ''

  login(name:string, password:string){
    this.loginService.adminLogin(name, password).subscribe((res)=>{
      if(res && res.length==1){
        this.userData = res
        alert("Admin login.")
        localStorage.clear()
        localStorage.setItem('Admin', this.userObg.name)
        this.router.navigate(['home'])
        this.userObg = new Admin()
      }
      else{
        this.loginService.userLogin(name, password).subscribe((res)=>{
          if(res && res.length==1){
            this.adminData = res
            alert("User login.")
            localStorage.clear()
            localStorage.setItem('User', this.userObg.name)
            setTimeout(() => {
              localStorage.setItem('UserId', res[0].id)
            }, 500);
            this.router.navigate(['home'])
            this.userObg = new Admin()
          }
        })
      }
    })
  }
}
