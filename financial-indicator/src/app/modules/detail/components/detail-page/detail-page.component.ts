import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Indicator } from 'src/app/interfaces/indicator';
import { FinancialService } from 'src/app/services/financial.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  public indicatorModels: Array<Indicator>;

  constructor(private activeRoute: ActivatedRoute,
              private financialService: FinancialService) {
    this.indicatorModels = [];
  }

  ngOnInit(): void {
    
    const params = this.activeRoute.snapshot.params.type;

    this.financialService.getDetailIndicators(params, '2010/10').subscribe({
      next: (response) => {
        console.log(response);
        this.indicatorModels = response;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

}
