import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CalloutModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  ModalModule,
  SharedModule,
  TableModule,
  UtilitiesModule
} from '@coreui/angular';

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { FormsRoutingModule } from './forms-routing.module';
import { RangesComponent } from './ranges/ranges.component';
import { FloatingLabelsComponent } from './floating-labels/floating-labels.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { SelectComponent } from './select/select.component';
import { ChecksRadiosComponent } from './checks-radios/checks-radios.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { LayoutComponent } from './layout/layout.component';
import { ValidationComponent } from './validation/validation.component';
import { BaseRoutingModule } from '../base/base-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DocsCalloutComponent } from '@docs-components/docs-callout/docs-callout.component';


@NgModule({
  declarations: [
    RangesComponent,
    FloatingLabelsComponent,
    FormControlsComponent,
    SelectComponent,
    ChecksRadiosComponent,
    InputGroupsComponent,
    LayoutComponent,
    ValidationComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    BaseRoutingModule,
    AccordionModule,
    BadgeModule,
    ButtonModule,
    CollapseModule,
    BreadcrumbModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    TableModule,
    ListGroupModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    UtilitiesModule,
    CalloutModule,
    ModalModule
  ]
})
export class CoreUIFormsModule {
}
