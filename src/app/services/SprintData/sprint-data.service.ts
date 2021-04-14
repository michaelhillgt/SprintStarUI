import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SprintDataService {
  
  private team: string
  
  private BASE_URL: string = 'http://localhost:8080/sprintDataService';
  
  

  constructor(private http: HttpClient//,
              //private _router: Router
            ) { }
  
  getActiveTeam(): string {
    return this.team
  }
  
  setActiveTeam(team): void {
    this.team = team
  }
  
  initialize(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({ 'team': this.team});
    console.log(body)
    return this.http.post(this.BASE_URL + '/initialize', body,{'headers':headers})
  }
  
  getTeams(): Observable<any> {
    return this.http.get(this.BASE_URL + '/teams')
  }
  
  getStoryPoints(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({ 'team': this.team});
    console.log(body)
    return this.http.post(this.BASE_URL + '/storyPoints', body,{'headers':headers})
  }
  
  getTestTickets(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({ 'team': this.team});
    console.log(body)
    return this.http.post(this.BASE_URL + '/testTickets', body,{'headers':headers})
  }
  
  getCodeQuality(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({ 'team': this.team});
    console.log(body)
    return this.http.post(this.BASE_URL + '/codeQuality', body,{'headers':headers})
  }
  
  getAssists(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({ 'team': this.team});
    console.log(body)
    return this.http.post(this.BASE_URL + '/assists', body,{'headers':headers})
  }
  
  getKudos(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({ 'team': this.team});
    console.log(body)
    return this.http.post(this.BASE_URL + '/kudos', body,{'headers':headers})
  }
  
  getLeaderBoard(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({ 'team': this.team});
    console.log(body)
    return this.http.post(this.BASE_URL + '/leaderboard', body,{'headers':headers})
  }
  
  
  getAward(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({ 'team': this.team});
    console.log(body)
    return this.http.post(this.BASE_URL + '/award', body,{'headers':headers})
  }
  
  
  // addPerson(person:Person): Observable<any> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(person);
  //   console.log(body)
  //   return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  // }
              
              
              
              
              
}
