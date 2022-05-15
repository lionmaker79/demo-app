import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { authRoutes } from '@demo-app/auth';

import { AppComponent } from './app.component';

import { Route, RouterModule } from '@angular/router';

const appRoutes: Route[] = [
  { path: 'auth' , children: authRoutes }
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
