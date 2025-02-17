import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowUsersComponent} from './show-users/show-users.component';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'showUsers', component: ShowUsersComponent},
  {path: 'deleteUser', component: DeleteUserComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: 'updateUser', component: UpdateUserComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
