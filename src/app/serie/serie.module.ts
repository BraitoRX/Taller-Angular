import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieService } from './serie.service';
import { FormsModule } from '@angular/forms';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [SerieListComponent,SerieDetailComponent],
  exports: [SerieListComponent],
  providers: [SerieService]
})
export class SerieModule { }
