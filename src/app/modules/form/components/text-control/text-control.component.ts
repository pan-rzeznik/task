import {
  Component,
  Input,
  ViewChild,
  Renderer2,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextControlComponent {
  @Input() label: string;
  @Input() formControl: FormControl;
  smallLabel = false;

  @ViewChild('input') input: any;

  constructor(
    private readonly renderer: Renderer2,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.listenOnFocus();
    this.listenOnBlur();
  }

  private listenOnFocus(): void {
    const input = this.input['nativeElement'];
    this.renderer.listen(input, 'focus', (e: any) => {
      if (this.formControl.value.length === 0) {
        this.smallLabel = true;
        this.cd.markForCheck();
      }
    });
  }
  private listenOnBlur(): void {
    const input = this.input['nativeElement'];
    this.renderer.listen(input, 'blur', (e: any) => {
      if (this.formControl.value === '' || this.formControl.value === null) {
        this.smallLabel = false;
        this.cd.markForCheck();
      }
    });
  }
}
