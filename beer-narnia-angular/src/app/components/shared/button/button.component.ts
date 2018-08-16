import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() class: string;
  @Input() type: string;
  @Input() link: string;
  @Input() iconClass: string;
  @Input() buttonClick: Function;

  constructor() {
  }

  ngOnInit() {
  }

}
