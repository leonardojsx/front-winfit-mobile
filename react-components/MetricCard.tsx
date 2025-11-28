import { Card } from './ui/card';
import { ReactNode } from 'react';

interface MetricCardProps {
  icon: ReactNode;
  title: string;
  period: string;
  value: string;
  subtitle: string;
  color: 'green' | 'blue' | 'orange';
}

export function MetricCard({ icon, title, period, value, subtitle, color }: MetricCardProps) {
  const colorClasses = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    orange: 'bg-orange-50 text-orange-700 border-orange-200',
  };

  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-5">
        {/* Ícone e Título */}
        <div className="flex items-start gap-3 mb-4">
          <div className={`p-2.5 rounded-lg ${colorClasses[color]}`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900">{title}</h3>
            {period && <p className="text-gray-500 text-sm">{period}</p>}
          </div>
        </div>

        {/* Valor Principal */}
        <div className="mb-2">
          <p className="text-gray-900 text-3xl">{value}</p>
        </div>

        {/* Subtítulo */}
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </div>
    </Card>
  );
}
