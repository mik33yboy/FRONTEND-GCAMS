// Angular import
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class IINavLeftComponent {
  // public props
  @Output() NavCollapsedMob = new EventEmitter();
}
