
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
message = 'Hello parent...this is child 1';
msg:string;
subscription: Subscription;

  @Input() ChildMessage : string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(msg => this.msg = msg)

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
