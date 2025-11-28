import { useState } from 'react';
import { Search, Calendar, Settings, Eye, Edit } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

interface ReceitasScreenProps {
  onNovaReceita: () => void;
}

interface Receita {
  id: string;
  numero: string;
  data: string;
  cliente: string;
  responsavelTecnico: string;
  envio: string;
  status: 'rascunho' | 'finalizada' | 'cancelada';
}

const mockReceitas: Receita[] = [
  {
    id: '1',
    numero: '001/2025',
    data: '28/11/2025',
    cliente: 'Fazenda São José',
    responsavelTecnico: 'Eng. João Silva',
    envio: '28/11/2025',
    status: 'finalizada',
  },
  {
    id: '2',
    numero: '002/2025',
    data: '27/11/2025',
    cliente: 'Sítio Boa Esperança',
    responsavelTecnico: 'Eng. Maria Santos',
    envio: 'Não enviado',
    status: 'rascunho',
  },
  {
    id: '3',
    numero: '003/2025',
    data: '26/11/2025',
    cliente: 'Fazenda Santa Clara',
    responsavelTecnico: 'Eng. João Silva',
    envio: '26/11/2025',
    status: 'finalizada',
  },
  {
    id: '4',
    numero: '004/2025',
    data: '25/11/2025',
    cliente: 'Chácara Verde',
    responsavelTecnico: 'Eng. Carlos Oliveira',
    envio: 'Não enviado',
    status: 'rascunho',
  },
  {
    id: '5',
    numero: '005/2025',
    data: '24/11/2025',
    cliente: 'Fazenda Progresso',
    responsavelTecnico: 'Eng. Maria Santos',
    envio: '24/11/2025',
    status: 'cancelada',
  },
];

export function ReceitasScreen({ onNovaReceita }: ReceitasScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const statusCounts = {
    rascunhos: mockReceitas.filter(r => r.status === 'rascunho').length,
    finalizadas: mockReceitas.filter(r => r.status === 'finalizada').length,
    canceladas: mockReceitas.filter(r => r.status === 'cancelada').length,
  };

  const getStatusColor = (status: Receita['status']) => {
    switch (status) {
      case 'rascunho':
        return 'bg-yellow-500';
      case 'finalizada':
        return 'bg-emerald-500';
      case 'cancelada':
        return 'bg-red-500';
    }
  };

  return (
    <main className="pt-16 pb-6 px-4">
      <div className="max-w-md mx-auto">
        {/* Botão Nova Receita */}
        <div className="pt-4 mb-4">
          <Button 
            onClick={onNovaReceita}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            + Nova Receita
          </Button>
        </div>

        {/* Filtros */}
        <div className="space-y-3 mb-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="date"
                placeholder="Data inicial"
                className="pl-10 text-sm"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="date"
                placeholder="Data final"
                className="pl-10 text-sm"
              />
            </div>
          </div>

          <select className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
            <option>Selecionar...</option>
            <option>Rascunhos</option>
            <option>Finalizadas</option>
            <option>Canceladas</option>
          </select>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar receita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Cards de Status */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <Card className="bg-yellow-50 border-yellow-200 p-4 text-center">
            <div className="text-2xl text-gray-900 mb-1">{statusCounts.rascunhos}</div>
            <p className="text-xs text-gray-600">Rascunhos</p>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200 p-4 text-center">
            <div className="text-2xl text-gray-900 mb-1">{statusCounts.finalizadas}</div>
            <p className="text-xs text-gray-600">Finalizadas</p>
          </Card>
          <Card className="bg-red-50 border-red-200 p-4 text-center">
            <div className="text-2xl text-gray-900 mb-1">{statusCounts.canceladas}</div>
            <p className="text-xs text-gray-600">Canceladas</p>
          </Card>
        </div>

        {/* Lista de Receitas */}
        <div className="space-y-3">
          {mockReceitas.map((receita) => (
            <Card key={receita.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-gray-900 mb-1">Receita {receita.numero}</h3>
                    <p className="text-gray-600 text-sm">{receita.data}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(receita.status)}`} />
                </div>

                {/* Informações */}
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Cliente</p>
                    <p className="text-sm text-gray-900">{receita.cliente}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Responsável Técnico</p>
                    <p className="text-sm text-gray-900">{receita.responsavelTecnico}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Envio</p>
                    <p className="text-sm text-gray-900">{receita.envio}</p>
                  </div>
                </div>

                {/* Ações */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    Visualizar
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Edit className="w-4 h-4 mr-1" />
                    Editar
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}