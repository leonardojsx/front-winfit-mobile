import { useState } from 'react';
import { Calendar, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

export function NovaReceitaScreen() {
  const [formData, setFormData] = useState({
    data: '',
    cliente: '',
    funcionario: '',
    situacao: 'Não Enviada',
    propriedade: '',
    responsavelTecnico: '',
    numeroART: '',
    numeroReceita: '',
    complemento: '',
    dataNFe: '',
    numeroNFe: '',
    serie: '',
    valor: '',
    chaveNFe: '',
    produto: '',
    cultura: '',
    diagnostico: '',
    intervaloAplicacao: '',
    numeroAplicacoes: '',
    estagiocultura: '',
    doseUtilizada: '',
    volumeCalda: '',
    formaAplicacao: '',
    epocaAplicacao: '',
    areaTratar: '',
    medida: 'Ha',
    qtProduto: '',
    qtEmbalagem: '',
    embalagens: '',
    lote: '',
    modalidadeAplicacao: '',
    horario: '',
    modoAplicacao: '',
  });

  const handleSubmit = () => {
    console.log('Salvando receita:', formData);
  };

  return (
    <main className="pt-16 pb-24 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-gray-900 mb-6 pt-4">Nova Receita Agronômica</h2>

        {/* Bloco 1 - Dados Gerais */}
        <Card className="bg-white shadow-sm p-4 mb-4">
          <h3 className="text-gray-900 mb-4">Dados Gerais</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="data" className="text-sm text-gray-700 mb-1.5 block">Data</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="data"
                  type="date"
                  value={formData.data}
                  onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cliente" className="text-sm text-gray-700 mb-1.5 block">Cliente</Label>
              <div className="flex gap-2">
                <select
                  id="cliente"
                  value={formData.cliente}
                  onChange={(e) => setFormData({ ...formData, cliente: e.target.value })}
                  className="flex-1 h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="">Selecionar cliente...</option>
                  <option value="1">Fazenda São José</option>
                  <option value="2">Sítio Boa Esperança</option>
                  <option value="3">Fazenda Santa Clara</option>
                </select>
                <Button size="sm" variant="outline" className="px-3">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="funcionario" className="text-sm text-gray-700 mb-1.5 block">Funcionário</Label>
              <div className="flex gap-2">
                <select
                  id="funcionario"
                  value={formData.funcionario}
                  onChange={(e) => setFormData({ ...formData, funcionario: e.target.value })}
                  className="flex-1 h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="">Selecionar funcionário...</option>
                  <option value="1">João Silva</option>
                  <option value="2">Maria Santos</option>
                </select>
                <Button size="sm" variant="outline" className="px-3">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="situacao" className="text-sm text-gray-700 mb-1.5 block">Situação da Receita</Label>
              <Input
                id="situacao"
                type="text"
                value={formData.situacao}
                disabled
                className="bg-gray-50"
              />
            </div>
          </div>
        </Card>

        {/* Bloco 2 - Dados do Receituário Agronômico */}
        <Card className="bg-white shadow-sm p-4 mb-4">
          <h3 className="text-gray-900 mb-4">Dados do Receituário Agronômico</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="propriedade" className="text-sm text-gray-700 mb-1.5 block">Propriedade</Label>
              <Input
                id="propriedade"
                type="text"
                value={formData.propriedade}
                onChange={(e) => setFormData({ ...formData, propriedade: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="responsavelTecnico" className="text-sm text-gray-700 mb-1.5 block">Responsável Técnico</Label>
              <div className="flex gap-2">
                <select
                  id="responsavelTecnico"
                  value={formData.responsavelTecnico}
                  onChange={(e) => setFormData({ ...formData, responsavelTecnico: e.target.value })}
                  className="flex-1 h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="">Selecionar...</option>
                  <option value="1">Eng. João Silva</option>
                  <option value="2">Eng. Maria Santos</option>
                  <option value="3">Eng. Carlos Oliveira</option>
                </select>
                <Button size="sm" variant="outline" className="px-3">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="numeroART" className="text-sm text-gray-700 mb-1.5 block">Nº ART/TRT</Label>
                <Input
                  id="numeroART"
                  type="text"
                  value={formData.numeroART}
                  onChange={(e) => setFormData({ ...formData, numeroART: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="numeroReceita" className="text-sm text-gray-700 mb-1.5 block">Nº Receita</Label>
                <Input
                  id="numeroReceita"
                  type="text"
                  value={formData.numeroReceita}
                  onChange={(e) => setFormData({ ...formData, numeroReceita: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="complemento" className="text-sm text-gray-700 mb-1.5 block">Complemento</Label>
              <Input
                id="complemento"
                type="text"
                value={formData.complemento}
                onChange={(e) => setFormData({ ...formData, complemento: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="dataNFe" className="text-sm text-gray-700 mb-1.5 block">Data NF-e</Label>
                <Input
                  id="dataNFe"
                  type="date"
                  value={formData.dataNFe}
                  onChange={(e) => setFormData({ ...formData, dataNFe: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="numeroNFe" className="text-sm text-gray-700 mb-1.5 block">Nº NF-e</Label>
                <Input
                  id="numeroNFe"
                  type="text"
                  value={formData.numeroNFe}
                  onChange={(e) => setFormData({ ...formData, numeroNFe: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="serie" className="text-sm text-gray-700 mb-1.5 block">Série</Label>
                <Input
                  id="serie"
                  type="text"
                  value={formData.serie}
                  onChange={(e) => setFormData({ ...formData, serie: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="valor" className="text-sm text-gray-700 mb-1.5 block">Valor</Label>
                <Input
                  id="valor"
                  type="text"
                  value={formData.valor}
                  onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
                  placeholder="R$ 0,00"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="chaveNFe" className="text-sm text-gray-700 mb-1.5 block">Chave NF-e</Label>
              <Input
                id="chaveNFe"
                type="text"
                value={formData.chaveNFe}
                onChange={(e) => setFormData({ ...formData, chaveNFe: e.target.value })}
              />
            </div>
          </div>
        </Card>

        {/* Bloco 3 - Produto, Cultura e Diagnóstico */}
        <Card className="bg-white shadow-sm p-4 mb-4">
          <h3 className="text-gray-900 mb-4">Produto, Cultura e Diagnóstico</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="produto" className="text-sm text-gray-700 mb-1.5 block">Selecionar Agrotóxico (Produto)</Label>
              <select
                id="produto"
                value={formData.produto}
                onChange={(e) => setFormData({ ...formData, produto: e.target.value })}
                className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              >
                <option value="">Selecionar...</option>
                <option value="1">ACTARA 10 GR</option>
                <option value="2">ROUNDUP ORIGINAL DI</option>
                <option value="3">CERCOBIN 700 WP</option>
              </select>
            </div>

            <div>
              <Label htmlFor="cultura" className="text-sm text-gray-700 mb-1.5 block">Selecionar Cultura</Label>
              <select
                id="cultura"
                value={formData.cultura}
                onChange={(e) => setFormData({ ...formData, cultura: e.target.value })}
                className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              >
                <option value="">Selecionar...</option>
                <option value="1">Soja</option>
                <option value="2">Milho</option>
                <option value="3">Café</option>
                <option value="4">Cana-de-açúcar</option>
              </select>
            </div>

            <div>
              <Label htmlFor="diagnostico" className="text-sm text-gray-700 mb-1.5 block">Selecionar Diagnóstico (Alvo)</Label>
              <select
                id="diagnostico"
                value={formData.diagnostico}
                onChange={(e) => setFormData({ ...formData, diagnostico: e.target.value })}
                className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              >
                <option value="">Selecionar...</option>
                <option value="1">Lagarta</option>
                <option value="2">Percevejo</option>
                <option value="3">Ferrugem</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="intervaloAplicacao" className="text-sm text-gray-700 mb-1.5 block">Intervalo de aplicação (dias)</Label>
                <Input
                  id="intervaloAplicacao"
                  type="number"
                  value={formData.intervaloAplicacao}
                  onChange={(e) => setFormData({ ...formData, intervaloAplicacao: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="numeroAplicacoes" className="text-sm text-gray-700 mb-1.5 block">Nº de aplicações</Label>
                <Input
                  id="numeroAplicacoes"
                  type="number"
                  value={formData.numeroAplicacoes}
                  onChange={(e) => setFormData({ ...formData, numeroAplicacoes: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="estagiocultura" className="text-sm text-gray-700 mb-1.5 block">Estágio da cultura</Label>
              <Input
                id="estagiocultura"
                type="text"
                value={formData.estagiocultura}
                onChange={(e) => setFormData({ ...formData, estagiocultura: e.target.value })}
              />
            </div>

            <div>
              <Label className="text-sm text-gray-700 mb-1.5 block">Dose utilizada</Label>
              <div className="space-y-2">
                <Input
                  type="text"
                  value={formData.doseUtilizada}
                  onChange={(e) => setFormData({ ...formData, doseUtilizada: e.target.value })}
                  placeholder="Digite a dose"
                />
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">Mínimo</Button>
                  <Button size="sm" variant="outline" className="flex-1">Máximo</Button>
                  <Button size="sm" variant="outline" className="flex-1">Intervalo</Button>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="volumeCalda" className="text-sm text-gray-700 mb-1.5 block">Volume de calda</Label>
              <Input
                id="volumeCalda"
                type="text"
                value={formData.volumeCalda}
                onChange={(e) => setFormData({ ...formData, volumeCalda: e.target.value })}
                placeholder="L/ha"
              />
            </div>

            <div>
              <Label htmlFor="formaAplicacao" className="text-sm text-gray-700 mb-1.5 block">Forma de aplicação (observações)</Label>
              <Textarea
                id="formaAplicacao"
                value={formData.formaAplicacao}
                onChange={(e) => setFormData({ ...formData, formaAplicacao: e.target.value })}
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="epocaAplicacao" className="text-sm text-gray-700 mb-1.5 block">Época de aplicação</Label>
              <Textarea
                id="epocaAplicacao"
                value={formData.epocaAplicacao}
                onChange={(e) => setFormData({ ...formData, epocaAplicacao: e.target.value })}
                rows={3}
              />
            </div>
          </div>
        </Card>

        {/* Bloco 4 - Dados Técnicos */}
        <Card className="bg-white shadow-sm p-4 mb-4">
          <h3 className="text-gray-900 mb-4">Dados Técnicos</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="areaTratar" className="text-sm text-gray-700 mb-1.5 block">Área a tratar</Label>
                <Input
                  id="areaTratar"
                  type="text"
                  value={formData.areaTratar}
                  onChange={(e) => setFormData({ ...formData, areaTratar: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="medida" className="text-sm text-gray-700 mb-1.5 block">Medida</Label>
                <select
                  id="medida"
                  value={formData.medida}
                  onChange={(e) => setFormData({ ...formData, medida: e.target.value })}
                  className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="Ha">Ha</option>
                  <option value="m²">m²</option>
                  <option value="Alqueire">Alqueire</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="qtProduto" className="text-sm text-gray-700 mb-1.5 block">Qt. produto</Label>
                <Input
                  id="qtProduto"
                  type="text"
                  value={formData.qtProduto}
                  onChange={(e) => setFormData({ ...formData, qtProduto: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="qtEmbalagem" className="text-sm text-gray-700 mb-1.5 block">Qt. embalagem</Label>
                <Input
                  id="qtEmbalagem"
                  type="text"
                  value={formData.qtEmbalagem}
                  onChange={(e) => setFormData({ ...formData, qtEmbalagem: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="embalagens" className="text-sm text-gray-700 mb-1.5 block">Embalagens</Label>
                <Input
                  id="embalagens"
                  type="text"
                  value={formData.embalagens}
                  onChange={(e) => setFormData({ ...formData, embalagens: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="lote" className="text-sm text-gray-700 mb-1.5 block">Lote</Label>
                <Input
                  id="lote"
                  type="text"
                  value={formData.lote}
                  onChange={(e) => setFormData({ ...formData, lote: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="modalidadeAplicacao" className="text-sm text-gray-700 mb-1.5 block">Modalidade de aplicação</Label>
              <select
                id="modalidadeAplicacao"
                value={formData.modalidadeAplicacao}
                onChange={(e) => setFormData({ ...formData, modalidadeAplicacao: e.target.value })}
                className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              >
                <option value="">Selecionar...</option>
                <option value="1">Terrestre</option>
                <option value="2">Aérea</option>
              </select>
            </div>

            <div>
              <Label htmlFor="horario" className="text-sm text-gray-700 mb-1.5 block">Horário</Label>
              <Input
                id="horario"
                type="time"
                value={formData.horario}
                onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="modoAplicacao" className="text-sm text-gray-700 mb-1.5 block">Modo de aplicação</Label>
              <select
                id="modoAplicacao"
                value={formData.modoAplicacao}
                onChange={(e) => setFormData({ ...formData, modoAplicacao: e.target.value })}
                className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              >
                <option value="">Selecionar...</option>
                <option value="1">Pulverização</option>
                <option value="2">Tratamento de sementes</option>
                <option value="3">Aplicação no solo</option>
              </select>
            </div>
          </div>
        </Card>
      </div>

      {/* Botão Fixo no Rodapé */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto">
          <Button 
            onClick={handleSubmit}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12"
          >
            Salvar Receita
          </Button>
        </div>
      </div>
    </main>
  );
}