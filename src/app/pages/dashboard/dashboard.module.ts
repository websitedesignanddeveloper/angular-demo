import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { CustomChartComponent } from './custom-chart/custom-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [DashboardComponent, CustomChartComponent],
  imports: [
    CommonModule,
    ChartsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    DataTablesModule
  ]

})
export class DashboardModule { }
