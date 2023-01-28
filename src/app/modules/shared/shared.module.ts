import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from 'src/app/modules/shared/card/card.component';

@NgModule({
  declarations: [HeaderComponent, ContentComponent, CardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ContentComponent, CardComponent],
})
export class SharedModule {}
