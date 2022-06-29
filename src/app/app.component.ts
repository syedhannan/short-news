import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NewsHomeComponent } from './news-home/news-home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  category: any = 'business';
  country: any = 'us';
  @ViewChild(NewsHomeComponent) newComp!: NewsHomeComponent;
  title = 'news';

  setCategory(category: any) {
    // this.category = this.newComp.categoryIs;
    this.category = category;

    this.newComp.getNews(this.newComp.countryIs, category);
    console.log('this.country', this.country);
  }

  setCountry(country: any) {
    // this.country = this.newComp.countryIs;
    this.country = country;

    this.newComp.getNews(country, this.newComp.categoryIs);
    console.log('this.category', this.category);
  }
}
