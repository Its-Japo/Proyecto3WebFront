import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { Global } from "./global";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
    public url: String;

    constructor(private _http: HttpClient) {
        this.url = Global.url;
    }

    testService() {
        return "Probando el servicio de Angular";
    }
    
    saveProject(project: Project): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save-project', params, {headers: headers});
    }

    getProjects(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'projects', {headers: headers});
    }

    getProject(id: number): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'project-details/' + id, {headers: headers});
    }

    deleteProject(id: number): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + 'project-details/' + id, {headers: headers});

    }

    updateProject(project: Project): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'project-details/' + project._id, params, {headers: headers});
    }
}
