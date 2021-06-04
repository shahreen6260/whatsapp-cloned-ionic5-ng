import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChattingsPage } from './chattings.page';

const routes: Routes = [
  {
    path: '',
    component: ChattingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChattingsPageRoutingModule {}
