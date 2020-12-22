import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  Renderer2,
  OnInit,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
        citizenship: '',
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
