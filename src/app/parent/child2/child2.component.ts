//child to parent data sharing using output and eventemitter

import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnDestroy {
message2 = "Hello Parent...this is child 2";
msg:string;
subscription:Subscription;

@Output() messageEvent = new EventEmitter<string>();

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(msg => this.msg = msg)
  }

  sendMessage() {
    this.messageEvent.emit(this.message2)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.data.changeMessage("Hello from child2")
  }
}
