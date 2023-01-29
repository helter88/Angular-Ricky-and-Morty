import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [AppComponent, FilterComponent],
  imports: [BrowserModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
