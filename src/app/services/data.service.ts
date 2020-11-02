import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Ruan Nunes',
      subject: 'Novo curso de java basico',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Solivan',
      subject: 'Novo curso de java intermediario',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Diane',
      subject: 'Curso de Educação infantil',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Flavio',
      subject: 'Curso de Ionic',
      date: 'ontem',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Aulas de Dança',
      date: 'antes de ontem',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Aulas de balé',
      date: 'antes de ontem',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Aulas de manicure',
      date: 'semana passada',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Aulas de Musica',
      date: 'semana passada',
      id: 7,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
