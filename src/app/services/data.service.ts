import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    url = 'https://nabilla-json-server.herokuapp.com/users';

    constructor(private http: HttpClient) { }

    // used in second page to display data
    getUsers() {
        return this.http.get(this.url);
    }

    // used in first page's getData method. for the page to save the data that has been received 
    serviceSaveData(data: any) {
        console.log(data);
        return this.http.post(this.url, data);
    }
    // userData$ : Subject<any> = new Subject<any>()


}