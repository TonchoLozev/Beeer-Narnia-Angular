import {Component, Input, OnInit} from '@angular/core';
import {Beer} from '../../../models/beer.model';

@Component({
  selector: 'app-beer-details-editable',
  templateUrl: './beer-details-editable.component.html',
  styleUrls: ['./beer-details-editable.component.css']
})
export class BeerDetailsEditableComponent implements OnInit {
  @Input() beer: Beer;

  constructor() { }

  ngOnInit() {
  }

}
