import { Component } from '@angular/core';

interface Projeto {
  nome: string
  descricao: string
  tecnologias: string[]
  url?: string
  repositorio?: string
  src?: string
}

@Component({
  selector: 'app-projetos',
  imports: [],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  hover: boolean = false;
  imagemExpandida: boolean = false;
  indexProjeto: number = 0;
  projetoAtual?: Projeto;

  projetos: Projeto[] = [
    {
      nome: "Devoday",
      descricao: "Devocional day é um projeto estudantil que surgiu a partir da dificuldade de novos cristãos em fazer devocional e/ou lectio divina. O projeto também é pensado em cristãos que sabem fazer mas possuem dificuldades em manter constância nos estudos bíblicos.",
      tecnologias: ["Node.js", "Javascript", "Handlebars", "CSS", "HTML", "PostgreSQL", "Nodemailer", "Prisma", "Express", "Bcrypt", "JWT"],
      repositorio: "https://github.com/Camilay3/devoday",
      url: "https://devoday.onrender.com",
      src: "Devoday.png"
    },
    {
      nome: "Theotokos",
      descricao: "Site de apresentação pessoal para a Theotokos: grupo musical que atua em celebrações e eventos, com foco em casamentos.",
      tecnologias: ["Angular", "Typescript", "CSS", "HTML"],
      url: "https://theotokos.onrender.com",
      src: "Theotokos.png"
    },
  ];

  ngOnInit() {
    if (this.projetos) {
      this.projetoAtual = this.projetos[this.indexProjeto];
    }
  }

  proximaPagina() {
    if (this.indexProjeto + 1 <= this.projetos.length - 1) {
      this.indexProjeto++;
      this.projetoAtual = this.projetos[this.indexProjeto];
    }
  }

  paginaAnterior() {
    if (this.indexProjeto - 1 >= 0) {
      this.indexProjeto--;
      this.projetoAtual = this.projetos[this.indexProjeto];
    }
  }

  expandir(estado?: boolean) {
    this.imagemExpandida = (estado) ? true : false;
  }
}
