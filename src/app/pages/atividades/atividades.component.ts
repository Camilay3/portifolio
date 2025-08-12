import { Component } from '@angular/core';

interface Evento {
  nome: string
  descricao: string
  data?: string
  modalidade?: string
  src?: string
  url?: string
}

@Component({
  selector: 'app-atividades',
  imports: [],
  templateUrl: './atividades.component.html',
  styleUrl: './atividades.component.css'
})
export class AtividadesComponent {
  indexPagina: number = 0;
  eventosPorPagina: number = 2;
  animando: boolean = false;

  eventos: Evento[] = [
    {
      nome: "Build With AI",
      descricao: "Promovido pelo Google Developers Group de Fortaleza, o evento trouxe uma programação com foco em aplicações práticas da IA em diferentes setores.",
      data: "Julho de 2025",
      modalidade: "Presencial",
      src: "BuildWithAI.jpg",
      url: "https://www.linkedin.com/posts/camila-santiago-7a9b9b354_buildwithai-googledevelopersgroup-inteligaeanciaartificial-activity-7355002084091432962-vOXj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhz67EBx_AhbSsZa8Mi8zsmWh7tsg3uPJA"
    },
  ];

  get eventosPaginados(): Evento[] {
    const inicio = this.indexPagina * this.eventosPorPagina;
    return this.eventos.slice(inicio, inicio + this.eventosPorPagina);
  }

  trocarPagina(direcao: number) {
    this.animando = true;
    setTimeout(() => {
      this.indexPagina += direcao;
      this.animando = false;
    }, 400);
  }
  
  paginaAnterior() {
    if (this.indexPagina > 0) this.trocarPagina(-1);
  }
  
  proximaPagina() {
    if (this.indexPagina < this.totalPaginas - 1) this.trocarPagina(1);
  }
  get totalPaginas(): number {
    return Math.ceil(this.eventos.length / this.eventosPorPagina);
  }
}
