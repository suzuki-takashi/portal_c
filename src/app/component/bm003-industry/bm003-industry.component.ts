import { Component, OnInit } from '@angular/core';

import { Industry } from '../../class/bm003-industry';
//import { INDUSTRIES } from '../../mock-industry';
import { IndustryService } from '../../service/industry.service';

@Component({
  selector: 'app-bm003-industry',
  templateUrl: './bm003-industry.component.html',
  styleUrls: ['./bm003-industry.component.less']
})
export class IndustryComponent implements OnInit {

  industries: Industry[] = [];

  constructor(private industryService: IndustryService) {}

  ngOnInit(): void {
    this.getIndustries();
  }

  getIndustries(): void {
    this.industryService.getIndustries()
    .subscribe(industries => this.industries = industries);
  }

}
