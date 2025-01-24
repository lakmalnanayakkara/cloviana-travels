import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Best Travel Agent in Sri Lanka | Cloviana Travels' },
  },
  {
    path: 'Home',
    component: HomeComponent,
    data: { title: 'Best Travel Agent in Sri Lanka | Cloviana Travels' },
  },
  {
    path: 'About',
    component: AboutComponent,
    data: { title: 'Travel Agency in Sri Lanka | About' },
  },
  {
    path: 'Contact',
    component: ContactComponent,
    data: { title: 'Cloviana Travels | Contact' },
  },
  {
    path: 'Experiences',
    component: ExperiencesComponent,
    data: { title: 'Sri Lanka Tourist Places | Experiences' },
  },
  {
    path: 'Privacy-Policy',
    component: HomeComponent,
    data: { title: 'Cloviana Travels | Privacy Policy' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
