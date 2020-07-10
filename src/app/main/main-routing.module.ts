import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CountryListComponent } from './travel/country-list/country-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: CountryListComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
