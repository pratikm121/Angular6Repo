import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormOutputComponent } from './form-output/form-output.component';
import { InterpolationExampleComponent } from './interpolation-example/interpolation-example.component';
import { PropertyBindingExampleComponent } from './property-binding-example/property-binding-example.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { MyServiceService } from './my-service.service';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { BasicTutorialComponentComponent } from './basic-tutorial-component/basic-tutorial-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JqueryComponent } from './jquery/jquery.component';

@NgModule({
  declarations: [
    AppComponent,
    FormOutputComponent,
    InterpolationExampleComponent,
    PropertyBindingExampleComponent,
    StructuralDirectivesComponent,
    ComponentInteractionComponent,
    ServiceExampleComponent,
    HeaderComponentComponent,
    BasicTutorialComponentComponent,
    PageNotFoundComponent,
    JqueryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
