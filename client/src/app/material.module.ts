import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatSelectModule,
  MatRadioModule,
  MatPaginatorModule,
  MatGridListModule
} from '@angular/material';

const moduleList = [
  MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatBadgeModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatGridListModule
];

@NgModule({
  imports: moduleList,
  exports: moduleList,
})
export class MaterialModule { }
