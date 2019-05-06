import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./core/auth.guard";
import { UserLoginComponent } from "./ui/user-login/user-login.component";
import { UserRegisterComponent } from "./ui/user-register/user-register.component";
import { HomePageComponent } from "./ui/home-page/home-page.component";
import { RecordsListComponent } from "./records/records-list/records-list.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "login", component: UserLoginComponent },
  { path: "register", component: UserRegisterComponent },
  { path: "records", component: RecordsListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
