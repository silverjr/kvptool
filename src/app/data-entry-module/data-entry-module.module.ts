import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHotspotComponent } from './add-hotspot/add-hotspot.component';
import { AddKvpClientComponent } from './add-kvp-client/add-kvp-client.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    AddHotspotComponent,
    AddKvpClientComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],

  exports: [AddHotspotComponent, AddKvpClientComponent]
})
export class DataEntryModuleModule { }
