import { TabBodyComponent } from './../tab-body/tab-body.component';
import {
  Component,
  ContentChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  activeIndex = 0;
  labels: any;

  @ContentChildren(TabBodyComponent) tabs: QueryList<TabBodyComponent>;

  ngAfterContentInit(): void {
    this.setLabels();
    this.setInitialActiveTab();
  }

  changeTab(index: number): void {
    const tabs: TabBodyComponent[] = this.tabs['_results'];
    this.activeIndex = index;
    if (tabs.length > 0) {
      tabs.forEach((tab: TabBodyComponent) => {
        tab.tabVisible = false;
      });
      tabs[this.activeIndex].tabVisible = true;
    }
  }

  private setLabels(): void {
    this.labels = (this.tabs['_results'] as TabBodyComponent[]).map(
      (tab) => new Object({ label: tab.label, disabled: tab.disabled })
    );
  }

  private setInitialActiveTab(): void {
    const tabs = this.tabs['_results'] as TabBodyComponent[];
    for (let index = 0; index < tabs.length; index++) {
      if (!tabs[index].disabled) {
        tabs[index].tabVisible = true;
        this.activeIndex = index;
        break;
      }
    }
  }
}
