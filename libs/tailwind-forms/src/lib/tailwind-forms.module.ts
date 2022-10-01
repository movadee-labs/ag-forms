import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { TailwindFormsComponent } from './tailwindcss-forms.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [TailwindFormsComponent, InputComponent],
  exports: [TailwindFormsComponent],
})
export class TailwindFormsModule {}
