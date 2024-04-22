// Angular Import
import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router'; // Import Router module

@Component({
  selector: 'app-default',
  templateUrl: './ins-manageclass.component.html',
  styleUrls: ['./ins-manageclass.component.scss']
})
export class InsManageClassComponent {
  copiedMap: { [key: string]: boolean } = {}; // Map to track copied state for each card

  copyTextToClipboard(cardName: string) {
    const textToCopy = this.getTextToCopy(cardName);
    const dummyTextarea = document.createElement('textarea');
    dummyTextarea.style.position = 'fixed';
    dummyTextarea.style.left = '-9999px';
    dummyTextarea.style.top = '-9999px';
    document.body.appendChild(dummyTextarea);
    dummyTextarea.value = textToCopy;
    dummyTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(dummyTextarea);
    this.copiedMap[cardName] = true;
    setTimeout(() => {
      this.copiedMap[cardName] = false; // Reset copied state after 2 seconds
    }, 2000);
  }

  getTextToCopy(cardName: string): string {
    switch (cardName) {
      case 'Zeplin':
        return 'Text to be copied for Zeplin card';
      case 'GitHub':
        return 'Text to be copied for GitHub card';
      case 'Figma':
        return 'Text to be copied for Figma card';
      case 'Zapier':
        return 'Text to be copied for Google Drive card';
      case 'Notion':
        return 'Text to be copied for Google Drive card';
      case 'Slack':
        return 'Text to be copied for Google Drive card';
      case 'Zendesk':
        return 'Text to be copied for Google Drive card';
      case 'Dropbox':
        return 'Text to be copied for Google Drive card';
      case 'Google Drive':
        return 'Text to be copied for Google Drive card';
      default:
        return '';
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('Manage Class component initialized');
  }

  navigateToManageStudent() {
    // Navigate relative to the current route using ActivatedRoute
    this.router.navigate(['/instructor/managestudent'], { relativeTo: this.route });
  }


  
}
