import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { IgxGridModule, IgxSliderModule, IgxSnackbarModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxDropDownModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    FormsModule,
    IgxSliderModule,
    IgxSnackbarModule,
    IgxToggleModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
