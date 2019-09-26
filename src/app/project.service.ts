import { Injectable } from '@angular/core';
import { Project } from './project-component/project';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Array<Project>> {
   return this.http.get<Array<Project>>('http://localhost:8094/restservicesfsdfinal/projectMgr/listProjects/');
  }

  getProject(projectId: string): Observable<Project> {
    const params = new HttpParams()
    .set('id', projectId);
    return this.http.get<Project>('http://localhost:8094/restservicesfsdfinal/projectMgr/viewProject/' + projectId);
  }

  postProject(project: Project) {
    this.http.post('http://localhost:8094/restservicesfsdfinal/projectMgr/addProject', project).subscribe();
  }

  updateProject(project: Project) {
    const params = new HttpParams()
    .set('id', project.id);
    this.http.put('http://localhost:8094/restservicesfsdfinal/projectMgr/updateProject', project).subscribe();
  }

  deleteProject(projectId: string) {
    const params = new HttpParams()
    .set('id', projectId);
    return this.http.delete('http://localhost:8094/restservicesfsdfinal/projectMgr/deleteProject/' + projectId + '').subscribe();
  }
}
