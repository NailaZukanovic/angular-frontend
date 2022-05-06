import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

export abstract class StandardRestService<T> {
  constructor (protected http: HttpClient, protected apiUrl: string) {
      this.apiUrl = `${environment.apiUrl}/${apiUrl}`
  }

  read () {
    return this.http.get<T[]>(this.apiUrl)
  }

  readOne (id: number) {
    return this.http.get<T>(`${this.apiUrl}/${id}`)
  }

  create (data: T) {
    return this.http.post<number>(this.apiUrl, data)
  }

  update (id: number, data: T) {
    return this.http.put<null>(`${this.apiUrl}/${id}`, data)
  }

  delete (id: number) {
    return this.http.delete<null>(`${this.apiUrl}/${id}`)
  }

  abstract get backUrl(): string;
  
}
