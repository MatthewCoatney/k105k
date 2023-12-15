import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { AgendaService } from './agenda.service';

@Injectable()
export class AgendaResolver implements Resolve<any> {
  constructor(private agendaService: AgendaService) {}

  resolve() {
    // Base Observable (where we get data from)
    const dataObservable: Observable<any> = this.agendaService.getData();

    return { source: dataObservable };
  }
}
