import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveBrandComponent } from './active-brand/active-brand.component';
import { ActiveDriverComponent } from './active-driver/active-driver.component';
import { ActiveStoreComponent } from './active-store/active-store.component';
import { AddBannerComponent } from './add-banner/add-banner.component';
import { AddCoverageComponent } from './add-coverage/add-coverage.component';
import { AddCuisineComponent } from './add-cuisine/add-cuisine.component';
import { AddLoyaltyComponent } from './add-loyalty/add-loyalty.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { BannerManagementComponent } from './banner-management/banner-management.component';
import { BrandInfoDetailComponent } from './brand-info-detail/brand-info-detail.component';
import { BrandInfoQrComponent } from './brand-info-qr/brand-info-qr.component';
import { BrandInfoComponent } from './brand-info/brand-info.component';
import { BrandManagementComponent } from './brand-management/brand-management.component';
import { BrandRequestDetailComponent } from './brand-request-detail/brand-request-detail.component';
import { CancelledOrderComponent } from './cancelled-order/cancelled-order.component';
import { CoverageAreasComponent } from './coverage-areas/coverage-areas.component';
import { CoverageParameterComponent } from './coverage-parameter/coverage-parameter.component';
import { CuisineManangementComponent } from './cuisine-manangement/cuisine-manangement.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { DriverManagementComponent } from './driver-management/driver-management.component';
import { DriverReportComponent } from './driver-report/driver-report.component';
import { DriverViewComponent } from './driver-view/driver-view.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditCoverageComponent } from './edit-coverage/edit-coverage.component';
import { EditPrivacyComponent } from './edit-privacy/edit-privacy.component';
import { EditcontentComponent } from './editcontent/editcontent.component';
import { EodReportComponent } from './eod-report/eod-report.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HeatManagementComponent } from './heat-management/heat-management.component';
import { LoginComponent } from './login/login.component';
import { LoyaltyEditComponent } from './loyalty-edit/loyalty-edit.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { MenuMixComponent } from './menu-mix/menu-mix.component';
import { NewDriverComponent } from './new-driver/new-driver.component';
import { NewNotificationComponent } from './new-notification/new-notification.component';
import { NotificationMmanagerComponent } from './notification-mmanager/notification-mmanager.component';
import { NotificationComponent } from './notification/notification.component';
import { OflineDriverComponent } from './ofline-driver/ofline-driver.component';
import { OflineRestaurantComponent } from './ofline-restaurant/ofline-restaurant.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderTodayComponent } from './order-today/order-today.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { PerformanceReportComponent } from './performance-report/performance-report.component';
import { PromoCreateOfferComponent } from './promo-create-offer/promo-create-offer.component';
import { PromoEditComponent } from './promo-edit/promo-edit.component';
import { PromoManagementComponent } from './promo-management/promo-management.component';
import { PromoViewManagementComponent } from './promo-view-management/promo-view-management.component';
import { ReportComponent } from './report/report.component';
import { RevenueComponent } from './revenue/revenue.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { StaticContentComponent } from './static-content/static-content.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { VerificationManagementComponent } from './verification-management/verification-management.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'brand-management', component: BrandManagementComponent },
  { path: 'order-management', component: OrderManagementComponent },
  { path: 'driver-management', component: DriverManagementComponent },
  { path: 'driver-management-detail', component: DriverDetailComponent },
  { path: 'cuisine-management', component: CuisineManangementComponent },
  { path: 'promo-management', component: PromoManagementComponent },
  { path: 'promo-view-management', component: PromoViewManagementComponent },
  { path: 'promo-create-offer', component: PromoCreateOfferComponent },
  { path: 'static-content', component: StaticContentComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'send-new-notification', component: NewNotificationComponent },
  { path: 'add-new-driver', component: NewDriverComponent },
  { path: 'report', component: ReportComponent },
  { path: 'performance-report', component: PerformanceReportComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'eod-report', component: EodReportComponent },
  { path: 'menu-mix', component: MenuMixComponent },
  { path: 'driver-report', component: DriverReportComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'payment-management', component: PaymentManagementComponent },
  { path: 'heat-management', component: HeatManagementComponent },
  { path: 'brand-info', component: BrandInfoComponent },
  { path: 'brand-info-details', component: BrandInfoDetailComponent },
  { path: 'brand-info-qr', component: BrandInfoQrComponent },
  { path: 'brand-request-detail', component: BrandRequestDetailComponent },
  { path: 'banner-management', component: BannerManagementComponent },
  { path: 'verification-management', component: VerificationManagementComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'driver-edit', component: DriverEditComponent },
  { path: 'driver-view', component: DriverViewComponent },
  { path: 'add-cuisine', component:  AddCuisineComponent},
  { path: 'banner-edit', component:  BannerEditComponent},
  { path: 'promo-edit', component:  PromoEditComponent},
  { path: 'send-notification', component:  SendNotificationComponent},
  { path: 'edit-content', component:  EditcontentComponent},
  { path: 'edit-contact', component:  EditContactComponent},
  { path: 'edit-privacy', component:  EditPrivacyComponent},
  { path: 'loyalty-management', component:  LoyaltyComponent},
  { path: 'loyalty-edit-management', component:  LoyaltyEditComponent},
  { path: 'add-loyalty', component:  AddLoyaltyComponent},
  { path: 'revenue', component:  RevenueComponent},
  { path: 'add-banner', component:  AddBannerComponent},
  { path: 'notification-manager', component:  NotificationMmanagerComponent},
  { path: 'coverage-areas', component:  CoverageAreasComponent},
  { path: 'add-coverage', component:  AddCoverageComponent},
  { path: 'coverage-parameter', component:  CoverageParameterComponent},
  { path: 'edit-coverage', component:  EditCoverageComponent},
  { path: 'order-today', component:  OrderTodayComponent},
  { path: 'cancelled-order', component:  CancelledOrderComponent},
  { path: 'ofline-restaurant', component:  OflineRestaurantComponent},
  { path: 'active-driver', component:  ActiveDriverComponent},
  { path: 'ofline-driver', component:  OflineDriverComponent},
  { path: 'active-store', component:  ActiveStoreComponent},
  { path: 'active-brand', component:  ActiveBrandComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
