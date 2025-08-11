import { Component } from '@angular/core';

interface Projeto {
  nome: string
  descricao: string
  tecnologia: string[]
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
  hover?: boolean = false;
  imagemExpandida?: boolean = false;

  projetos?: Projeto[] = [
    {
      nome: "Devoday",
      descricao: "Devocional day é um projeto estudantil que surgiu a partir da dificuldade de novos cristãos em fazer devocional e/ou lectio divina. O projeto também é pensado em cristãos que sabem fazer mas possuem dificuldades em manter constância nos estudos bíblicos.",
      tecnologia: ["Node.js", "Javascript", "Handlebars", "CSS", "HTML", "PostgreSQL", "Nodemailer", "Prisma", "Express", "Bcrypt", "JWT"],
      repositorio: "https://github.com/Camilay3/devoday",
      url: "https://devoday.onrender.com",
      src: "Devoday.png"
    }
  ];

  expandir(estado?: boolean) {
    this.imagemExpandida = (estado) ? true : false;
  }
}
