import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { PersonalComponent } from './Components/personal/personal.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContactsComponent } from './Components/contacts/contacts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contacts', component: ContactsComponent },
];
