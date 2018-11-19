import { NgModule } from '@angular/core';
import {
  MatSlideToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

const moduleList = [
  MatSlideToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: moduleList,
  exports: moduleList,
})
export class MaterialModule { }
