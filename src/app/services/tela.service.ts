import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TelaService {
    private larguraSubject = new BehaviorSubject<number>(window.innerWidth);
    private desktopSubject = new BehaviorSubject<boolean>(window.innerWidth >= 770);

    largura$ = this.larguraSubject.asObservable();
    desktop$ = this.desktopSubject.asObservable();

    constructor() {
        const mediaQuery = window.matchMedia('(min-width: 770px)');

        // Atualiza quando redimensionar
        mediaQuery.addEventListener('change', (event) => {
            this.desktopSubject.next(event.matches);
        });
    }
}
