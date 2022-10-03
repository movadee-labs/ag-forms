import { AgFormService } from '@ag-forms/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { TailwindCdkComponent } from './tailwindcss-forms.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [TailwindCdkComponent, InputComponent],
  exports: [TailwindCdkComponent],
  providers: [AgFormService]
})
export class TailwindCdkModule {}
