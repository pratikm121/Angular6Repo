import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
/** Components created for practise purpose
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlert } from  './SuccessAlert/SuccessAlert.component';
import { WarningAlert } from  './WarningAlert/WarningAlert.component';
import { AssignmentsComponent } from  './Assignments/assignments.component';
 */

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    RecipesComponent, 
    RecipeListComponent, 
    RecipeDetailsComponent, 
    RecipeItemComponent, ShoppingListComponent, ShoppingEditComponent,   
    /*ServerComponent,
    ServersComponent,
    SuccessAlert,
    WarningAlert,
    AssignmentsComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
