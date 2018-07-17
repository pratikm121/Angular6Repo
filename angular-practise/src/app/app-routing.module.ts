import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormOutputComponent } from './form-output/form-output.component';
import { BasicTutorialComponentComponent } from './basic-tutorial-component/basic-tutorial-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes :Routes =[
    {path : '', redirectTo:'/tutorials' , pathMatch: 'full'},
    {path : 'tutorials', component : BasicTutorialComponentComponent},
    {path : 'forms', component : FormOutputComponent},
    {path : '**', component : PageNotFoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}