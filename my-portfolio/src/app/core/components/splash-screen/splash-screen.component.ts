import { Component, ElementRef, ViewChild } from '@angular/core';
import { SplashScreenService } from './splash-screen.service';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss',
  host: {ngSkipHydration: 'true'}
})
export class SplashScreenComponent {
  @ViewChild('splashScreen', { static: true })
  splashScreen!: ElementRef;

  constructor(
    private el: ElementRef,
    private splashScreenService: SplashScreenService
  ) {}

  ngOnInit(): void {
    this.splashScreenService.init(this.splashScreen);
  }
}
