import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { ListComponent } from './articles/list/list.component';
import { DetailComponent } from './articles/detail/detail.component';
import { DeleteComponent } from './articles/delete/delete.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './articles/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    DeleteComponent,
    AppComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCsvParserModule,
    FormsModule,
    ScrollingModule,
    NgChartsModule,
    NgbDropdownModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
