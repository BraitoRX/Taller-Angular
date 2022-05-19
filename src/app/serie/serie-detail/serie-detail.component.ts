import { Component, Input, OnInit } from '@angular/core';
import { serie } from '../serie';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css'],
})
export class SerieDetailComponent implements OnInit {
  @Input() selectedSerie!: serie;
  constructor() {}

  ngOnInit() {}
}
