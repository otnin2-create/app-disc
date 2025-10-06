"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Clock, 
  TrendingUp, 
  Target, 
  Users, 
  CheckCircle, 
  ArrowRight,
  RotateCcw,
  Download,
  Share2
} from 'lucide-react';
import { DISC_QUESTIONS, shuffleQuestions, shuffleQuestionOptions } from '@/lib/disc-questions';
import { calculateDISCResult, getMotivationalMessage, generatePersonalizedTips } from '@/lib/disc-calculator';
import { DISCQuestion, DISCResult, DISC_PROFILES } from '@/lib/disc-types';
import { downloadReport, shareResult, saveResult } from '@/lib/disc-utils';

type AppState = 'welcome' | 'questionnaire' | 'results';

export default function DISCApp() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [questions, setQuestions] = useState<DISCQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'D' | 'I' | 'S' | 'C'>>({});
  const [result, setResult] = useState<DISCResult | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeLeft > 0 && appState === 'questionnaire') {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, appState]);

  const startQuestionnaire = () => {
    // Primeiro embaralha as perguntas, depois embaralha as opções de cada pergunta
    const shuffledQuestions = shuffleQuestions(DISC_QUESTIONS).slice(0, 25);
    const questionsWithShuffledOptions = shuffleQuestionOptions(shuffledQuestions);
    
    setQuestions(questionsWithShuffledOptions);
    setCurrentQuestion(0);
    setAnswers({});
    setAppState('questionnaire');
    setTimerActive(true);
    setTimeLeft(30);
  };

  const handleAnswer = (type: 'D' | 'I' | 'S' | 'C') => {
    const questionId = questions[currentQuestion].id;
    setAnswers(prev => ({ ...prev, [questionId]: type }));
    
    setTimeout(() => {
      handleNextQuestion();
    }, 300);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(30);
    } else {
      finishQuestionnaire();
    }
  };

  const finishQuestionnaire = () => {
    setTimerActive(false);
    const calculatedResult = calculateDISCResult(answers);
    setResult(calculatedResult);
    saveResult(calculatedResult); // Salvar resultado automaticamente
    setAppState('results');
  };

  const resetTest = () => {
    setAppState('welcome');
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setTimerActive(false);
    setTimeLeft(30);
  };

  const progress = appState === 'questionnaire' ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  if (appState === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pt-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              DISC Rápido
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra seu perfil comportamental em poucos minutos e receba insights personalizados para seu desenvolvimento pessoal e profissional.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Rápido e Eficiente</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">25 perguntas estratégicas em menos de 10 minutos</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Resultados Precisos</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Algoritmo baseado na metodologia DISC validada</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Insights Personalizados</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Recomendações específicas para seu perfil</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Pronto para descobrir seu perfil?</h3>
                <p className="mb-6 opacity-90">
                  Responda às perguntas de forma intuitiva e honesta. Não há respostas certas ou erradas!
                </p>
                <Button 
                  onClick={startQuestionnaire}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
                >
                  Iniciar Avaliação DISC
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Info */}
          <div className="mt-12 text-center text-gray-500">
            <p className="text-sm">
              ✓ Gratuito • ✓ Sem cadastro necessário • ✓ Resultados instantâneos • ✓ Dados não armazenados
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (appState === 'questionnaire') {
    const question = questions[currentQuestion];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
        <div className="max-w-3xl mx-auto pt-8">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">DISC Rápido</h2>
                  <p className="text-sm text-gray-600">Avaliação Comportamental</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{timeLeft}s</div>
                <div className="text-sm text-gray-600">restantes</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                <span>{Math.round(progress)}% concluído</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Question Card */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl text-center text-gray-900">
                {question?.question}
              </CardTitle>
              <CardDescription className="text-center">
                Escolha a opção que melhor descreve você na maioria das situações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {question?.options.map((option, index) => (
                <Button
                  key={`${option.type}-${option.text}`} // Chave única baseada no conteúdo
                  onClick={() => handleAnswer(option.type)}
                  variant="outline"
                  className="w-full p-6 text-left justify-start hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-wrap h-auto"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-gray-900">{option.text}</span>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Skip Button */}
          <div className="text-center mt-6">
            <Button 
              variant="ghost" 
              onClick={handleNextQuestion}
              className="text-gray-500 hover:text-gray-700"
            >
              Pular pergunta
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (appState === 'results' && result) {
    const primaryProfile = DISC_PROFILES[result.primaryType];
    const secondaryProfile = DISC_PROFILES[result.secondaryType];
    const motivationalMessage = getMotivationalMessage(result.primaryType);
    const personalizedTips = generatePersonalizedTips(result);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
        <div className="max-w-4xl mx-auto pt-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Seu Perfil DISC</h1>
            <p className="text-gray-600">Avaliação concluída com sucesso!</p>
          </div>

          {/* Motivational Message */}
          <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6 text-center">
              <p className="text-lg font-medium">{motivationalMessage}</p>
            </CardContent>
          </Card>

          {/* Main Results */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Profile Overview */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Seu Perfil Comportamental
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div 
                    className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold"
                    style={{ backgroundColor: primaryProfile.color }}
                  >
                    {result.primaryType}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {primaryProfile.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{result.description}</p>
                  
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Primário: {result.primaryType} ({result.percentages[result.primaryType]}%)
                    </Badge>
                    <Badge variant="outline">
                      Secundário: {result.secondaryType} ({result.percentages[result.secondaryType]}%)
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scores Chart */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Distribuição dos Perfis</CardTitle>
                <CardDescription>Seus percentuais em cada dimensão DISC</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(result.percentages).map(([type, percentage]) => {
                  const profile = DISC_PROFILES[type as keyof typeof DISC_PROFILES];
                  return (
                    <div key={type} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: profile.color }}
                          />
                          <span className="font-medium">{type} - {profile.name}</span>
                        </div>
                        <span className="font-semibold">{percentage}%</span>
                      </div>
                      <Progress 
                        value={percentage} 
                        className="h-2"
                        style={{ 
                          '--progress-background': profile.color 
                        } as React.CSSProperties}
                      />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Detailed Analysis */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Strengths */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Pontos Fortes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Development Areas */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Áreas de Desenvolvimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.developmentAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-orange-200 rounded-full mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Recomendações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.slice(0, 4).map((recommendation, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-blue-200 rounded-full mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Personalized Tips */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-700">Dicas Personalizadas para Você</CardTitle>
              <CardDescription>Ações práticas baseadas no seu perfil específico</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {personalizedTips.map((tip, index) => (
                  <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button onClick={resetTest} variant="outline" className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Fazer Novo Teste
            </Button>
            <Button 
              onClick={() => result && downloadReport(result)} 
              variant="outline" 
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Baixar Relatório
            </Button>
            <Button 
              onClick={() => result && shareResult(result)} 
              variant="outline" 
              className="gap-2"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </Button>
          </div>

          {/* Footer Info */}
          <div className="text-center text-gray-500 text-sm">
            <p>Este relatório é baseado na metodologia DISC e fornece insights para desenvolvimento pessoal e profissional.</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}