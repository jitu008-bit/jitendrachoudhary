import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './testcomponent/test.component';
import { TestPipePipe } from './test-pipe.pipe';

@NgModule({
  declarations: [
    TestComponent,
    
    AppComponent,
         TestPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
