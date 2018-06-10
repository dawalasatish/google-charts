import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
 

 
@Injectable()
export class DemoService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getFoods() {
        return this.http.get('./../assets/data.json');
    }
}