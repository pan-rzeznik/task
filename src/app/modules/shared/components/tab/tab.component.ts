import { TabBodyComponent } from './../tab-body/tab-body.component';
import {
  Component,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements AfterContentInit {
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
        tab.changeTabVisibility(false);
      });
      tabs[this.activeIndex].changeTabVisibility(true);
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
        tabs[index].changeTabVisibility(true);
        this.activeIndex = index;
        break;
      }
    }
  }
}
