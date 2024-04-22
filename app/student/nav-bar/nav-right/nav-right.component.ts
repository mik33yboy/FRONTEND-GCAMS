// Angular import
import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class IINavRightComponent {
  @ViewChild('dialog') dialog: ElementRef;
  @ViewChild('videoPlayer') videoPlayer: ElementRef

  constructor() { }

  showFAQ() {
    this.dialog.nativeElement.showModal();
  }
  closeDialog() {
    this.dialog.nativeElement.close();
    // Pause the video when the dialog is closed
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.pause();
    }
  }
}
