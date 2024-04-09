import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements AfterViewInit {
  all: number;
  js: number;
  HC: number;
  constructor() {
    this.all = 1;
    this.js = 0;
    this.HC = 0;
  }
  ngAfterViewInit(): void {
    this.all = 1;
    this.js = 0;
    this.HC = 0;
    console.log(this.all, this.js, this.HC);
  }

  showAll() {
    this.all = 1;
    this.js = 1;
    this.HC = 1;
  }
  showJs() {
    this.all = 0;
    this.js = 1;
    this.HC = 0;
  }
  showHC() {
    this.all = 0;
    this.js = 0;
    this.HC = 1;
  }
}
