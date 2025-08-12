import { Component } from '@angular/core';

interface Experiencia {
  cargo: string
  empresa: string
  data: string
  descricao: string
  voluntario?: boolean
}

interface Curso {
  nome: string
  orgao: string
  dataDeConclusao: string
}

@Component({
  selector: 'app-experiencias',
  imports: [],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.css'
})
export class ExperienciasComponent {
  /* ORGANIZAR POR DATA MAIS RECENTE */
  experiencias: Experiencia[] = [
    {
      cargo: "UX Designer",
      empresa: "Núcleo de Desenvolvimento de Software",
      data: "06/25 até o momento",
      descricao: "Pesquisa com usuários; criação de fluxos, desenvolvimento de protótipos; colaboração com desenvolvedores e análise de usabilidade para melhoria contínua da interface.",
      voluntario: true
    },
    {
      cargo: "Jovem Aprendiz",
      empresa: "Metas Condomínios e Serviços",
      data: "04/24 a 04/25",
      descricao: "Atendimento ao cliente, com foco em alterações cadastrais; gerenciamento de documentos, contratos e protocolos; e arquivamento de atas de reunião."
    },
  ];

  /* ORGANIZAR POR ORDEM MAIS RECENTE: Mês e ano */
  cursos: Curso[] = [
    {
      nome: "Turma Foundation",
      orgao: "Apple Developer Academy",
      dataDeConclusao: "Dez/2022"
    },
    {
      nome: "Desenvolvimento iOS",
      orgao: "Capacita Brasil",
      dataDeConclusao: "Jun/2025"
    },
    {
      nome: "Imersão Flutter",
      orgao: "Alura",
      dataDeConclusao: "Abr/2025"
    },
    {
      nome: "Jornada Digital",
      orgao: "Senac",
      dataDeConclusao: "Jul/2024"
    },
    {
      nome: "Serviços Administrativos",
      orgao: "Senac",
      dataDeConclusao: "Mai/2025"
    },
  ];
}
