import { Observable } from 'rxjs/Observable';

export class BaseApiService {

    constructor() { }

    public invoke<T>(obj: any): Observable<T> {
        return obj.map((resp: any) => this.handleApiResponse<T>(resp));
    }

    private handleApiResponse<T>(body: any): Observable<T> {
        if (body['status']) {
            return body['payload'];
        } else {           
          //  console.log(body['message']);      
            throw body['message'];
        }
    }
}

