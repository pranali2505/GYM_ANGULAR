import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
//import { AddMemberComponent } from './add-member/add-member.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './auth.service';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    SigninComponent,
    NavbarComponent,
   // AddMemberComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
