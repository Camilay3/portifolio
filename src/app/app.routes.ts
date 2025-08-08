import { Routes } from '@angular/router';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';

export const routes: Routes = [

    { path: '', component: InicioComponent },
    { path: 'sobre', component: SobreMimComponent },
    { path: 'projetos', component: ProjetosComponent },
    { path: 'atividades', component: AtividadesComponent },
    { path: 'experiencias', component: ExperienciasComponent },

];
