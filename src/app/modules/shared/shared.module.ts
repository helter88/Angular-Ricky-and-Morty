import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from 'src/app/modules/shared/card/card.component';
import { StarSvgComponent } from 'src/app/components/star-svg/star-svg.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    CardComponent,
    StarSvgComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, ContentComponent, CardComponent, StarSvgComponent],
})
export class SharedModule {}
