import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, RouterOutlet],
})
export class AppRoutingModule {}
