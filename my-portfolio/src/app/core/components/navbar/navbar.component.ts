import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  goToGithub(){
    window.open('https://github.com/allenchristiantubo')
  }

  goToLinkedIn(){
    window.open('https://www.linkedin.com/in/allentubo09');
  }
}
