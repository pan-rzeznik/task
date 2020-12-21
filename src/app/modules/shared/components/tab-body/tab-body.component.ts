import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.scss'],
})
export class TabBodyComponent implements OnInit {
  tabVisible = false;

  @Input() disabled: boolean;
  @Input() label: string;
  constructor() {}

  ngOnInit() {}
}
