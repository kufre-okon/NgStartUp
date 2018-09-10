import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { EventTypes } from './event-types.enum';

interface BroadcastEvent {
  key: EventTypes;
  data?: any;
}


@Injectable({
  providedIn: 'root'
})
export class BroadcasterService {
  private _eventBus: Subject<BroadcastEvent>;

  constructor() {
    this._eventBus = new Subject<BroadcastEvent>();
  }
  
  public broadcast(key: EventTypes, data?: any) {    
    this._eventBus.next({ key, data });
  }

  public on<T>(key: EventTypes): Observable<T> {
    return this._eventBus.asObservable()
      .filter(event => event.key === key)
      .map(event => <T>event.data);
  }
}