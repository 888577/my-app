import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { CircleComponent } from './circle/circle.component';
import { PowerComponent } from './power/power.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { CartComponent } from './cart/cart.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { PercentagePipe } from './percentage.pipe';
import { CarsComponent } from './cars/cars.component';
import { StarComponent } from './star/star.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import { HooksComponent } from './hooks/hooks.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PostComponent } from './post/post.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { BoredomComponent } from './boredom/boredom.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    InterpolationComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    RectangleComponent,
    SquareComponent,
    CircleComponent,
    PowerComponent,
    EventregistrationComponent,
    EmployeeregistrationComponent,
    CartComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    PercentagePipe,
    CarsComponent,
    StarComponent,
    GpayComponent,
    BankComponent,
    HooksComponent,
    VehicleComponent,
    PostComponent,
    FlipkartComponent,
    MailComponent,
    BoredomComponent,
    BankDetailsComponent,
    VehicleDetailsComponent,
    CreateAccountComponent,
    CreateVehicleComponent,
    CreateUserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
