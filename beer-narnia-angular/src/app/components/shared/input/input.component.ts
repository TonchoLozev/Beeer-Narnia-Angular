import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() name: string;
  @Input() class: string;
  @Input() type: string;
  @Input() iconClass: string;
  @Input() iconClick: Function;
  @Input() iconDownUp: Function;
  @Input() iconLeave: Function;
  @Input() error: boolean;

  @Input() value: string;
  @Output() setValue = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  setInput() {
    this.setValue.emit(this.value);
  }

}
