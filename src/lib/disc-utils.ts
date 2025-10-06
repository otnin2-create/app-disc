import { DISCResult } from './disc-types';

// Função para gerar relatório em texto para download
export function generateTextReport(result: DISCResult): string {
  const report = `
RELATÓRIO DISC - PERFIL COMPORTAMENTAL
=====================================

PERFIL PRINCIPAL: ${result.primaryType} - ${result.description}

DISTRIBUIÇÃO DOS PERFIS:
- D (Dominante): ${result.percentages.D}%
- I (Influente): ${result.percentages.I}%
- S (Estável): ${result.percentages.S}%
- C (Conforme): ${result.percentages.C}%

PONTOS FORTES:
${result.strengths.map(strength => `• ${strength}`).join('\n')}

ÁREAS DE DESENVOLVIMENTO:
${result.developmentAreas.map(area => `• ${area}`).join('\n')}

RECOMENDAÇÕES:
${result.recommendations.map(rec => `• ${rec}`).join('\n')}

---
Este relatório foi gerado pelo DISC Rápido
Data: ${new Date().toLocaleDateString('pt-BR')}
  `.trim();
  
  return report;
}

// Função para baixar relatório como arquivo de texto
export function downloadReport(result: DISCResult): void {
  const report = generateTextReport(result);
  const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `relatorio-disc-${result.primaryType}-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}

// Função para compartilhar resultado
export function shareResult(result: DISCResult): void {
  const shareText = `Acabei de descobrir meu perfil DISC! Sou ${result.primaryType} - ${result.description}. Faça o seu teste gratuito também!`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Meu Perfil DISC',
      text: shareText,
      url: window.location.href
    });
  } else {
    // Fallback para navegadores que não suportam Web Share API
    navigator.clipboard.writeText(shareText + ' ' + window.location.href);
    alert('Texto copiado para a área de transferência!');
  }
}

// Função para salvar resultado no localStorage
export function saveResult(result: DISCResult): void {
  const savedResults = getSavedResults();
  const newResult = {
    ...result,
    timestamp: new Date().toISOString(),
    id: Date.now().toString()
  };
  
  savedResults.push(newResult);
  localStorage.setItem('disc-results', JSON.stringify(savedResults));
}

// Função para recuperar resultados salvos
export function getSavedResults(): any[] {
  try {
    const saved = localStorage.getItem('disc-results');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

// Função para limpar histórico
export function clearHistory(): void {
  localStorage.removeItem('disc-results');
}

// Função para calcular compatibilidade entre perfis
export function calculateCompatibility(profile1: string, profile2: string): {
  score: number;
  description: string;
} {
  const compatibilityMatrix: Record<string, Record<string, { score: number; description: string }>> = {
    D: {
      D: { score: 70, description: "Ambos são orientados a resultados, mas podem competir entre si" },
      I: { score: 85, description: "D fornece direção, I traz energia e motivação" },
      S: { score: 60, description: "Ritmos diferentes podem gerar tensão, mas se complementam" },
      C: { score: 75, description: "D decide rapidamente, C garante qualidade e precisão" }
    },
    I: {
      D: { score: 85, description: "I motiva e inspira, D fornece direção e foco" },
      I: { score: 80, description: "Muita energia e criatividade, mas podem faltar detalhes" },
      S: { score: 90, description: "Combinação harmoniosa: energia e estabilidade" },
      C: { score: 65, description: "I traz criatividade, C garante precisão e qualidade" }
    },
    S: {
      D: { score: 60, description: "S oferece estabilidade, mas D pode ser muito direto" },
      I: { score: 90, description: "Parceria equilibrada: estabilidade e energia positiva" },
      S: { score: 85, description: "Ambiente muito harmonioso e colaborativo" },
      C: { score: 95, description: "Excelente combinação: paciência e atenção aos detalhes" }
    },
    C: {
      D: { score: 75, description: "C garante qualidade, D fornece direção e urgência" },
      I: { score: 65, description: "Estilos muito diferentes, mas podem se complementar" },
      S: { score: 95, description: "Parceria ideal: metodologia e paciência" },
      C: { score: 80, description: "Foco na excelência, mas podem ser muito perfeccionistas" }
    }
  };
  
  return compatibilityMatrix[profile1]?.[profile2] || { score: 50, description: "Compatibilidade neutra" };
}

// Função para gerar dicas de carreira baseadas no perfil
export function getCareerSuggestions(primaryType: string): string[] {
  const careerSuggestions: Record<string, string[]> = {
    D: [
      "Executivo/CEO",
      "Gerente de Vendas",
      "Empreendedor",
      "Diretor de Operações",
      "Consultor de Negócios",
      "Líder de Projeto"
    ],
    I: [
      "Vendedor",
      "Relações Públicas",
      "Treinador/Coach",
      "Marketing",
      "Recursos Humanos",
      "Apresentador/Palestrante"
    ],
    S: [
      "Conselheiro/Terapeuta",
      "Enfermeiro",
      "Professor",
      "Assistente Social",
      "Mediador",
      "Especialista em Atendimento ao Cliente"
    ],
    C: [
      "Analista de Dados",
      "Contador",
      "Engenheiro",
      "Pesquisador",
      "Auditor",
      "Analista de Qualidade"
    ]
  };
  
  return careerSuggestions[primaryType] || [];
}