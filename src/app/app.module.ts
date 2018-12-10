import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesFormComponent } from './components/recipes-form/recipes-form.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesFormComponent,
    RecipesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
