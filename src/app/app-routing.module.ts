import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  //{ path: 'searchwiki', component: SearchwikiComponent},
  { path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
