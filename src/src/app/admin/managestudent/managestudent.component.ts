import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.scss']
})
export class SysManageStudentsComponent {
  isTilesView = false;

  showTilesView() {
    this.isTilesView = true;
  }

  showTableView() {
    this.isTilesView = false;
  }
}
