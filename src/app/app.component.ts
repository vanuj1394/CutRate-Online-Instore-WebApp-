import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Asset-mang';
  value='';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

showMe:any=false;
iFrameURL:any="google.com";
constructor(private breakpointObserver: BreakpointObserver,
  private sanitizer:DomSanitizer,
  private router: Router) {}
AssetMangAndOperation(){
  this.showMe=true;
  this.router
  this.router.navigate(['/Asset'])
  //this.iFrameURL = this.sanitizer.bypassSecurityTrustResourceUrl('/Asset');
}

}
