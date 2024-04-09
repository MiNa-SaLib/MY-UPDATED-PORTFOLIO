import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  input,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('edit') edit!: ElementRef;
  isB = signal(false);
  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isB.set(isPlatformBrowser(platformId));
  }
  ngAfterViewInit(): void {
    if (this.isB()) {
      let title = 'Front-End Developer';
      let i = 0;

      setInterval(() => {
        if (i >= 0 && i <= title.length) {
          this.edit.nativeElement.textContent += title[i];
          i++;
        }
        if (i > title.length) {
          i = 0;
          this.edit.nativeElement.textContent = ``;
        }
      }, 200);
    }
  }
  ngOnInit(): void {}
}
