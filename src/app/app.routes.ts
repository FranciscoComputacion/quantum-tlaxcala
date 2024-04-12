import { Routes } from '@angular/router';
//Componets 
import { QuinesSomosComponent } from './componets/quines-somos/quines-somos.component';
import { QueHacemosComponent } from './componets/que-hacemos/que-hacemos.component';
import { InformeComponent } from './componets/informe/informe.component';
import { NoticiasComponent } from './componets/noticias/noticias.component';
import { CENEVALComponent } from './componets/ceneval/ceneval.component';

export const routes: Routes = [
    {path:'', component:QuinesSomosComponent},
    {path:"Quehacemos", component:QueHacemosComponent},
    {path:"informe", component:InformeComponent},
    {path:"noticias", component:NoticiasComponent},
    {path:"ceneval",component:CENEVALComponent},
    {path:"**", redirectTo:"", pathMatch:"full"}

];
