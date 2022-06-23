import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FinancialService } from 'src/app/services/financial.service';
import { Indicator } from 'src/app/interfaces/indicator';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';


@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {

  @Input() indicatorModels: Array<Indicator>;

  public indicatorType: string;

  public isLoading: boolean;

  private dateQueryInit: string;
  private dateQueryEnd: string;

  private destroyed$: Subject<void>;

  constructor(private activeRoute: ActivatedRoute,
              private location: Location,
              private financialService: FinancialService,
              private toastr: ToastrService) {
    this.indicatorType = this.activeRoute.snapshot.params.type;

    this.dateQueryInit = '';
    this.dateQueryEnd = '';

    this.isLoading = true;

    this.destroyed$ = new Subject();
  }

  ngOnInit(): void {
    this.setDateQuery();
    this.loadDetailIndicator();
  }

  private loadDetailIndicator(): void {

    this.financialService.getDetailIndicatorByRange(this.indicatorType, this.dateQueryEnd, this.dateQueryInit)
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

      this.dateQueryInit = moment().format('YYYY-MM-DD');
      this.dateQueryEnd = moment().subtract(10, 'days').format('YYYY-MM-DD');

    } else {

      this.dateQueryInit = moment().format('yyyy');
    }
  }


  public onClickBack(): void {
    this.location.back();
  }
}
