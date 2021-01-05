import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from "./child/child.component";


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMessage : string;
  @ViewChild(ChildComponent) child:ChildComponent;
  constructor() { }

  message:string;
  message2:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }
  ngOnInit(): void {
    this.parentMessage ="Hello Child...good morning";

  }

  receiveMessage($event) {
    this.message2 = $event
  }
}
