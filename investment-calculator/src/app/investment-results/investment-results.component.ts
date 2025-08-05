import { Component, computed, inject, input, Input, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

/*

import { type InvestmentResults } from '../investment-results.model';
import { CurrencyPipe } from '@angular/common';

*/

@Component({
  selector: 'app-investment-results',
  standalone: false,
  // imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  /*

  @Input() results?: InvestmentResults[];
  results = input<InvestmentResults[]>();

  */

  private investmentService = inject(InvestmentService);
  
  /*

  get results() {
    return this.investmentService.resultsData;
  }

  results = this.investmentService.resultsData.asReadonly();

  */

  results = computed(() => this.investmentService.resultsData());

}