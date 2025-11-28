import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Product } from '../App';

interface CompendioScreenProps {
  onProductSelect: (product: Product) => void;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'ACTARA 10 GR',
    registryNumber: 'nº 3200',
    colorTag: 'blue',
    mapaRegistry: '3200 - MAPA',
    holder: 'SYNGENTA PROTEÇÃO DE CULTIVOS LTDA',
    lastRevision: '15/03/2024',
    activeIngredients: ['TIAMETOXAM'],
    chemicalGroups: ['NEONICOTINOIDE'],
    actionClass: 'Inseticida',
    toxicologicalClass: 'Classe III - Medianamente tóxico',
    concentration: '100 g/kg',
    formulation: 'Granulado (GR)',
    actionMode: 'Contato e ingestão',
    environmentalClass: 'Classe II - Produto muito perigoso',
  },
  {
    id: '2',
    name: 'ROUNDUP ORIGINAL DI',
    registryNumber: 'nº 1679',
    colorTag: 'green',
    mapaRegistry: '1679 - MAPA',
    holder: 'MONSANTO DO BRASIL LTDA',
    lastRevision: '22/01/2024',
    activeIngredients: ['GLIFOSATO'],
    chemicalGroups: ['GLICINA SUBSTITUÍDA'],
    actionClass: 'Herbicida',
    toxicologicalClass: 'Classe IV - Pouco tóxico',
    concentration: '480 g/L',
    formulation: 'Concentrado Solúvel (SL)',
    actionMode: 'Sistêmico',
    environmentalClass: 'Classe III - Produto perigoso',
  },
  {
    id: '3',
    name: 'CERCOBIN 700 WP',
    registryNumber: 'nº 0189',
    colorTag: 'red',
    mapaRegistry: '0189 - MAPA',
    holder: 'IHARA COMÉRCIO DE PRODUTOS QUÍMICOS LTDA',
    lastRevision: '10/02/2024',
    activeIngredients: ['TIOFANATO METÍLICO'],
    chemicalGroups: ['BENZIMIDAZOL'],
    actionClass: 'Fungicida',
    toxicologicalClass: 'Classe III - Medianamente tóxico',
    concentration: '700 g/kg',
    formulation: 'Pó Molhável (WP)',
    actionMode: 'Sistêmico',
    environmentalClass: 'Classe III - Produto perigoso',
  },
  {
    id: '4',
    name: 'KARATE ZEON 50 CS',
    registryNumber: 'nº 2899',
    colorTag: 'blue',
    mapaRegistry: '2899 - MAPA',
    holder: 'SYNGENTA PROTEÇÃO DE CULTIVOS LTDA',
    lastRevision: '05/04/2024',
    activeIngredients: ['LAMBDA-CIALOTRINA'],
    chemicalGroups: ['PIRETROIDE'],
    actionClass: 'Inseticida',
    toxicologicalClass: 'Classe II - Altamente tóxico',
    concentration: '50 g/L',
    formulation: 'Suspensão de Cápsula (CS)',
    actionMode: 'Contato e ingestão',
    environmentalClass: 'Classe II - Produto muito perigoso',
  },
  {
    id: '5',
    name: 'SCORE 250 EC',
    registryNumber: 'nº 1795',
    colorTag: 'red',
    mapaRegistry: '1795 - MAPA',
    holder: 'SYNGENTA PROTEÇÃO DE CULTIVOS LTDA',
    lastRevision: '18/03/2024',
    activeIngredients: ['DIFENOCONAZOL'],
    chemicalGroups: ['TRIAZOL'],
    actionClass: 'Fungicida',
    toxicologicalClass: 'Classe III - Medianamente tóxico',
    concentration: '250 g/L',
    formulation: 'Concentrado Emulsionável (EC)',
    actionMode: 'Sistêmico',
    environmentalClass: 'Classe III - Produto perigoso',
  },
  {
    id: '6',
    name: 'CONNECT',
    registryNumber: 'nº 7612',
    colorTag: 'green',
    mapaRegistry: '7612 - MAPA',
    holder: 'BAYER S.A.',
    lastRevision: '28/02/2024',
    activeIngredients: ['BETA-CIFLUTRINA', 'IMIDACLOPRIDO'],
    chemicalGroups: ['PIRETROIDE', 'NEONICOTINOIDE'],
    actionClass: 'Inseticida',
    toxicologicalClass: 'Classe II - Altamente tóxico',
    concentration: '100 g/L + 700 g/L',
    formulation: 'Suspensão Concentrada (SC)',
    actionMode: 'Contato, ingestão e sistêmico',
    environmentalClass: 'Classe II - Produto muito perigoso',
  },
];

export function CompendioScreen({ onProductSelect }: CompendioScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.registryNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getColorClass = (color: 'blue' | 'red' | 'green') => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500';
      case 'red':
        return 'bg-red-500';
      case 'green':
        return 'bg-emerald-500';
    }
  };

  return (
    <main className="pt-16 pb-6 px-4">
      <div className="max-w-md mx-auto">
        {/* Campo de Busca */}
        <div className="mb-4 pt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Nome / Nº Registro"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Lista de Produtos */}
        <div className="space-y-3">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
              onClick={() => onProductSelect(product)}
            >
              <div className="flex">
                {/* Barra Lateral Colorida */}
                <div className={`w-1.5 ${getColorClass(product.colorTag)}`} />
                
                {/* Conteúdo do Card */}
                <div className="flex-1 p-4">
                  <h3 className="text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.registryNumber}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum produto encontrado</p>
          </div>
        )}
      </div>
    </main>
  );
}
