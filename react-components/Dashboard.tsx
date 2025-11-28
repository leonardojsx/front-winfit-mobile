import { WeatherCard } from './WeatherCard';
import { MetricCard } from './MetricCard';
import { UpdatesCard } from './UpdatesCard';
import { TrendingUp, FileText, Receipt, Users } from 'lucide-react';

export function Dashboard() {
  return (
    <main className="pt-16 pb-6 px-4">
      <div className="max-w-md mx-auto space-y-4">
        {/* Card Previsão do Tempo - Destaque */}
        <WeatherCard />

        {/* Cards de Métricas */}
        <MetricCard
          icon={<TrendingUp className="w-6 h-6" />}
          title="Volume de Vendas"
          period="Mês"
          value="R$ 248.750,00"
          subtitle="Restam 2 dias para o final do mês"
          color="green"
        />

        <MetricCard
          icon={<FileText className="w-6 h-6" />}
          title="Receitas Emitidas"
          period="Mês"
          value="127"
          subtitle="Receitas agronômicas no período"
          color="green"
        />

        <MetricCard
          icon={<Receipt className="w-6 h-6" />}
          title="Emissões Fiscais"
          period="Mês"
          value="184"
          subtitle="+12% em relação ao mês anterior"
          color="green"
        />

        <MetricCard
          icon={<Users className="w-6 h-6" />}
          title="Clientes Ativos"
          period=""
          value="342"
          subtitle="15 novos clientes este mês"
          color="green"
        />

        {/* Card Últimas Atualizações */}
        <UpdatesCard />
      </div>
    </main>
  );
}
