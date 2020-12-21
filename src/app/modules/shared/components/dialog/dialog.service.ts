import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
} from '@angular/core';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendDialogComponentToBody(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      DialogComponent
    );
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;
  }
  removeDialogComponentFromBody(): void {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
}
