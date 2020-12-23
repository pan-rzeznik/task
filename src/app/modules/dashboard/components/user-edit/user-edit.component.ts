import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  Renderer2,
  OnInit,
} from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TableObject } from 'src/app/modules/shared/components/table/table.component';

const mockData: TableObject[] = [
  {
    rowName: 'Movies',
    nestedRows: [
      { name: 'Script', state: false },
      { name: 'Props', state: false },
      { name: 'Scenes', state: false },
      { name: 'Money', state: false },
      { name: 'Stunts', state: false },
    ],
  },
];
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditComponent implements OnInit {
  tableData = mockData;
  tableColumns = ['Object', 'Action'];
  form: FormGroup;
  roleControl = new FormControl([{ id: 1, role: 'Developer', salary: 1000 }]);
  dataSource = [
    { id: 1, name: 'Polska' },
    { id: 2, name: 'Niemcy' },
    { id: 3, name: 'Ukraina' },
    { id: 4, name: 'Rosja' },
  ];
  roleDataSource = [
    { id: 1, role: 'Developer', salary: 1000 },
    { id: 2, role: 'Designer', salary: 999 },
    { id: 3, role: 'Menager', salary: 1001 },
    { id: 4, role: 'CEO', salary: 1002 },
    { id: 5, role: 'Tester', salary: 998 },
  ];
  @ViewChild('form') formElement: HTMLFormElement;
  constructor(
    private readonly fb: FormBuilder,
    private readonly renderer: Renderer2
  ) {}

  get personal(): any {
    return this.form.get('personal');
  }
  get contact(): any {
    return this.form.get('contact');
  }

  ngOnInit(): void {
    this.initForm();
  }

  submitForm(): void {
    const fakeSubmit = this.renderer.createElement('input');
    this.renderer.setAttribute(fakeSubmit, 'type', 'submit');
    this.renderer.setStyle(fakeSubmit, 'visibility', 'hidden');
    this.renderer.setStyle(fakeSubmit, 'opacity', 0);
    this.renderer.setStyle(fakeSubmit, 'width', 0);
    this.renderer.setStyle(fakeSubmit, 'height', 0);
    this.renderer.setStyle(fakeSubmit, 'position', 'absolute');
    this.renderer.appendChild(this.formElement['nativeElement'], fakeSubmit);
    const listener = this.renderer.listen(
      this.formElement['nativeElement'],
      'submit',
      (e: Event) => {
        e.preventDefault();
      }
    );
    fakeSubmit.click();
    listener();
    this.renderer.removeChild(this.formElement['nativeElement'], fakeSubmit);
  }

  private initForm(): void {
    this.form = this.fb.group({
      personal: this.fb.group({
        name: '',
        lastName: '',
        birthdate: '',
        citizenship: new FormControl([
          { id: 1, name: 'Polska' },
          { id: 2, name: 'Niemcy' },
        ]),
        photo: '',
      }),
      contact: this.fb.group({
        instagram: '',
        email: '',
        facebook: '',
        twitter: '',
      }),
    });
  }
}
