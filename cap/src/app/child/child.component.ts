import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()myInput:string;
  @Output()myOutput:EventEmitter<string>=new EventEmitter();
  myOutputText="hi,am ur child";

  sendData(){
    this.myOutput.emit(this.myOutputText);
  }

  constructor() { }

  ngOnInit() {
    console.log(this.myInput);
  }

}
