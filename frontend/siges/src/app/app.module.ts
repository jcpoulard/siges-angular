import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcademicPeriodListComponent } from './components/academic-period-list/academic-period-list.component';
import {AcademicPeriodService} from './services/academic-period.service';

import {HttpClientModule} from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    AcademicPeriodListComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [AcademicPeriodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
