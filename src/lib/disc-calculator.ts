import { DISCScores, DISCResult, DISC_PROFILES } from './disc-types';

export function calculateDISCResult(answers: Record<number, 'D' | 'I' | 'S' | 'C'>): DISCResult {
  // Inicializar pontuações
  const scores: DISCScores = { D: 0, I: 0, S: 0, C: 0 };
  
  // Calcular pontuações baseadas nas respostas
  Object.values(answers).forEach(answer => {
    scores[answer] += 3; // Cada resposta vale 3 pontos
  });
  
  // Calcular total de pontos
  const totalPoints = Object.values(scores).reduce((sum, score) => sum + score, 0);
  
  // Calcular percentuais
  const percentages: DISCScores = {
    D: Math.round((scores.D / totalPoints) * 100),
    I: Math.round((scores.I / totalPoints) * 100),
    S: Math.round((scores.S / totalPoints) * 100),
    C: Math.round((scores.C / totalPoints) * 100)
  };
  
  // Determinar tipo primário (maior pontuação)
  const primaryType = Object.entries(scores).reduce((a, b) => 
    scores[a[0] as keyof DISCScores] > scores[b[0] as keyof DISCScores] ? a : b
  )[0] as 'D' | 'I' | 'S' | 'C';
  
  // Determinar tipo secundário (segunda maior pontuação)
  const sortedTypes = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .map(([type]) => type as 'D' | 'I' | 'S' | 'C');
  
  const secondaryType = sortedTypes[1];
  
  // Obter informações do perfil primário
  const primaryProfile = DISC_PROFILES[primaryType];
  const secondaryProfile = DISC_PROFILES[secondaryType];
  
  // Criar descrição combinada
  const description = `Seu perfil é predominantemente ${primaryProfile.name} com características ${secondaryProfile.name}. ${primaryProfile.description}`;
  
  return {
    scores,
    percentages,
    primaryType,
    secondaryType,
    description,
    strengths: primaryProfile.strengths,
    developmentAreas: primaryProfile.developmentAreas,
    recommendations: primaryProfile.recommendations
  };
}

export function getDominantTraits(result: DISCResult): string[] {
  const { primaryType, secondaryType, percentages } = result;
  const traits: string[] = [];
  
  // Adicionar traits do tipo primário
  traits.push(...DISC_PROFILES[primaryType].traits);
  
  // Se o tipo secundário tem pelo menos 20% de influência, adicionar alguns traits
  if (percentages[secondaryType] >= 20) {
    traits.push(...DISC_PROFILES[secondaryType].traits.slice(0, 2));
  }
  
  return [...new Set(traits)]; // Remove duplicatas
}

export function getMotivationalMessage(primaryType: 'D' | 'I' | 'S' | 'C'): string {
  const messages = {
    D: "Parabéns! Sua determinação e foco em resultados são suas maiores forças. Continue liderando com confiança!",
    I: "Fantástico! Sua energia positiva e habilidade de inspirar outros fazem toda a diferença. Continue brilhando!",
    S: "Excelente! Sua estabilidade e capacidade de colaboração são fundamentais para o sucesso da equipe. Continue sendo esse apoio!",
    C: "Impressionante! Sua atenção aos detalhes e busca pela excelência garantem a qualidade em tudo que faz. Continue sendo preciso!"
  };
  
  return messages[primaryType];
}

export function generatePersonalizedTips(result: DISCResult): string[] {
  const { primaryType, secondaryType, percentages } = result;
  const tips: string[] = [];
  
  // Tips baseados no tipo primário
  const primaryTips = {
    D: [
      "Reserve 10 minutos diários para ouvir ativamente sua equipe",
      "Pratique dar feedback construtivo em vez de apenas críticas",
      "Celebre pequenas vitórias, não apenas grandes resultados"
    ],
    I: [
      "Use ferramentas de organização para não perder prazos importantes",
      "Pratique fazer perguntas antes de falar em reuniões",
      "Reserve tempo para trabalho individual e foco"
    ],
    S: [
      "Pratique expressar suas opiniões em reuniões pequenas primeiro",
      "Defina pequenos objetivos pessoais para sair da zona de conforto",
      "Aprenda a dizer 'não' quando necessário"
    ],
    C: [
      "Estabeleça prazos para análises para evitar paralisia por análise",
      "Pratique tomar decisões com 80% das informações",
      "Celebre progressos, não apenas perfeição"
    ]
  };
  
  tips.push(...primaryTips[primaryType]);
  
  // Se o tipo secundário é significativo (>25%), adicionar uma dica
  if (percentages[secondaryType] > 25) {
    const secondaryTip = primaryTips[secondaryType][0];
    tips.push(`Como você também tem características ${DISC_PROFILES[secondaryType].name.toLowerCase()}s: ${secondaryTip}`);
  }
  
  return tips;
}