import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { UserLoginComponent } from "./user-login/user-login.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { NotificationMessageComponent } from "./notification-message/notification-message.component";
import { UserRegisterComponent } from "./user-register/user-register.component";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    UserLoginComponent,
    HomePageComponent,
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserRegisterComponent
  ],
  exports: [
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent
  ]
})
export class UiModule {}
