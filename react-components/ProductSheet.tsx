import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Printer, FileText, BarChart3 } from 'lucide-react';
import { Product } from '../App';

interface ProductSheetProps {
  product: Product;
}

type Tab = 'geral' | 'cultura' | 'indicacoes' | 'modalidades' | 'restricoes' | 'adicionais';

const tabs = [
  { id: 'geral' as const, label: 'Informações Gerais' },
  { id: 'cultura' as const, label: 'Aplicação por Cultura' },
  { id: 'indicacoes' as const, label: 'Indicações' },
  { id: 'modalidades' as const, label: 'Modalidades de Aplicação' },
  { id: 'restricoes' as const, label: 'Restrições por Estado' },
  { id: 'adicionais' as const, label: 'Informações Adicionais' },
];

export function ProductSheet({ product }: ProductSheetProps) {
  const [activeTab, setActiveTab] = useState<Tab>('geral');

  return (
    <main className="pt-16 pb-6 px-4">
      <div className="max-w-md mx-auto">
        {/* Cabeçalho do Produto */}
        <div className="mb-6 pt-4">
          <h2 className="text-gray-900 mb-3">{product.name}</h2>
          <div className="space-y-1">
            <p className="text-gray-600 text-sm">
              <span className="text-gray-900">Registro MAPA:</span> {product.mapaRegistry}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="text-gray-900">Titular:</span> {product.holder}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="text-gray-900">Última revisão:</span> {product.lastRevision}
            </p>
          </div>
        </div>

        {/* Abas de Navegação */}
        <div className="mb-4 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo da Aba Ativa */}
        {activeTab === 'geral' && (
          <div className="space-y-3 mb-6">
            {/* Ingredientes Ativos */}
            <Card className="bg-white shadow-sm p-4">
              <h3 className="text-gray-900 mb-2 text-sm">Ingredientes Ativos</h3>
              <div className="space-y-1">
                {product.activeIngredients.map((ingredient, index) => (
                  <p key={index} className="text-gray-700">
                    {ingredient}
                  </p>
                ))}
              </div>
            </Card>

            {/* Grupos Químicos */}
            <Card className="bg-white shadow-sm p-4">
              <h3 className="text-gray-900 mb-2 text-sm">Grupos Químicos</h3>
              <div className="space-y-1">
                {product.chemicalGroups.map((group, index) => (
                  <p key={index} className="text-gray-700">
                    {group}
                  </p>
                ))}
              </div>
            </Card>

            {/* Classe de Ação */}
            <Card className="bg-white shadow-sm p-4">
              <h3 className="text-gray-900 mb-2 text-sm">Classe de Ação</h3>
              <p className="text-gray-700">{product.actionClass}</p>
            </Card>

            {/* Classe Toxicológica */}
            <Card className="bg-white shadow-sm p-4">
              <h3 className="text-gray-900 mb-2 text-sm">Classe Toxicológica</h3>
              <p className="text-gray-700">{product.toxicologicalClass}</p>
            </Card>

            {/* Concentração */}
            <Card className="bg-white shadow-sm p-4">
              <h3 className="text-gray-900 mb-2 text-sm">Concentração</h3>
              <p className="text-gray-700">{product.concentration}</p>
            </Card>

            {/* Formulação */}
            <Card className="bg-white shadow-sm p-4">
              <h3 className="text-gray-900 mb-2 text-sm">Formulação</h3>
              <p className="text-gray-700">{product.formulation}</p>
            </Card>

            {/* Modo de Ação */}
            <Card className="bg-white shadow-sm p-4">
              <h3 className="text-gray-900 mb-2 text-sm">Modo de Ação</h3>
              <p className="text-gray-700">{product.actionMode}</p>
            </Card>

            {/* Classe Ambiental */}
            <Card className="bg-white shadow-sm p-4">
              <h3 className="text-gray-900 mb-2 text-sm">Classe Ambiental</h3>
              <p className="text-gray-700">{product.environmentalClass}</p>
            </Card>
          </div>
        )}

        {activeTab === 'cultura' && (
          <div className="py-12 text-center">
            <p className="text-gray-500">Informações de aplicação por cultura em breve</p>
          </div>
        )}

        {activeTab === 'indicacoes' && (
          <div className="py-12 text-center">
            <p className="text-gray-500">Indicações de uso em breve</p>
          </div>
        )}

        {activeTab === 'modalidades' && (
          <div className="py-12 text-center">
            <p className="text-gray-500">Modalidades de aplicação em breve</p>
          </div>
        )}

        {activeTab === 'restricoes' && (
          <div className="py-12 text-center">
            <p className="text-gray-500">Restrições por estado em breve</p>
          </div>
        )}

        {activeTab === 'adicionais' && (
          <div className="py-12 text-center">
            <p className="text-gray-500">Informações adicionais em breve</p>
          </div>
        )}

        {/* Botões de Ação */}
        <div className="space-y-3 sticky bottom-0 bg-gray-50 py-4">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
            <Printer className="w-4 h-4 mr-2" />
            Imprimir Ficha
          </Button>
          
          <Button variant="outline" className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50">
            <FileText className="w-4 h-4 mr-2" />
            Imprimir Várias Fichas
          </Button>
          
          <Button variant="outline" className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50">
            <BarChart3 className="w-4 h-4 mr-2" />
            Relatório do Produto
          </Button>
        </div>
      </div>
    </main>
  );
}
