import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-with-parameters-page',
  standalone: true,
  imports: [],
  templateUrl: './with-parameters-page.component.html',
  styleUrl: './with-parameters-page.component.scss'
})
export class WithParametersPageComponent {

  private _message: string = "";

  @Input()
  set message(message: string) {
    this._message = message;
  }

  get message() {
    return this._message;
  }

}
