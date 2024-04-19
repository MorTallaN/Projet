 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DemandeServiceComponent } from './demande-service/demande-service.component';
import { CommandeComponent } from './commande/commande.component';

import { DossierComponent } from './dossier/dossier.component';
 import { AffuserComponent } from './affuser/affuser.component';
 import { InfoscommandeComponent } from './infoscommande/infoscommande.component';
 
const routes: Routes = [
 
   {path:'home', component: HomeComponent},
   {path:'user', component: AffuserComponent},
   {path:'infos', component: InfoscommandeComponent},
   {path:'partage-dossiers', component: DossierComponent}, 
   {path:'signup', component: SignupComponent},
   {path:'demande', component: DemandeServiceComponent},
   {path:'commande', component: CommandeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
