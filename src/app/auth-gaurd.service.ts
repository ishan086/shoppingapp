import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthGaurd implements CanActivate{

  constructor(private auth:AuthService,private router:Router) { 

    
  }

  canActivate(){
   
    return this.auth.user$.map(user => {
        
      if (user) return true;

      this.router.navigate(['/login']);

      return false;

    });

  };


}