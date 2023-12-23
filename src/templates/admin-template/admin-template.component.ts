import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'mp-admin-template',
  standalone: true,
  imports: [
    RouterOutlet,

    NavBarComponent,
    SideBarComponent
  ],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.scss',
  providers: [],
})
export class AdminTemplateComponent {

}
