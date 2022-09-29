import { Component } from '@angular/core';
import { AgFormsService } from 'ag-forms';

@Component({
  selector: 'ag-forms-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  schema = [{"type": "input"}, {"type": 'email'}];

  constructor(public fs: AgFormsService){
    // console.log(this.AgFormsService.buildForm([{"type": "input"}, {"type": 'email'}]))
  }
}