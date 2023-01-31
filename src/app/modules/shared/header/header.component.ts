import { Component } from '@angular/core';
import { SearchParamsService } from 'src/app/services/search-params.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private searchParam: SearchParamsService) {}

  ngOnInit() {
    this.searchParam.getSearch().subscribe((val) => {
      console.log(val);
    });
  }
}
