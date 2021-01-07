import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { CustomChartComponent } from './pages/dashboard/custom-chart/custom-chart.component';
import { AdminSectionComponent } from './pages/admin-section/admin-section.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] , },
  { path: 'dashboard/:id', component: CustomChartComponent,canActivate:[AuthGuard] , },
  { path: 'admin-section', component: AdminSectionComponent,canActivate:[AuthGuard] , },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
