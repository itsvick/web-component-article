import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibComponent } from '../../../my-lib/src/lib/my-lib.component';

@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [MyLibComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const customElement = createCustomElement(MyLibComponent, { injector: this.injector });
    customElements.define('my-comp', customElement);
  }
}
