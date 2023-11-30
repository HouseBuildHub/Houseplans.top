import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';







import { PageNotfoundGlobalComponent } from './views/pages/pages_Global/page-notfound-global/page-notfound-global.component';
import { PageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/page-main-global.component';
import { PageContactGlobalComponent } from './views/pages/pages_Global/page-contact-global/page-contact-global.component';
import { PageBacketGlobalComponent } from './views/pages/pages_Global/page-backet-global/page-backet-global.component';
import { PageAgreementGlobalComponent } from './views/pages/pages_Global/page-agreement-global/page-agreement-global.component';
import { PageBonusGlobalComponent } from './views/pages/pages_Global/page-bonus-global/page-bonus-global.component';
import { PageRegistrationGlobalComponent } from './views/pages/pages_Global/page-registration-global/page-registration-global.component';
import { PagePartnershipGlobalComponent } from './views/pages/pages_Global/page-partnership-global/page-partnership-global.component';
import { PageAccountPersonalinfoGlobalComponent } from './views/pages/pages_Global/page-account-global/page-account-personalinfo-global/page-account-personalinfo-global.component';
import { PageAccountSecurityGlobalComponent } from './views/pages/pages_Global/page-account-global/page-account-security-global/page-account-security-global.component';
import { PageAccountSellerGlobalComponent } from './views/pages/pages_Global/page-account-global/page-account-seller-global/page-account-seller-global.component';
import { PageAccountBuilderGlobalComponent } from './views/pages/pages_Global/page-account-global/page-account-builder-global/page-account-builder-global.component';
import { PageAccountProjectGlobalComponent } from './views/pages/pages_Global/page-account-global/page-account-project-global/page-account-project-global.component';
import { PageMainHouseplansComponent } from './views/pages/pages_Houseplans/page-main-houseplans/page-main-houseplans.component';
import { PageCategoryHouseplansComponent } from './views/pages/pages_Houseplans/page-category-houseplans/page-category-houseplans.component';
import { HeaderGlobalComponent } from './views/components/components_Global/header-global/header-global.component';
import { FooterGlobalComponent } from './views/components/components_Global/footer-global/footer-global.component';
import { SidebarrightGlobalComponent } from './views/components/components_Global/sidebarright-global/sidebarright-global.component';
import { BannerAboveheaderGlobalComponent } from './views/components/components_Global/banner-global/banner-aboveheader-global/banner-aboveheader-global.component';
import { RegionSelectFooterGlobalComponent } from './views/ui/ui_Global/select_Global/region-select-footer-global/region-select-footer-global.component';
import { ShareSelectFooterGlobalComponent } from './views/ui/ui_Global/select_Global/share-select-footer-global/share-select-footer-global.component';
import { SigninSelectFooterGlobalComponent } from './views/ui/ui_Global/select_Global/signin-select-footer-global/signin-select-footer-global.component';
import { ScrolltotopGlobalComponent } from './views/components/components_Global/scrolltotop-global/scrolltotop-global.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSearchGlobalComponent } from './views/ui/ui_Global/input_Global/input-search-global/input-search-global.component';
import { CategorymenuAllSelectHeaderGlobalComponent } from './views/ui/ui_Global/select_Global/categorymenu-all-select-header-global/categorymenu-all-select-header-global.component';
import { CategorymenuHouseplansSelectHeaderGlobalComponent } from './views/ui/ui_Global/select_Global/categorymenu-houseplans-select-header-global/categorymenu-houseplans-select-header-global.component';
import { CategorymenuBuildersSelectHeaderGlobalComponent } from './views/ui/ui_Global/select_Global/categorymenu-builders-select-header-global/categorymenu-builders-select-header-global.component';
import { PageMainBuildersComponent } from './views/pages/pages_Builders/page-main-builders/page-main-builders.component';
import { PageCategoryBuildersComponent } from './views/pages/pages_Builders/page-category-builders/page-category-builders.component';
import { PageCardBuildersComponent } from './views/pages/pages_Builders/page-card-builders/page-card-builders.component';
import { PageMainArchitectorsComponent } from './views/pages/pages_Architectors/page-main-architectors/page-main-architectors.component';
import { PageCategoryArchitectorsComponent } from './views/pages/pages_Architectors/page-category-architectors/page-category-architectors.component';
import { PageCardArchitectorsComponent } from './views/pages/pages_Architectors/page-card-architectors/page-card-architectors.component';
import { PageCategoryMaterialsComponent } from './views/pages/pages_Materials/page-category-materials/page-category-materials.component';
import { PageMainMaterialsComponent } from './views/pages/pages_Materials/page-main-materials/page-main-materials.component';
import { PageCardMaterialsComponent } from './views/pages/pages_Materials/page-card-materials/page-card-materials.component';
import { PageCategorySellersComponent } from './views/pages/pages_Sellers/page-category-sellers/page-category-sellers.component';
import { PageMainSellersComponent } from './views/pages/pages_Sellers/page-main-sellers/page-main-sellers.component';
import { PageCardSellersComponent } from './views/pages/pages_Sellers/page-card-sellers/page-card-sellers.component';
import { PageCategoryShopsComponent } from './views/pages/pages_Shops/page-category-shops/page-category-shops.component';
import { PageMainShopsComponent } from './views/pages/pages_Shops/page-main-shops/page-main-shops.component';
import { PageCardShopsComponent } from './views/pages/pages_Shops/page-card-shops/page-card-shops.component';
import { PageCatalogArchitectorsComponent } from './views/pages/pages_Architectors/page-catalog-architectors/page-catalog-architectors.component';
import { PageCatalogBuildersComponent } from './views/pages/pages_Builders/page-catalog-builders/page-catalog-builders.component';
import { PageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/page-catalog-houseplans.component';
import { PageCatalogMaterialsComponent } from './views/pages/pages_Materials/page-catalog-materials/page-catalog-materials.component';
import { PageCatalogSellersComponent } from './views/pages/pages_Sellers/page-catalog-sellers/page-catalog-sellers.component';
import { PageCatalogShopsComponent } from './views/pages/pages_Shops/page-catalog-shops/page-catalog-shops.component';
import { PageProductHouseplansComponent } from './views/pages/pages_Houseplans/page-product-houseplans/page-product-houseplans.component';

import { ProductfilterleftpanelPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productfilterleftpanel-page-catalog-houseplans/productfilterleftpanel-page-catalog-houseplans.component';

import { ServicelinksrightpanelPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/servicelinksrightpanel-page-catalog-houseplans/servicelinksrightpanel-page-catalog-houseplans.component';
import { FilterselectionPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/filterselection-page-catalog-houseplans/filterselection-page-catalog-houseplans.component';
import { SortingPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/sorting-page-catalog-houseplans/sorting-page-catalog-houseplans.component';
import { TextseoPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/textseo-page-catalog-houseplans/textseo-page-catalog-houseplans.component';
import { ReviewedGlobalComponent } from './views/components/components_Global/reviewed-global/reviewed-global.component';
import { RecommendedGlobalComponent } from './views/components/components_Global/recommended-global/recommended-global.component';
import { DisplayviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/displayviews-page-catalog-houseplans/displayviews-page-catalog-houseplans.component';
import { BreadcrumbGlobalComponent } from './views/components/components_Global/breadcrumb-global/breadcrumb-global.component';
import { PaginationGlobalComponent } from './views/components/components_Global/pagination-global/pagination-global.component';
import { ProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/productcardviews-page-catalog-houseplans.component';
import { VerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { HorizontalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/horizontalproductcardview-productcardviews-page-catalog-houseplans/horizontalproductcardview-productcardviews-page-catalog-houseplans.component';
import { ViewpointVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/viewpoint-verticalproductcardview-productcardviews-page-catalog-houseplans/viewpoint-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { ImageVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/image-verticalproductcardview-productcardviews-page-catalog-houseplans/image-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { IdVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/id-verticalproductcardview-productcardviews-page-catalog-houseplans/id-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { TypeVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/type-verticalproductcardview-productcardviews-page-catalog-houseplans/type-verticalproductcardview-productcardviews-page-catalog-houseplans.component';

import { NameVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/name-verticalproductcardview-productcardviews-page-catalog-houseplans/name-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { PriceVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/price-verticalproductcardview-productcardviews-page-catalog-houseplans/price-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { RatingVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/rating-verticalproductcardview-productcardviews-page-catalog-houseplans/rating-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { DatahomeVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/datahome-verticalproductcardview-productcardviews-page-catalog-houseplans/datahome-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { DataenergyVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/dataenergy-verticalproductcardview-productcardviews-page-catalog-houseplans/dataenergy-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { VerifiedVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/verified-verticalproductcardview-productcardviews-page-catalog-houseplans/verified-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { EstimateVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/estimate-verticalproductcardview-productcardviews-page-catalog-houseplans/estimate-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { ClimateVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/climate-verticalproductcardview-productcardviews-page-catalog-houseplans/climate-verticalproductcardview-productcardviews-page-catalog-houseplans.component';

import { BottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/bottom-header-global.component';
import { TopHeaderGlobalComponent } from './views/components/components_Global/header-global/top-header-global/top-header-global.component';
import { CenterHeaderGlobalComponent } from './views/components/components_Global/header-global/center-header-global/center-header-global.component';
import { SavedBottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/saved-bottom-header-global/saved-bottom-header-global.component';
import { DiscountBottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/discount-bottom-header-global/discount-bottom-header-global.component';
import { DepartmentBottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/department-bottom-header-global/department-bottom-header-global.component';






@NgModule({
  declarations: [
    AppComponent,





    PageNotfoundGlobalComponent,
    PageMainGlobalComponent,
    PageContactGlobalComponent,
    PageBacketGlobalComponent,
    PageAgreementGlobalComponent,
    PageBonusGlobalComponent,
    PageRegistrationGlobalComponent,
    PagePartnershipGlobalComponent,
    PageAccountPersonalinfoGlobalComponent,
    PageAccountSecurityGlobalComponent,
    PageAccountSellerGlobalComponent,
    PageAccountBuilderGlobalComponent,
    PageAccountProjectGlobalComponent,
    PageMainHouseplansComponent,
    PageCategoryHouseplansComponent,
    HeaderGlobalComponent,
    FooterGlobalComponent,
    SidebarrightGlobalComponent,
    BannerAboveheaderGlobalComponent,
    RegionSelectFooterGlobalComponent,
    ShareSelectFooterGlobalComponent,
    SigninSelectFooterGlobalComponent,
    ScrolltotopGlobalComponent,
    InputSearchGlobalComponent,
    CategorymenuAllSelectHeaderGlobalComponent,
    CategorymenuHouseplansSelectHeaderGlobalComponent,
    CategorymenuBuildersSelectHeaderGlobalComponent,

    PageMainBuildersComponent,
    PageCategoryBuildersComponent,
    PageCardBuildersComponent,
    PageMainArchitectorsComponent,
    PageCategoryArchitectorsComponent,
    PageCardArchitectorsComponent,
    PageCategoryMaterialsComponent,
    PageMainMaterialsComponent,
    PageCardMaterialsComponent,
    PageCategorySellersComponent,
    PageMainSellersComponent,
    PageCardSellersComponent,
    PageCategoryShopsComponent,
    PageMainShopsComponent,
    PageCardShopsComponent,
    PageCatalogArchitectorsComponent,
    PageCatalogBuildersComponent,
    PageCatalogHouseplansComponent,
    PageCatalogMaterialsComponent,
    PageCatalogSellersComponent,
    PageCatalogShopsComponent,
    PageProductHouseplansComponent,


    ProductfilterleftpanelPageCatalogHouseplansComponent,
    ServicelinksrightpanelPageCatalogHouseplansComponent,

    FilterselectionPageCatalogHouseplansComponent,
    SortingPageCatalogHouseplansComponent,
    TextseoPageCatalogHouseplansComponent,
    ReviewedGlobalComponent,
    RecommendedGlobalComponent,
    DisplayviewsPageCatalogHouseplansComponent,
    BreadcrumbGlobalComponent,
    PaginationGlobalComponent,
    ProductcardviewsPageCatalogHouseplansComponent,
    VerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    HorizontalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    ViewpointVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    ImageVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    IdVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    TypeVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,

    NameVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    PriceVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    RatingVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    DatahomeVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    DataenergyVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    VerifiedVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    EstimateVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    ClimateVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,

    BottomHeaderGlobalComponent,
    TopHeaderGlobalComponent,
    CenterHeaderGlobalComponent,
    SavedBottomHeaderGlobalComponent,
    DiscountBottomHeaderGlobalComponent,
    DepartmentBottomHeaderGlobalComponent,




  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    MatIconModule,
    NgxPaginationModule,



  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
