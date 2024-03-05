import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'member-list', component: MemberListComponent },
  // Add other routes here
  { path: 'add-member', component: MemberListComponent }, // Replace AddMemberComponent with your actual component
  { path: 'update-member', component: MemberListComponent }, // Replace UpdateMemberComponent with your actual component
  { path: 'member-details', component: MemberListComponent }, // Replace MemberDetailsComponent with your actual component
  { path: 'delete-member', component: MemberListComponent }, // Replace DeleteMemberComponent with your actual component

  { path: 'add-member', component: MemberListComponent },
  { path: 'update-member', component: MemberListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
