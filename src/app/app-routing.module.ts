import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NotFoundComponent } from './404/404.component';


 //Routes for app.
const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/play', 
    pathMatch: 'full' 
  },
  {
    path: 'play',
    component: BodyComponent
  },
  {
    path: 'about', // Lazy loaded
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


/**
 * Routing module.
 * 
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ],
  
  declarations: []
})
export class AppRoutingModule { }
