import { Card } from './ui/card';
import { Clock } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const updates = [
  {
    id: 1,
    date: '28/11/2025',
    time: '14:32',
    title: 'Nova venda registrada',
    description: 'Pedido #1847 - Cliente: Fazenda São José',
  },
  {
    id: 2,
    date: '28/11/2025',
    time: '11:15',
    title: 'Receita agronômica emitida',
    description: 'Receita #445 - Eng. Agr. João Silva',
  },
  {
    id: 3,
    date: '28/11/2025',
    time: '09:23',
    title: 'Produto em estoque baixo',
    description: 'Herbicida XYZ - Apenas 12 unidades',
  },
  {
    id: 4,
    date: '27/11/2025',
    time: '16:47',
    title: 'Pagamento confirmado',
    description: 'NF #3421 - R$ 8.450,00',
  },
  {
    id: 5,
    date: '27/11/2025',
    time: '14:12',
    title: 'Novo cliente cadastrado',
    description: 'Sítio Boa Esperança - Viçosa/MG',
  },
];

export function UpdatesCard() {
  return (
    <Card className="bg-white shadow-sm">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-emerald-700" />
          <h3 className="text-gray-900">Últimas Atualizações</h3>
        </div>

        <ScrollArea className="h-[320px] -mx-5">
          <div className="px-5 space-y-3">
            {updates.map((update) => (
              <div
                key={update.id}
                className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-emerald-200 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-gray-900 text-sm">{update.title}</p>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                    {update.time}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{update.description}</p>
                <p className="text-gray-400 text-xs">{update.date}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
}
