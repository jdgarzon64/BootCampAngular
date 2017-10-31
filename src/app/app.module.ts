import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleBootCampModule } from './module-boot-camp/module-boot-camp.module';
import { AppComponent } from './app.component';
import { PipeMultiplicationPipe } from './pipe-multiplication.pipe';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './post.service';


const appRoutes: Routes = [{ path: 'Test', component: TestComponent }];

@NgModule({
  declarations: [
    AppComponent,
    PipeMultiplicationPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ModuleBootCampModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent],

})
export class AppModule {}
