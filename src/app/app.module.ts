import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";

// Firestarter App Modules
import { CoreModule } from "./core/core.module";
import { UiModule } from "./ui/ui.module";
import { RecordsModule } from "./records/records.module";

// @angular/fire/ Modules
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireFunctionsModule } from "@angular/fire/functions";

// IMPORTANT
// Add your own project credentials to environments/*.ts

@NgModule({
  declarations: [AppComponent],
  imports: [
    // BrowserModule.withServerTransition({ appId: "serverApp" }),
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UiModule,
    RecordsModule,
    AngularFireModule.initializeApp(environment.firebase, "ang-fs-auth-albums"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
