import { DISCQuestion } from './disc-types';

export const DISC_QUESTIONS: DISCQuestion[] = [
  {
    id: 1,
    question: "Em situações de trabalho, eu tendo a ser:",
    options: [
      { text: "Direto e focado em resultados", type: "D", weight: 3 },
      { text: "Entusiasta e comunicativo", type: "I", weight: 3 },
      { text: "Paciente e colaborativo", type: "S", weight: 3 },
      { text: "Cuidadoso e analítico", type: "C", weight: 3 }
    ]
  },
  {
    id: 2,
    question: "Quando enfrento um problema, minha primeira reação é:",
    options: [
      { text: "Tomar uma decisão rápida", type: "D", weight: 3 },
      { text: "Discutir com outras pessoas", type: "I", weight: 3 },
      { text: "Pensar calmamente sobre as opções", type: "S", weight: 3 },
      { text: "Analisar todos os dados disponíveis", type: "C", weight: 3 }
    ]
  },
  {
    id: 3,
    question: "Em reuniões, eu geralmente:",
    options: [
      { text: "Lidero a discussão", type: "D", weight: 3 },
      { text: "Contribuo com ideias criativas", type: "I", weight: 3 },
      { text: "Ouço e apoio os outros", type: "S", weight: 3 },
      { text: "Faço perguntas detalhadas", type: "C", weight: 3 }
    ]
  },
  {
    id: 4,
    question: "Meu estilo de comunicação é:",
    options: [
      { text: "Direto e objetivo", type: "D", weight: 3 },
      { text: "Expressivo e animado", type: "I", weight: 3 },
      { text: "Calmo e respeitoso", type: "S", weight: 3 },
      { text: "Preciso e factual", type: "C", weight: 3 }
    ]
  },
  {
    id: 5,
    question: "Quando trabalho em equipe, eu:",
    options: [
      { text: "Assumo a liderança", type: "D", weight: 3 },
      { text: "Motivo e inspiro os outros", type: "I", weight: 3 },
      { text: "Apoio e colaboro", type: "S", weight: 3 },
      { text: "Garanto a qualidade do trabalho", type: "C", weight: 3 }
    ]
  },
  {
    id: 6,
    question: "Sob pressão, eu tendo a:",
    options: [
      { text: "Ser mais assertivo", type: "D", weight: 3 },
      { text: "Buscar apoio dos outros", type: "I", weight: 3 },
      { text: "Manter a calma", type: "S", weight: 3 },
      { text: "Focar nos detalhes", type: "C", weight: 3 }
    ]
  },
  {
    id: 7,
    question: "Minha abordagem para mudanças é:",
    options: [
      { text: "Abraço mudanças rapidamente", type: "D", weight: 3 },
      { text: "Vejo oportunidades nas mudanças", type: "I", weight: 3 },
      { text: "Preciso de tempo para me adaptar", type: "S", weight: 3 },
      { text: "Analiso os riscos primeiro", type: "C", weight: 3 }
    ]
  },
  {
    id: 8,
    question: "Ao tomar decisões, eu:",
    options: [
      { text: "Decido rapidamente", type: "D", weight: 3 },
      { text: "Consulto outras pessoas", type: "I", weight: 3 },
      { text: "Considero o impacto nos outros", type: "S", weight: 3 },
      { text: "Analiso todas as informações", type: "C", weight: 3 }
    ]
  },
  {
    id: 9,
    question: "Meu ambiente de trabalho ideal é:",
    options: [
      { text: "Desafiador e competitivo", type: "D", weight: 3 },
      { text: "Social e dinâmico", type: "I", weight: 3 },
      { text: "Estável e harmonioso", type: "S", weight: 3 },
      { text: "Organizado e estruturado", type: "C", weight: 3 }
    ]
  },
  {
    id: 10,
    question: "Quando dou feedback, eu:",
    options: [
      { text: "Sou direto e honesto", type: "D", weight: 3 },
      { text: "Foco nos aspectos positivos", type: "I", weight: 3 },
      { text: "Sou gentil e encorajador", type: "S", weight: 3 },
      { text: "Sou específico e detalhado", type: "C", weight: 3 }
    ]
  },
  {
    id: 11,
    question: "Minha motivação principal é:",
    options: [
      { text: "Alcançar resultados", type: "D", weight: 3 },
      { text: "Reconhecimento e aprovação", type: "I", weight: 3 },
      { text: "Harmonia e estabilidade", type: "S", weight: 3 },
      { text: "Precisão e qualidade", type: "C", weight: 3 }
    ]
  },
  {
    id: 12,
    question: "Em conflitos, eu:",
    options: [
      { text: "Confronto diretamente", type: "D", weight: 3 },
      { text: "Tento persuadir", type: "I", weight: 3 },
      { text: "Busco compromisso", type: "S", weight: 3 },
      { text: "Apresento fatos", type: "C", weight: 3 }
    ]
  },
  {
    id: 13,
    question: "Meu ritmo de trabalho é:",
    options: [
      { text: "Rápido e intenso", type: "D", weight: 3 },
      { text: "Variável e energético", type: "I", weight: 3 },
      { text: "Constante e estável", type: "S", weight: 3 },
      { text: "Cuidadoso e metódico", type: "C", weight: 3 }
    ]
  },
  {
    id: 14,
    question: "Ao liderar, eu:",
    options: [
      { text: "Dou direções claras", type: "D", weight: 3 },
      { text: "Inspiro e motivo", type: "I", weight: 3 },
      { text: "Apoio e desenvolvo", type: "S", weight: 3 },
      { text: "Estabeleço padrões altos", type: "C", weight: 3 }
    ]
  },
  {
    id: 15,
    question: "Minha abordagem para planejamento é:",
    options: [
      { text: "Foco no objetivo final", type: "D", weight: 3 },
      { text: "Mantenho flexibilidade", type: "I", weight: 3 },
      { text: "Planejo passo a passo", type: "S", weight: 3 },
      { text: "Considero todos os detalhes", type: "C", weight: 3 }
    ]
  },
  {
    id: 16,
    question: "Em apresentações, eu:",
    options: [
      { text: "Sou direto ao ponto", type: "D", weight: 3 },
      { text: "Sou expressivo e envolvente", type: "I", weight: 3 },
      { text: "Sou calmo e organizado", type: "S", weight: 3 },
      { text: "Sou preciso e bem preparado", type: "C", weight: 3 }
    ]
  },
  {
    id: 17,
    question: "Minha atitude em relação a riscos é:",
    options: [
      { text: "Aceito riscos calculados", type: "D", weight: 3 },
      { text: "Vejo oportunidades", type: "I", weight: 3 },
      { text: "Prefiro segurança", type: "S", weight: 3 },
      { text: "Analiso cuidadosamente", type: "C", weight: 3 }
    ]
  },
  {
    id: 18,
    question: "Quando recebo críticas, eu:",
    options: [
      { text: "Foco em soluções", type: "D", weight: 3 },
      { text: "Busco esclarecimentos", type: "I", weight: 3 },
      { text: "Aceito e reflito", type: "S", weight: 3 },
      { text: "Analiso objetivamente", type: "C", weight: 3 }
    ]
  },
  {
    id: 19,
    question: "Meu estilo de aprendizagem é:",
    options: [
      { text: "Prático e aplicado", type: "D", weight: 3 },
      { text: "Interativo e social", type: "I", weight: 3 },
      { text: "Gradual e reflexivo", type: "S", weight: 3 },
      { text: "Teórico e detalhado", type: "C", weight: 3 }
    ]
  },
  {
    id: 20,
    question: "Em situações novas, eu:",
    options: [
      { text: "Tomo iniciativa", type: "D", weight: 3 },
      { text: "Me adapto facilmente", type: "I", weight: 3 },
      { text: "Observo primeiro", type: "S", weight: 3 },
      { text: "Pesquiso e me preparo", type: "C", weight: 3 }
    ]
  },
  {
    id: 21,
    question: "Minha prioridade no trabalho é:",
    options: [
      { text: "Eficiência e resultados", type: "D", weight: 3 },
      { text: "Relacionamentos e influência", type: "I", weight: 3 },
      { text: "Cooperação e harmonia", type: "S", weight: 3 },
      { text: "Qualidade e precisão", type: "C", weight: 3 }
    ]
  },
  {
    id: 22,
    question: "Ao resolver problemas, eu:",
    options: [
      { text: "Ajo rapidamente", type: "D", weight: 3 },
      { text: "Busco ideias criativas", type: "I", weight: 3 },
      { text: "Considero todas as perspectivas", type: "S", weight: 3 },
      { text: "Sigo métodos comprovados", type: "C", weight: 3 }
    ]
  },
  {
    id: 23,
    question: "Minha abordagem para delegação é:",
    options: [
      { text: "Dou autonomia total", type: "D", weight: 3 },
      { text: "Mantenho comunicação frequente", type: "I", weight: 3 },
      { text: "Ofereço suporte constante", type: "S", weight: 3 },
      { text: "Estabeleço diretrizes claras", type: "C", weight: 3 }
    ]
  },
  {
    id: 24,
    question: "Em negociações, eu:",
    options: [
      { text: "Sou assertivo e direto", type: "D", weight: 3 },
      { text: "Uso persuasão e carisma", type: "I", weight: 3 },
      { text: "Busco soluções win-win", type: "S", weight: 3 },
      { text: "Apresento dados e fatos", type: "C", weight: 3 }
    ]
  },
  {
    id: 25,
    question: "Minha reação a prazos apertados é:",
    options: [
      { text: "Acelero o ritmo", type: "D", weight: 3 },
      { text: "Mobilizo a equipe", type: "I", weight: 3 },
      { text: "Mantenho a qualidade", type: "S", weight: 3 },
      { text: "Reorganizo as prioridades", type: "C", weight: 3 }
    ]
  }
];

// Função para randomizar as perguntas
export function shuffleQuestions(questions: DISCQuestion[]): DISCQuestion[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Função para embaralhar as opções de resposta de cada pergunta
export function shuffleQuestionOptions(questions: DISCQuestion[]): DISCQuestion[] {
  return questions.map(question => ({
    ...question,
    options: shuffleArray([...question.options])
  }));
}

// Função utilitária para embaralhar arrays
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}