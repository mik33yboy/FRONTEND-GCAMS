import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './sys-maintenance.component.html',
  styleUrls: ['./sys-maintenance.component.scss']
})
export class SysMaintenance {}
