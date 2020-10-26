import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [MyLibComponent, TestComponentComponent],
  imports: [],
  exports: [MyLibComponent],
})
export class MyLibModule {}
