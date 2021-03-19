import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, filter, map } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Layout } from '@app/layout.enum';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/layout.service';
import { getCurrentRouteConfig } from '@shared/utilities/routes/get-current-route-config';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  Layout = Layout;
  loading$: Observable<boolean> = this.layoutService.loading$;
  layout$: Observable<Layout> = this.layoutService.layout$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loadingBarService: LoadingBarService,
    private layoutService: LayoutService
  ) {
    this.constructorLoadingBar();
  }

  ngOnInit(): void {
    // Start loading screen
    this.layoutService.setLoading(true);
  }

  ngAfterViewInit(): void {
    this.checkEndLoading();

    this.checkLayout();

    // this.authService.accessToken$.pipe(untilDestroyed(this)).subscribe(token => {
    //   if (token && this.accessToken !== token) {
    //     this.accessToken = token;
    //     this.authService.fetchAuthenticatedUser().pipe(take(1)).subscribe();
    //   }
    // });
  }

  constructorLoadingBar(): void {
    this.router.events
      .pipe(
        filter(evt => evt instanceof NavigationStart),
        debounceTime(500),
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.startLoadingBar();
      });
  }

  checkEndLoading(): void {
    this.layout$
      .pipe(
        filter(v => !!v),
        debounceTime(500),
        untilDestroyed(this)
      )
      .subscribe(_ => {
        // End loading screen
        this.layoutService.setLoading(false);
        this.stopLoadingBar();
      });
  }

  checkLayout(): void {
    this.layout$ = this.router.events.pipe(
      filter(
        evt =>
          evt instanceof NavigationEnd ||
          evt instanceof NavigationError ||
          evt instanceof NavigationCancel
      ),
      // Update layout. Default is main layout.
      map(_ => {
        const layout = getCurrentRouteConfig(this.route)?.layout || Layout.MAIN;
        this.layoutService.setLayout(layout);
        return layout;
      })
    );
  }

  startLoadingBar(): void {
    this.loadingBarService.useRef().start();
  }

  stopLoadingBar(): void {
    this.loadingBarService.useRef().complete();
  }
}
