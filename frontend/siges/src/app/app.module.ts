import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcademicPeriodListComponent } from './components/academic-period-list/academic-period-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademicPeriodListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
