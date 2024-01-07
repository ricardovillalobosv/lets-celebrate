import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterItemsComponent } from './pages/register-items/register-items.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'register-items', component: RegisterItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
