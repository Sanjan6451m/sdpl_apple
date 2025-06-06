import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SolutionsComponent } from './components/pages/solutions/solutions.component';
import { SolutionsDetailsComponent } from './components/pages/solutions-details/solutions-details.component';
import { CaseStudiesComponent } from './components/pages/case-studies/case-studies.component';
import { CaseStudiesDetailsComponent } from './components/pages/case-studies-details/case-studies-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EssilorComponent } from './components/pages/essilor/essilor.component';
import { RemidioComponent } from './components/pages/remidio/remidio.component';
import { WestPharmaComponent } from './components/pages/west-pharma/west-pharma.component';
import { MsritComponent } from './components/pages/msrit/msrit.component';
import { JainComponent } from './components/pages/jain/jain.component';
import { SowparnikaComponent } from './components/pages/sowparnika/sowparnika.component';
import { PresalesSupportComponent } from './components/pages/presales-support/presales-support.component';
import { DemoPocComponent } from './components/pages/demo-poc/demo-poc.component';
import { BuyBackComponent } from './components/pages/buy-back/buy-back.component';
import { OnsiteSupportComponent } from './components/pages/onsite-support/onsite-support.component';
import { PartneringComponent } from './components/pages/partnering/partnering.component';
import { PurchaseProgramComponent } from './components/pages/purchase-program/purchase-program.component';
import { OurVisionComponent } from './components/pages/our-vision/our-vision.component';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';
import { OurApproachComponent } from './components/pages/our-approach/our-approach.component';
import { PostSalesComponent } from './components/pages/post-sales/post-sales.component';
import { AnnualMaintenanceComponent } from './components/pages/annual-maintenance/annual-maintenance.component';
import { PerIncidentComponent } from './components/pages/per-incident/per-incident.component';
import { MacOsBasicComponent } from './components/pages/mac-os-basic/mac-os-basic.component';
import { MacOsAdvancedComponent } from './components/pages/mac-os-advanced/mac-os-advanced.component';
import { ItTrainingComponent } from './components/pages/it-training/it-training.component';
import { DedicatedEngComponent } from './components/pages/dedicated-eng/dedicated-eng.component';
import { IosEssentialComponent } from './components/pages/ios-essential/ios-essential.component';
import { IosTechnicalComponent } from './components/pages/ios-technical/ios-technical.component';
import { AppleBusinessComponent } from './components/pages/apple-business/apple-business.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { RequestServiceComponent } from './components/pages/request-service/request-service.component';
import { ActivityComponent } from './components/pages/activity/activity.component';
import { TrainingComponent } from './components/pages/training/training.component';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { OurServicesComponent } from './components/pages/our-services/our-services.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { AppleDeploymentComponent } from './components/pages/apple-deployment/apple-deployment.component';
import { AppleFinancingComponent } from './components/pages/apple-financing/apple-financing.component';
import { AppleMaintenanceComponent } from './components/pages/apple-maintenance/apple-maintenance.component';
import { AppleTrainingComponent } from './components/pages/apple-training/apple-training.component';
import { AppleEcosystemComponent } from './components/pages/apple-ecosystem/apple-ecosystem.component';
import { AppleProgramComponent } from './components/pages/apple-program/apple-program.component';
import { MacbookAirComponent } from './components/pages/macbook-air/macbook-air.component';
import { NetworkingComponent } from './components/pages/networking/networking.component';
import { AppleEnterpriseComponent } from './components/pages/apple-enterprise/apple-enterprise.component';
import { MdmComponent } from './components/pages/mdm/mdm.component';
import { AVSolutionsComponent } from './components/pages/avsolutions/avsolutions.component';
import { MobilityComponent } from './components/pages/mobility/mobility.component';
import { LeasingComponent } from './components/pages/leasing/leasing.component';
import { MacbookProComponent } from './components/pages/macbook-pro/macbook-pro.component';
import { Iphone16Component } from './components/pages/iPhone/iphone16/iphone16.component';
import { IpadAirComponent } from './components/pages/ipad-air/ipad-air.component';
import { AirpodsMaxComponent } from './components/pages/airpods-max/airpods-max.component';
import { Iphone16eComponent } from './components/pages/iPhone/iphone16e/iphone16e.component';
// import { Iphone16proComponent } from './components/pages/iphone16pro/iphone16pro.component';
import { ImpetusComponent } from './components/pages/impetus/impetus.component';
import { EmpPurcProgComponent } from './components/pages/emp-purc-prog/emp-purc-prog.component';
import { DriveInnovationComponent } from './components/pages/drive-innovation/drive-innovation.component';
import { ITStrategyComponent } from './components/pages/it-strategy/it-strategy.component';
import { IpadProComponent } from './components/pages/ipad-pro/ipad-pro.component';
import { IpadA16Component } from './components/pages/ipad-a16/ipad-a16.component';
import { AppleUpgradeComponent } from './components/pages/apple-upgrade/apple-upgrade.component';
import { ImacComponent } from './components/pages/imac/imac.component'; 
import { MacMiniComponent } from './components/pages/mac-mini/mac-mini.component';
import { AppleWatchComponent } from './components/pages/apple-watch/apple-watch.component';
import { AppleProgramscreenComponent } from './components/pages/apple-programscreen/apple-programscreen.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { EnterprisePageComponent } from './components/pages/enterprise-page/enterprise-page.component';
// import { Iphone15Component } from './components/pages/iPhone/iphone15/iphone15.component';
import { EnterpriseNewComponent } from './components/pages/enterprise-new/enterprise-new.component';
import { ThankyoupageComponent } from './components/pages/thankyoupage/thankyoupage.component';
import { SuperiorEnterpriseComponent } from './components/pages/superior-enterprise/superior-enterprise.component';
// import { IPhone16newComponent } from './components/pages/iPhone/i-phone16new/i-phone16new.component';
// import { IPadProComponent } from './components/pages/iPad/i-pad-pro/i-pad-pro.component';
// import { IPadAirComponent } from './components/pages/iPad/i-pad-air/i-pad-air.component';
// import { IPhone16proComponent } from './components/pages/iPhone/i-phone16pro/i-phone16pro.component';
// import { Iphone16pro1Component } from './components/pages/iphone16pro/iphone16pro.component';
import { ApplecareComponent } from './components/pages/applecare/applecare.component';
import { Iphone16pro1Component } from './components/pages/iPhone/iphone16pro/iphone16pro.component';
import { TcoPageComponent } from './components/pages/tco-page/tco-page.component';
import { MacdoesComponent } from './components/pages/macdoes/macdoes.component';
import { MacDeveloperComponent } from './components/pages/mac-developer/mac-developer.component';
import { MBA15inComponent } from './components/pages/Mac/mba15in/mba15in.component';
import { MBP1416inComponent } from './components/pages/Mac/mbp1416in/mbp1416in.component';
import { Ipad10gComponent } from './components/pages/iPad/ipad10g/ipad10g.component';
import { IPadAirNewComponent } from './components/pages/iPad/i-pad-air-new/i-pad-air-new.component';
import { IPadProNewComponent } from './components/pages/iPad/i-pad-pro-new/i-pad-pro-new.component';
import { IPhone16PromaxComponent } from './components/pages/iPhone/i-phone16-promax/i-phone16-promax.component';
import { IPhone16eNewComponent } from './components/pages/iPhone/i-phone16e-new/i-phone16e-new.component';
import { MacstudioComponent } from './components/pages/Mac/macstudio/macstudio.component';
import { Iphone15Component } from './components/pages/iPhone/iphone15/iphone15.component';
import { Iphone15proComponent } from './components/pages/iPhone/iphone15pro/iphone15pro.component';
import { DevpowerhouseComponent } from './components/pages/devpowerhouse/devpowerhouse.component';

// Products Pages

// Products Pages

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'home-one', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'solutions', component: SolutionsComponent},
    {path: 'solutions-details', component: SolutionsDetailsComponent},
    {path: 'case-studies', component: CaseStudiesComponent},
    {path: 'case-studies-details', component: CaseStudiesDetailsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'team', component: TeamComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'terms-condition', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'essilor', component: EssilorComponent},
    {path: 'remidio', component: RemidioComponent},
    {path: 'westpharma', component: WestPharmaComponent},
    {path: 'msrit', component: MsritComponent},
    {path: 'jain', component: JainComponent},
    {path: 'sowparnika', component: SowparnikaComponent},
    {path: 'presales-support', component: PresalesSupportComponent},
    {path: 'demo', component: DemoPocComponent},
    {path: 'buy-back', component: BuyBackComponent},
    {path: 'onsite-support', component: OnsiteSupportComponent},
    {path: 'partnering', component: PartneringComponent},
    {path: 'purchase-program', component: PurchaseProgramComponent},
    {path: 'ourvision', component: OurVisionComponent},
    {path: 'ourteam', component: OurTeamComponent},
    {path: 'ourapproach', component: OurApproachComponent},
    {path: 'postsales', component: PostSalesComponent},
    {path: 'annualmaintenance', component: AnnualMaintenanceComponent},
    {path: 'perincident', component: PerIncidentComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'macOs-basic', component: MacOsBasicComponent},
    {path: 'macOs-advanced', component: MacOsAdvancedComponent},
    {path: 'it-training', component: ItTrainingComponent},
    {path: 'dedicated-engineer', component: DedicatedEngComponent},
    {path: 'ios-essential', component: IosEssentialComponent},
    {path: 'ios-technical', component: IosTechnicalComponent},
    {path: 'apple-business', component: AppleBusinessComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'request-service', component: RequestServiceComponent},
    {path: 'activity', component: ActivityComponent},
    {path: 'training', component: TrainingComponent},
    {path: 'dummy-page', component: DummyPageComponent},
    {path: 'our-services', component: OurServicesComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'apple-deployment', component: AppleDeploymentComponent},
    {path: 'apple-financing', component: AppleFinancingComponent},
    {path: 'apple-maintenance', component: AppleMaintenanceComponent},
    {path: 'apple-training', component: AppleTrainingComponent},
    {path: 'apple-ecosystem', component: AppleEcosystemComponent},
    {path: 'apple-program', component: AppleProgramComponent},
    {path: 'macbook-air', component: MacbookAirComponent},
    {path: 'networking', component: NetworkingComponent},
    {path: 'apple-enterprise', component: AppleEnterpriseComponent},
    {path: 'mdm', component: MdmComponent},
    {path: 'avsolution', component: AVSolutionsComponent},
    {path: 'mobility', component: MobilityComponent},
    {path: 'leasing', component: LeasingComponent},
    {path: 'macbook-pro', component: MacbookProComponent},
    {path: 'iphone-16', component: Iphone16Component},
    {path: 'ipad-air', component: IpadAirComponent},
    {path: 'airpods-max', component: AirpodsMaxComponent},  
    {path: 'iphone-16e', component: Iphone16eComponent},
    {path: 'impetus', component: ImpetusComponent},
    {path: 'emp-purchase-program', component: EmpPurcProgComponent},
    {path: 'drive-innovation', component: DriveInnovationComponent},
    {path: 'IT-strategy', component: ITStrategyComponent},
    {path: 'ipad-pro', component: IpadProComponent},
    {path: 'ipad-a16', component: IpadA16Component},
    {path: 'apple-upgrade', component: AppleUpgradeComponent},
    {path: 'imac', component: ImacComponent},
    {path: 'mac-mini', component: MacMiniComponent},
    {path: 'apple-watch', component: AppleWatchComponent},
    {path: 'apple-programscreen', component: AppleProgramscreenComponent},
    {path: 'enterprise', component: EnterprisePageComponent},
    // Here add new pages component
    // { path: 'iphone15', component: Iphone15Component },
    { path: 'enterprise-new', component: EnterpriseNewComponent },
    { path: 'thank-you', component: ThankyoupageComponent },
    { path: 'superior-enterprise', component: SuperiorEnterpriseComponent },
    // { path: 'iphone16new', component: IPhone16newComponent },
    // { path: 'iPadPro', component: IPadProComponent },
    // { path: 'iPadAir', component: IPadAirComponent },
    // { path: 'iPhone16pro', component: IPhone16proComponent },
    { path: 'iphone-16pro', component: Iphone16pro1Component },
    { path: 'applecare', component: ApplecareComponent },
    { path: 'tco', component: TcoPageComponent },
    { path: 'macdoes', component: MacdoesComponent },
    { path: 'mac-developer', component: MacDeveloperComponent },

    // Products Pages
    { path: 'MBA15', component: MBA15inComponent },
    { path: 'MBP1416', component: MBP1416inComponent },
    { path: 'macstudio', component: MacstudioComponent },

    { path: 'iPad10', component: Ipad10gComponent },
    { path: 'iPadAir', component: IPadAirNewComponent },
    { path: 'iPadPro', component: IPadProNewComponent },

    { path: 'iPhone15', component: Iphone15Component },
    { path: 'iPhone15Pro', component: Iphone15proComponent },
    { path: 'iPhone16', component: Iphone16Component },
    { path: 'iPhone16e', component: IPhone16eNewComponent },
    { path: 'iPhone16Promax', component: IPhone16PromaxComponent },
    { path: 'devpowerhouse', component: DevpowerhouseComponent },
    // Products Pages

    // Embedded Pages
    { path: 'embedded/MBA/mba_air', component: MBA15inComponent },
    // Embedded Pages

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', })],
    exports: [RouterModule]
})
export class AppRoutingModule { }