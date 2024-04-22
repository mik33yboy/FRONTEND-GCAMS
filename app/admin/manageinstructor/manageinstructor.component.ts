import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manageinstructor.component.html',
  styleUrls: ['./manageinstructor.component.scss']
})
export class SysManageInstructorComponent {
  isTilesView = false;

  showTilesView() {
    this.isTilesView = true;
  }

  showTableView() {
    this.isTilesView = false;
  }
}
