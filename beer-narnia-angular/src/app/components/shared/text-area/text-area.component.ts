import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  @Input() label: string;
  @Input() name: string;
  @Input() class: string;
  @Input() type: string;
  @Input() placeholder:string;
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
