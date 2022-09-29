import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgFormsComponent } from './ag-forms.component';
import { AgFormsService } from './ag-forms.service';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AgFormsComponent, InputComponent],
  providers: [AgFormsService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AgFormsComponent]
})
export class AgFormsModule {}
