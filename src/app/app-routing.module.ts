import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OurexpertiseComponent } from './components/ourexpertise/ourexpertise.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
    path: 'about',
    component: AboutComponent
},
{
    path: 'ourexpertise',
    component: OurexpertiseComponent
},
{
  path: 'gallery',
  component: GalleryComponent
},
{
  path: 'testimonials',
  component: TestimonialsComponent
},
{
  path: 'contactus',
  component: ContactusComponent
},
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
