import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Indicator } from 'src/app/interfaces/indicator';
import { FinancialService } from 'src/app/services/financial.service';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit, OnDestroy {

  public indicatorModels: Array<Indicator>;
  public indicatorType: string;

  private destroyed$: Subject<void>;

  private dateQuery: string;

  public isLoading: boolean;

  constructor(private activeRoute: ActivatedRoute,
              private financialService: FinancialService,
              private location: Location,
              private toastr: ToastrService) {
    this.indicatorModels = [];
    this.indicatorType = this.activeRoute.snapshot.params.type;

    this.destroyed$ = new Subject();

    this.dateQuery = '';
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.setDateQuery();
    this.loadDetailIndicator();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private loadDetailIndicator(): void {
    this.financialService.getDetailIndicators(this.indicatorType, this.dateQuery)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (response: Array<Indicator>) => {
          this.indicatorModels = response;
        },
        error: (err) => {
          this.toastr.error('Please wait a few minutes before you try again.', 'Error');
          this.onClickBack();

          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

  private setDateQuery(): void {

    if (this.indicatorType === 'Dollar' || this.indicatorType === 'Euro' || this.indicatorType === 'UF') {

      this.dateQuery = moment().format('YYYY/MM');

    } else {

      this.dateQuery = moment().format('yyyy');
    }
  }

  public onClickBack(): void {
    this.location.back();
  }
}
