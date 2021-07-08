import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BrandManagementComponent } from './brand-management/brand-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { DriverManagementComponent } from './driver-management/driver-management.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { CuisineManangementComponent } from './cuisine-manangement/cuisine-manangement.component';
import { PromoManagementComponent } from './promo-management/promo-management.component';
import { PromoViewManagementComponent } from './promo-view-management/promo-view-management.component';
import { PromoCreateOfferComponent } from './promo-create-offer/promo-create-offer.component';
import { StaticContentComponent } from './static-content/static-content.component';
import { NotificationComponent } from './notification/notification.component';
import { NewNotificationComponent } from './new-notification/new-notification.component';
import { NewDriverComponent } from './new-driver/new-driver.component';
import { ReportComponent } from './report/report.component';
import { PerformanceReportComponent } from './performance-report/performance-report.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { EodReportComponent } from './eod-report/eod-report.component';
import { MenuMixComponent } from './menu-mix/menu-mix.component';
import { DriverReportComponent } from './driver-report/driver-report.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { HeatManagementComponent } from './heat-management/heat-management.component';
import { BrandInfoComponent } from './brand-info/brand-info.component';
import { BrandInfoDetailComponent } from './brand-info-detail/brand-info-detail.component';
import { BrandInfoQrComponent } from './brand-info-qr/brand-info-qr.component';
import { BrandRequestDetailComponent } from './brand-request-detail/brand-request-detail.component';
import { BannerManagementComponent } from './banner-management/banner-management.component';
import { VerificationManagementComponent } from './verification-management/verification-management.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { DriverViewComponent } from './driver-view/driver-view.component';
import { AddCuisineComponent } from './add-cuisine/add-cuisine.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { PromoEditComponent } from './promo-edit/promo-edit.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { EditcontentComponent } from './editcontent/editcontent.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditPrivacyComponent } from './edit-privacy/edit-privacy.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { LoyaltyEditComponent } from './loyalty-edit/loyalty-edit.component';
import { AddLoyaltyComponent } from './add-loyalty/add-loyalty.component';
import { RevenueComponent } from './revenue/revenue.component';
import { AddBannerComponent } from './add-banner/add-banner.component';
import { NotificationMmanagerComponent } from './notification-mmanager/notification-mmanager.component';
import { CoverageAreasComponent } from './coverage-areas/coverage-areas.component';
import { AddCoverageComponent } from './add-coverage/add-coverage.component';
import { CoverageParameterComponent } from './coverage-parameter/coverage-parameter.component';
import { EditCoverageComponent } from './edit-coverage/edit-coverage.component';
import { OrderTodayComponent } from './order-today/order-today.component';
import { CancelledOrderComponent } from './cancelled-order/cancelled-order.component';
import { OflineRestaurantComponent } from './ofline-restaurant/ofline-restaurant.component';
import { ActiveDriverComponent } from './active-driver/active-driver.component';
import { OflineDriverComponent } from './ofline-driver/ofline-driver.component';
import { ActiveStoreComponent } from './active-store/active-store.component';
import { ActiveBrandComponent } from './active-brand/active-brand.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    SidenavComponent,
    DashboardComponent,
    UserManagementComponent,
    BrandManagementComponent,
    OrderManagementComponent,
    DriverManagementComponent,
    DriverDetailComponent,
    CuisineManangementComponent,
    PromoManagementComponent,
    PromoViewManagementComponent,
    PromoCreateOfferComponent,
    StaticContentComponent,
    NotificationComponent,
    NewNotificationComponent,
    NewDriverComponent,
    ReportComponent,
    PerformanceReportComponent,
    OrderSummaryComponent,
    EodReportComponent,
    MenuMixComponent,
    DriverReportComponent,
    CustomerDetailsComponent,
    PaymentManagementComponent,
    HeatManagementComponent,
    BrandInfoComponent,
    BrandInfoDetailComponent,
    BrandInfoQrComponent,
    BrandRequestDetailComponent,
    BannerManagementComponent,
    VerificationManagementComponent,
    UserDetailComponent,
    DriverEditComponent,
    DriverViewComponent,
    AddCuisineComponent,
    BannerEditComponent,
    PromoEditComponent,
    SendNotificationComponent,
    EditcontentComponent,
    EditContactComponent,
    EditPrivacyComponent,
    LoyaltyComponent,
    LoyaltyEditComponent,
    AddLoyaltyComponent,
    RevenueComponent,
    AddBannerComponent,
    NotificationMmanagerComponent,
    CoverageAreasComponent,
    AddCoverageComponent,
    CoverageParameterComponent,
    EditCoverageComponent,
    OrderTodayComponent,
    CancelledOrderComponent,
    OflineRestaurantComponent,
    ActiveDriverComponent,
    OflineDriverComponent,
    ActiveStoreComponent,
    ActiveBrandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
