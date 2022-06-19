import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { SwallService } from '../../services/swall.service';
import { TokenStorageService } from '../../services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit{

  
    username!: string;
    password!: string;
  
  roles: string[] = [];




  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService,
    public router: Router,
    private swal: SwallService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {     
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    
    console.log(this.username+'  '+this.password);
    this.authService.login(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);        
        this.roles = this.tokenStorage.getUser().roles;

        this.router.navigate(['/dashboard']);

        console.log("roles: " + this.roles);
      },
      err => {
        // this.errorMessage = err.error.message;
      this.swal.faild("Login failed",'Incorrect username or password!')
       
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
