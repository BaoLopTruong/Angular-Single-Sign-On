import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authService: AuthService) { }


showAge = false;

myClickFunction(event) {
  this.showAge = !this.showAge;
}
  ngOnInit(): void {
  }

}