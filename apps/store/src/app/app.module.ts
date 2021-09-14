import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    StoreUiSharedModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'game/:id',
        loadChildren: () =>
          import('@bg-hoard/store/feature-game-detail').then(
            (module) => module.StoreFeatureGameDetailModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
