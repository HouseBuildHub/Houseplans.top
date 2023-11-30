import { Component } from '@angular/core';

@Component({
  selector: 'app-department-bottom-header-global',
  templateUrl: './department-bottom-header-global.component.html',
  styleUrls: ['./department-bottom-header-global.component.css']
})
export class DepartmentBottomHeaderGlobalComponent {

 constructor() {
    for (const item of this.menuItems) {
      this.displayComponent[item.specialValue] = false;
    }
  }

  displayComponent: { [key: string]: boolean } = {};

  menuItems = [
    { name: 'Houseplans', specialValue: 'houseplans' },
    { name: 'Builders', specialValue: 'builders' },
    { name: 'Architects & Designers', specialValue: 'architects' },
    { name: 'Sellers', specialValue: 'sellers' },
    { name: 'Materials', specialValue: 'materials' },
    { name: 'Shops', specialValue: 'shops' },
  ];

  showComponent(componentName: string) {
    this.displayComponent[componentName] = true;
  }

  hideComponent(componentName: string) {
    this.displayComponent[componentName] = false;
  }

}



