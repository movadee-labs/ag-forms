import { agFormService } from '@ag-forms/core';
import { TailwindFormsModule } from '@ag-forms/tailwind-forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, TailwindFormsModule],
  providers: [agFormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
