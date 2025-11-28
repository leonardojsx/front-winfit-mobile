import { Menu, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { SideMenu } from './SideMenu';
import { Button } from './ui/button';

interface MobileHeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onNavigate: (screen: 'dashboard' | 'compendio' | 'productSheet' | 'receitas' | 'novaReceita') => void;
  currentScreen: string;
  onBack: () => void;
}

export function MobileHeader({ 
  isMenuOpen, 
  setIsMenuOpen, 
  onNavigate,
  currentScreen,
  onBack
}: MobileHeaderProps) {
  const showBackButton = currentScreen !== 'dashboard';

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-3">
          {showBackButton ? (
            <button 
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          ) : (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Menu className="w-6 h-6 text-gray-700" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0">
                <SideMenu onClose={() => setIsMenuOpen(false)} onNavigate={onNavigate} />
              </SheetContent>
            </Sheet>
          )}

          <div>
            <h1 className="text-emerald-700">WINFIT</h1>
            <p className="text-xs text-gray-600">AgroRevenda</p>
          </div>
        </div>

        <Button 
          size="sm" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4"
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          PDV
        </Button>
      </div>
    </header>
  );
}
