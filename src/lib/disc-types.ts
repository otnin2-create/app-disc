export interface DISCQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    type: 'D' | 'I' | 'S' | 'C';
    weight: number;
  }[];
}

export interface DISCScores {
  D: number;
  I: number;
  S: number;
  C: number;
}

export interface DISCResult {
  scores: DISCScores;
  percentages: DISCScores;
  primaryType: 'D' | 'I' | 'S' | 'C';
  secondaryType: 'D' | 'I' | 'S' | 'C';
  description: string;
  strengths: string[];
  developmentAreas: string[];
  recommendations: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  results: DISCResult[];
  createdAt: Date;
  lastTestDate?: Date;
}

export const DISC_PROFILES = {
  D: {
    name: 'Dominante',
    color: '#EF4444',
    description: 'Orientado para resultados, direto e determinado',
    traits: ['Decisivo', 'Competitivo', 'Orientado a resultados', 'Direto'],
    strengths: [
      'Toma decisões rapidamente',
      'Aceita desafios com facilidade',
      'Foca em resultados',
      'Lidera com confiança'
    ],
    developmentAreas: [
      'Pode ser muito direto',
      'Precisa desenvolver paciência',
      'Deve ouvir mais os outros',
      'Pode se beneficiar de mais colaboração'
    ],
    recommendations: [
      'Pratique a escuta ativa',
      'Reserve tempo para reflexão antes de decidir',
      'Desenvolva habilidades de coaching',
      'Busque feedback regular da equipe'
    ]
  },
  I: {
    name: 'Influente',
    color: '#F59E0B',
    description: 'Sociável, otimista e persuasivo',
    traits: ['Comunicativo', 'Entusiasta', 'Persuasivo', 'Otimista'],
    strengths: [
      'Excelente comunicador',
      'Motiva e inspira outros',
      'Cria relacionamentos facilmente',
      'Traz energia positiva'
    ],
    developmentAreas: [
      'Pode falar mais do que ouvir',
      'Precisa focar mais nos detalhes',
      'Deve melhorar o follow-up',
      'Pode ser muito otimista'
    ],
    recommendations: [
      'Desenvolva habilidades de escuta',
      'Use ferramentas para organização',
      'Pratique o acompanhamento de tarefas',
      'Equilibre otimismo com realismo'
    ]
  },
  S: {
    name: 'Estável',
    color: '#10B981',
    description: 'Confiável, paciente e colaborativo',
    traits: ['Paciente', 'Confiável', 'Colaborativo', 'Leal'],
    strengths: [
      'Trabalha bem em equipe',
      'É confiável e consistente',
      'Mantém a calma sob pressão',
      'Apoia outros naturalmente'
    ],
    developmentAreas: [
      'Pode resistir a mudanças',
      'Precisa ser mais assertivo',
      'Deve expressar opiniões mais',
      'Pode evitar conflitos necessários'
    ],
    recommendations: [
      'Pratique a assertividade',
      'Desenvolva tolerância à mudança',
      'Expresse suas ideias mais',
      'Aprenda a lidar com conflitos construtivos'
    ]
  },
  C: {
    name: 'Conforme',
    color: '#3B82F6',
    description: 'Analítico, preciso e orientado por qualidade',
    traits: ['Analítico', 'Preciso', 'Sistemático', 'Cauteloso'],
    strengths: [
      'Atenção aos detalhes',
      'Análise cuidadosa',
      'Foco na qualidade',
      'Planejamento sistemático'
    ],
    developmentAreas: [
      'Pode ser muito perfeccionista',
      'Precisa tomar decisões mais rápido',
      'Deve ser mais flexível',
      'Pode evitar riscos necessários'
    ],
    recommendations: [
      'Pratique tomada de decisão rápida',
      'Desenvolva tolerância a imperfeições',
      'Seja mais flexível com prazos',
      'Aprenda a calcular riscos positivos'
    ]
  }
} as const;