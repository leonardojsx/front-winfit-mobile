<template>
  <main class="pt-16 pb-24 px-4">
    <div class="max-w-md mx-auto">
      <h2 class="text-gray-900 mb-6 pt-4">Nova Receita Agronômica</h2>

      <!-- Bloco 1 - Dados Gerais -->
      <div class="bg-white shadow-sm p-4 mb-4 rounded-lg border border-gray-200">
        <h3 class="text-gray-900 mb-4">Dados Gerais</h3>
        
        <div class="space-y-4">
          <div>
            <label for="data" class="text-sm text-gray-700 mb-1.5 block">Data</label>
            <div class="relative">
              <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="data"
                type="date"
                v-model="formData.data"
                class="w-full pl-10 h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label for="cliente" class="text-sm text-gray-700 mb-1.5 block">Cliente</label>
            <div class="flex gap-2">
              <select
                id="cliente"
                v-model="formData.cliente"
                class="flex-1 h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              >
                <option value="">Selecionar cliente...</option>
                <option value="1">Fazenda São José</option>
                <option value="2">Sítio Boa Esperança</option>
                <option value="3">Fazenda Santa Clara</option>
              </select>
              <button class="h-10 w-10 border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Plus class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <label for="funcionario" class="text-sm text-gray-700 mb-1.5 block">Funcionário</label>
            <div class="flex gap-2">
              <select
                id="funcionario"
                v-model="formData.funcionario"
                class="flex-1 h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              >
                <option value="">Selecionar funcionário...</option>
                <option value="1">João Silva</option>
                <option value="2">Maria Santos</option>
              </select>
              <button class="h-10 w-10 border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Plus class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <label for="situacao" class="text-sm text-gray-700 mb-1.5 block">Situação da Receita</label>
            <input
              id="situacao"
              type="text"
              v-model="formData.situacao"
              disabled
              class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm bg-gray-50"
            />
          </div>
        </div>
      </div>

      <!-- Bloco 2 - Dados do Receituário Agronômico -->
      <div class="bg-white shadow-sm p-4 mb-4 rounded-lg border border-gray-200">
        <h3 class="text-gray-900 mb-4">Dados do Receituário Agronômico</h3>
        
        <div class="space-y-4">
          <div>
            <label for="propriedade" class="text-sm text-gray-700 mb-1.5 block">Propriedade</label>
            <input
              id="propriedade"
              type="text"
              v-model="formData.propriedade"
              class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label for="responsavelTecnico" class="text-sm text-gray-700 mb-1.5 block">Responsável Técnico</label>
            <div class="flex gap-2">
              <select
                id="responsavelTecnico"
                v-model="formData.responsavelTecnico"
                class="flex-1 h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              >
                <option value="">Selecionar...</option>
                <option value="1">Eng. João Silva</option>
                <option value="2">Eng. Maria Santos</option>
                <option value="3">Eng. Carlos Oliveira</option>
              </select>
              <button class="h-10 w-10 border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Plus class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label for="numeroART" class="text-sm text-gray-700 mb-1.5 block">Nº ART/TRT</label>
              <input
                id="numeroART"
                type="text"
                v-model="formData.numeroART"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label for="numeroReceita" class="text-sm text-gray-700 mb-1.5 block">Nº Receita</label>
              <input
                id="numeroReceita"
                type="text"
                v-model="formData.numeroReceita"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label for="complemento" class="text-sm text-gray-700 mb-1.5 block">Complemento</label>
            <input
              id="complemento"
              type="text"
              v-model="formData.complemento"
              class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label for="dataNFe" class="text-sm text-gray-700 mb-1.5 block">Data NF-e</label>
              <input
                id="dataNFe"
                type="date"
                v-model="formData.dataNFe"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label for="numeroNFe" class="text-sm text-gray-700 mb-1.5 block">Nº NF-e</label>
              <input
                id="numeroNFe"
                type="text"
                v-model="formData.numeroNFe"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label for="serie" class="text-sm text-gray-700 mb-1.5 block">Série</label>
              <input
                id="serie"
                type="text"
                v-model="formData.serie"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label for="valor" class="text-sm text-gray-700 mb-1.5 block">Valor</label>
              <input
                id="valor"
                type="text"
                v-model="formData.valor"
                placeholder="R$ 0,00"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label for="chaveNFe" class="text-sm text-gray-700 mb-1.5 block">Chave NF-e</label>
            <input
              id="chaveNFe"
              type="text"
              v-model="formData.chaveNFe"
              class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      <!-- Bloco 3 - Produto, Cultura e Diagnóstico -->
      <div class="bg-white shadow-sm p-4 mb-4 rounded-lg border border-gray-200">
        <h3 class="text-gray-900 mb-4">Produto, Cultura e Diagnóstico</h3>
        
        <div class="space-y-4">
          <div>
            <label for="produto" class="text-sm text-gray-700 mb-1.5 block">Selecionar Agrotóxico (Produto)</label>
            <select
              id="produto"
              v-model="formData.produto"
              class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Selecionar...</option>
              <option value="1">ACTARA 10 GR</option>
              <option value="2">ROUNDUP ORIGINAL DI</option>
              <option value="3">CERCOBIN 700 WP</option>
            </select>
          </div>

          <div>
            <label for="cultura" class="text-sm text-gray-700 mb-1.5 block">Selecionar Cultura</label>
            <select
              id="cultura"
              v-model="formData.cultura"
              class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Selecionar...</option>
              <option value="1">Soja</option>
              <option value="2">Milho</option>
              <option value="3">Café</option>
              <option value="4">Cana-de-açúcar</option>
            </select>
          </div>

          <div>
            <label for="diagnostico" class="text-sm text-gray-700 mb-1.5 block">Selecionar Diagnóstico (Alvo)</label>
            <select
              id="diagnostico"
              v-model="formData.diagnostico"
              class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Selecionar...</option>
              <option value="1">Lagarta</option>
              <option value="2">Percevejo</option>
              <option value="3">Ferrugem</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label for="intervaloAplicacao" class="text-sm text-gray-700 mb-1.5 block">Intervalo de aplicação (dias)</label>
              <input
                id="intervaloAplicacao"
                type="number"
                v-model="formData.intervaloAplicacao"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label for="numeroAplicacoes" class="text-sm text-gray-700 mb-1.5 block">Nº de aplicações</label>
              <input
                id="numeroAplicacoes"
                type="number"
                v-model="formData.numeroAplicacoes"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label for="estagiocultura" class="text-sm text-gray-700 mb-1.5 block">Estágio da cultura</label>
            <input
              id="estagiocultura"
              type="text"
              v-model="formData.estagiocultura"
              class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label class="text-sm text-gray-700 mb-1.5 block">Dose utilizada</label>
            <div class="space-y-2">
              <input
                type="text"
                v-model="formData.doseUtilizada"
                placeholder="Digite a dose"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
              <div class="flex gap-2">
                <button class="flex-1 h-8 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Mínimo</button>
                <button class="flex-1 h-8 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Máximo</button>
                <button class="flex-1 h-8 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Intervalo</button>
              </div>
            </div>
          </div>

          <div>
            <label for="volumeCalda" class="text-sm text-gray-700 mb-1.5 block">Volume de calda</label>
            <input
              id="volumeCalda"
              type="text"
              v-model="formData.volumeCalda"
              placeholder="L/ha"
              class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label for="formaAplicacao" class="text-sm text-gray-700 mb-1.5 block">Forma de aplicação (observações)</label>
            <textarea
              id="formaAplicacao"
              v-model="formData.formaAplicacao"
              rows="3"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none"
            />
          </div>

          <div>
            <label for="epocaAplicacao" class="text-sm text-gray-700 mb-1.5 block">Época de aplicação</label>
            <textarea
              id="epocaAplicacao"
              v-model="formData.epocaAplicacao"
              rows="3"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none"
            />
          </div>
        </div>
      </div>

      <!-- Bloco 4 - Dados Técnicos -->
      <div class="bg-white shadow-sm p-4 mb-4 rounded-lg border border-gray-200">
        <h3 class="text-gray-900 mb-4">Dados Técnicos</h3>
        
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label for="areaTratar" class="text-sm text-gray-700 mb-1.5 block">Área a tratar</label>
              <input
                id="areaTratar"
                type="text"
                v-model="formData.areaTratar"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label for="medida" class="text-sm text-gray-700 mb-1.5 block">Medida</label>
              <select
                id="medida"
                v-model="formData.medida"
                class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              >
                <option value="Ha">Ha</option>
                <option value="m²">m²</option>
                <option value="Alqueire">Alqueire</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label for="qtProduto" class="text-sm text-gray-700 mb-1.5 block">Qt. produto</label>
              <input
                id="qtProduto"
                type="text"
                v-model="formData.qtProduto"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label for="qtEmbalagem" class="text-sm text-gray-700 mb-1.5 block">Qt. embalagem</label>
              <input
                id="qtEmbalagem"
                type="text"
                v-model="formData.qtEmbalagem"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label for="embalagens" class="text-sm text-gray-700 mb-1.5 block">Embalagens</label>
              <input
                id="embalagens"
                type="text"
                v-model="formData.embalagens"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label for="lote" class="text-sm text-gray-700 mb-1.5 block">Lote</label>
              <input
                id="lote"
                type="text"
                v-model="formData.lote"
                class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label for="modalidadeAplicacao" class="text-sm text-gray-700 mb-1.5 block">Modalidade de aplicação</label>
            <select
              id="modalidadeAplicacao"
              v-model="formData.modalidadeAplicacao"
              class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Selecionar...</option>
              <option value="1">Terrestre</option>
              <option value="2">Aérea</option>
            </select>
          </div>

          <div>
            <label for="horario" class="text-sm text-gray-700 mb-1.5 block">Horário</label>
            <input
              id="horario"
              type="time"
              v-model="formData.horario"
              class="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label for="modoAplicacao" class="text-sm text-gray-700 mb-1.5 block">Modo de aplicação</label>
            <select
              id="modoAplicacao"
              v-model="formData.modoAplicacao"
              class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Selecionar...</option>
              <option value="1">Pulverização</option>
              <option value="2">Tratamento de sementes</option>
              <option value="3">Aplicação no solo</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Botão Fixo no Rodapé -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div class="max-w-md mx-auto">
        <button 
          @click="handleSubmit"
          class="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-lg font-medium transition-colors"
        >
          Salvar Receita
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Plus } from 'lucide-vue-next'

const formData = ref({
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
})

const handleSubmit = () => {
  console.log('Salvando receita:', formData.value)
  // Implementar lógica de salvamento
}
</script>