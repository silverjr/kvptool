import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SidemenuComponent,
    FooterComponent
  ],

  imports: [
    CommonModule  
  ],
  
  exports: [
    HeaderComponent, 
    SidemenuComponent, 
    FooterComponent
  ]
})
export class SharedModuleModule { }
