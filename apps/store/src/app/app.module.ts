import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatCardModule, StoreUiSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
