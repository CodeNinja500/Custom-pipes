import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DistancePipeModule } from './pipes/distance.pipe-module';
import { FileSizePipeModule } from './pipes/file-size.pipe-module';
import { TeaserPipeModule } from './pipes/teaser.pipe-module';
import { FilterPipeModule } from './pipes/filter.pipe-module';
import { SortPipeModule } from './pipes/sort.pipe-module';
import { CreditCardNumberPipeModule } from './pipes/credit-card-number.pipe-module';
import { SearchPipeModule } from './pipes/search.pipe-module';
import { PhoneNumberPipeModule } from './pipes/phone-number.pipe-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    DistancePipeModule,
    FileSizePipeModule,
    TeaserPipeModule,
    FilterPipeModule,
    SortPipeModule,
    SearchPipeModule,
    CreditCardNumberPipeModule,
    PhoneNumberPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
