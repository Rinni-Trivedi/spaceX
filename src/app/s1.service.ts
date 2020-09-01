import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(public httpClient: HttpClient) {}
  searchString = '';
  imageSearch = [];

  userData() {
     const urlofApi = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true';
    this.httpClient.get(urlofApi)
    .subscribe(
      (res: Response) => {
          // const searchResult = res.json();
          console.log(res);
          // flight_number
         // mission_name
        //  console.log(res);
         // this.imageSearch = searchResult.mission_name;
         // console.log(this.imageSearch.owner.avatar_url);
        }
    );
    return this.httpClient.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true');
}
}
