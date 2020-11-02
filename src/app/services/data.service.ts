import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  description: string;
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
      description: 'novo curso de java disponivel, para ir alem no seu conhecimento.',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Solivan',
      subject: 'Novo curso de java intermediario',
      description: 'novo curso de java intermediario disponivel, para ir alem no seu conhecimento. Iremos prestigiar assuntos como spring boot, mongoDB, redis entre outros conceitos bacanas.',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Diane',
      subject: 'Curso de Educação infantil',
      description: 'aulas particulares para educação infantil, se tiver interesse entrar em contato pelo número:99981234',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Flavio',
      subject: 'Curso de Ionic',
      description: 'aulas particulares de ionic e tambem free lance, se tiver interesse entrar em contato pelo número:89981234',
      date: 'ontem',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Aulas de Dança',
      description: 'aulas particulares de dança, se tiver interesse entrar em contato pelo número:88981234',
      date: 'antes de ontem',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Aulas de balé',
      description: 'aulas particulares de balé, se tiver interesse entrar em contato pelo número:87981234',
      date: 'antes de ontem',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Aulas de manicure',
      description: 'aulas particulares de manicure, se tiver interesse entrar em contato pelo número:86981234',
      date: 'semana passada',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Aulas de Musica',
      description: 'aulas particulares de musica, se tiver interesse entrar em contato pelo número:28981234',
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
