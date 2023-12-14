
import { Component, OnInit } from '@angular/core';



@Component({
  selector:
    'app-id-verticalproductcardview-productcardviews-page-catalog-houseplans',
  templateUrl:
    './id-verticalproductcardview-productcardviews-page-catalog-houseplans.component.html',
  styleUrls: [
    './id-verticalproductcardview-productcardviews-page-catalog-houseplans.component.css',
  ],

})

export class IdVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent
  implements OnInit
{
  id = 100;
  type = 'bbb';

  constructor() {}

  ngOnInit() {
    this.id = 998;
    this.type = 'ZEH';
  }

  addToFavorites() {
    this.id = 10000000;
  }

}

