import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddIndicatorComponent } from './components/add-indicator/add-indicator.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AddTargetComponent } from './components/add-target/add-target.component';



@NgModule({
  declarations: [
    RegisterComponent,
    EditUserComponent,
    AddIndicatorComponent,
    AddTargetComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],

  exports: [EditUserComponent, AddIndicatorComponent, RegisterComponent]
})
export class AdminModule { }
