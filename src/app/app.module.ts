import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboarModuleModule } from './dashboar-module/dashboar-module.module';
import { AdminModule } from './admin/admin.module';
import { DataEntryModuleModule } from './data-entry-module/data-entry-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    DataEntryModuleModule,
    DashboarModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
