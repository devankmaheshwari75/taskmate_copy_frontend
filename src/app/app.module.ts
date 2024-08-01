// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; // Add this import
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Add this import


import { MatIconModule } from '@angular/material/icon'; // Add this import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { UserManagementComponent } from './auth/components/user-management/user-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserManagementComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    MatCardModule ,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
