import { 
  Home, 
  Book, 
  Zap, 
  FileText, 
  ShoppingBag, 
  ClipboardList,
  FolderOpen,
  Package,
  Warehouse,
  DollarSign,
  FileOutput,
  Wallet,
  BarChart3,
  LogOut
} from 'lucide-react';

interface SideMenuProps {
  onClose: () => void;
  onNavigate: (screen: 'dashboard' | 'compendio' | 'productSheet' | 'receitas' | 'novaReceita') => void;
}

const menuItems = [
  { icon: Home, label: 'Início', screen: 'dashboard' as const, active: false },
  { icon: Book, label: 'Compêndio', screen: 'compendio' as const, active: false },
  { icon: Zap, label: 'Ações', screen: null },
  { icon: FileText, label: 'Receituário Agronômico', screen: 'receitas' as const },
  { icon: ShoppingBag, label: 'Pedido Simples', screen: null },
  { icon: ClipboardList, label: 'Pedido Completo', screen: null },
  { icon: FolderOpen, label: 'Cadastros', screen: null },
  { icon: Package, label: 'Compras', screen: null },
  { icon: Warehouse, label: 'Controle de Estoque', screen: null },
  { icon: DollarSign, label: 'Financeiro', screen: null },
  { icon: FileOutput, label: 'Emissão Fiscal', screen: null },
  { icon: Wallet, label: 'Caixa', screen: null },
  { icon: BarChart3, label: 'Relatórios', screen: null },
];

export function SideMenu({ onClose, onNavigate }: SideMenuProps) {
  const handleItemClick = (screen: 'dashboard' | 'compendio' | 'receitas' | null) => {
    if (screen) {
      onNavigate(screen);
      onClose();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header do Menu */}
      <div className="bg-emerald-700 p-6">
        <h2 className="text-white">WINFIT</h2>
        <p className="text-emerald-100 text-sm">AgroRevenda</p>
      </div>

      {/* Itens do Menu */}
      <nav className="flex-1 overflow-y-auto py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleItemClick(item.screen)}
            className={`w-full flex items-center gap-3 px-6 py-3.5 transition-colors ${
              item.active
                ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-700'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Botão Sair */}
      <div className="border-t border-gray-200">
        <button
          onClick={onClose}
          className="w-full flex items-center gap-3 px-6 py-4 text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
}
