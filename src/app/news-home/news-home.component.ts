import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css'],
})
export class NewsHomeComponent implements OnInit {
  obtainedData!: boolean;
  newsArticles!: [];
  categoryIs: any;
  countryIs: any;
  // @Input() categorySelected: any

  constructor(private http: HttpClient) {
    // console.log('categorySelected', this.categorySelected);
  }

  ngOnInit(): void {
    this.getNews('us', 'business');
  }

  getNews(countrySelected: any, categorySelected: any) {
    this.countryIs = countrySelected;
    this.categoryIs = categorySelected;

    console.log('news getting called');
    this.http
      .get(
        `https://newsapi.org/v2/top-headlines?country=${countrySelected}&category=${categorySelected}`,
        {
          headers: new HttpHeaders({
            "X-Api-Key": environment.apiKey,
          }),
        }
      )
      .subscribe((responseData: any) => {
        if (responseData.articles.length) {
          this.obtainedData = true;
          this.newsArticles = responseData.articles;
        } else {
          this.obtainedData = false;
        }
        // console.log('newsArticles data is ', JSON.stringify(this.newsArticles));
      });
  }

  convertDates(localDate: any) {
    return new Date(Date.parse(localDate)).toLocaleString();
  }
}
