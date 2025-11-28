import { Cloud, Wind, Droplets } from 'lucide-react';
import { Card } from './ui/card';

export function WeatherCard() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  });

  return (
    <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg">
      <div className="p-5">
        {/* Cabeçalho */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-white/90 text-sm mb-1">Viçosa, MG</h3>
            <p className="text-white/70 text-xs capitalize">{formattedDate}</p>
          </div>
          <Cloud className="w-12 h-12 text-white/80" />
        </div>

        {/* Temperatura Principal */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl">21°</span>
            <span className="text-white/80">C</span>
          </div>
          <p className="text-white/90 mt-1">Nublado</p>
        </div>

        {/* Informações Adicionais */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
          <div className="text-center">
            <p className="text-white/70 text-xs mb-1">Máxima</p>
            <p className="text-white">28°</p>
          </div>
          <div className="flex flex-col items-center">
            <Wind className="w-4 h-4 text-white/70 mb-1" />
            <p className="text-white/70 text-xs mb-1">Vento</p>
            <p className="text-white">12 km/h</p>
          </div>
          <div className="flex flex-col items-center">
            <Droplets className="w-4 h-4 text-white/70 mb-1" />
            <p className="text-white/70 text-xs mb-1">Umidade</p>
            <p className="text-white">68%</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
