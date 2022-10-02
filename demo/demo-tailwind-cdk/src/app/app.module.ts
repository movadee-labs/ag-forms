import { AgFormService } from '@ag-forms/core';
import { TailwindCdkModule } from '@ag-forms/tailwind-cdk';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, TailwindCdkModule],
  providers: [AgFormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
