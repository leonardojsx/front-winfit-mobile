<template>
  <main class="pt-16 pb-24 px-4">
    <div class="max-w-md mx-auto">
      <!-- Barra de Steps Minimalista com Ícones -->
      <div class="pt-4 mb-6">
        <div class="flex items-center justify-center">
          <div 
            v-for="(step, index) in steps" 
            :key="step.number" 
            class="flex items-center"
          >
            <!-- Círculo do Step -->
            <div
              :class="[
                'w-10 h-10 rounded-full flex items-center justify-center transition-all',
                currentStep === step.number
                  ? 'bg-emerald-600'
                  : currentStep > step.number
                  ? 'bg-emerald-100'
                  : 'bg-gray-200'
              ]"
            >
              <component
                :is="step.icon"
                :class="[
                  'w-5 h-5',
                  currentStep === step.number
                    ? 'text-white'
                    : currentStep > step.number
                    ? 'text-emerald-600'
                    : 'text-gray-400'
                ]"
              />
            </div>

            <!-- Linha conectora -->
            <div 
              v-if="index < steps.length - 1"
              :class="[
                'h-0.5 w-16 mx-1 transition-all',
                currentStep > step.number ? 'bg-emerald-600' : 'bg-gray-200'
              ]"
            />

          </div>
        </div>
      </div>

      <!-- Container dos Steps -->
      <div class="relative">
        <!-- Step 1 - Dados Gerais -->
        <div v-if="currentStep === 1" class="animate-slide-in">
          <div class="bg-white shadow-sm p-5 rounded-lg border border-gray-200 mb-4">
            <div class="space-y-4">
              <div>
                <label for="data" class="text-sm text-gray-700 mb-1.5 block">Data</label>
                <div class="relative">
                  <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="data"
                    type="date"
                    v-model="formData.data"
                    class="w-full pl-10 h-10 border border-gray-200 rounded-lg px-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label for="cliente" class="text-sm text-gray-700 mb-1.5 block">Cliente</label>
                <div class="flex gap-2">
                  <select
                    id="cliente"
                    v-model="formData.cliente"
                    class="flex-1 h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="">Selecionar cliente...</option>
                    <option value="1">Fazenda São José</option>
                    <option value="2">Sítio Boa Esperança</option>
                    <option value="3">Fazenda Santa Clara</option>
                  </select>
                  <button class="h-10 px-3 border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
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
                    class="flex-1 h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="">Selecionar funcionário...</option>
                    <option value="1">João Silva</option>
                    <option value="2">Maria Santos</option>
                  </select>
                  <button class="h-10 px-3 border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Plus class="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <label for="propriedade" class="text-sm text-gray-700 mb-1.5 block">Propriedade</label>
                <input
                  id="propriedade"
                  type="text"
                  v-model="formData.propriedade"
                  placeholder="Nome da propriedade"
                  class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label for="situacao" class="text-sm text-gray-700 mb-1.5 block">Situação</label>
                <input
                  id="situacao"
                  type="text"
                  v-model="formData.situacao"
                  disabled
                  class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 - Itens do Receituário -->
        <div v-if="currentStep === 2" class="animate-slide-in">
          <div class="space-y-4 mb-4">
            <div class="bg-white shadow-sm p-5 rounded-lg border border-gray-200">
              <div class="space-y-4">
                <div>
                  <label for="produto" class="text-sm text-gray-700 mb-1.5 block">Produto</label>
                  <select
                    id="produto"
                    v-model="novoProduto.produto"
                    class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="">Selecionar produto...</option>
                    <option value="ACTARA 10 GR">ACTARA 10 GR</option>
                    <option value="ROUNDUP ORIGINAL DI">ROUNDUP ORIGINAL DI</option>
                    <option value="CERCOBIN 700 WP">CERCOBIN 700 WP</option>
                    <option value="KARATE ZEON 50 CS">KARATE ZEON 50 CS</option>
                  </select>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label for="quantidade" class="text-sm text-gray-700 mb-1.5 block">Quantidade</label>
                    <input
                      id="quantidade"
                      type="number"
                      v-model="novoProduto.quantidade"
                      placeholder="0"
                      class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label for="unidade" class="text-sm text-gray-700 mb-1.5 block">Unidade</label>
                    <select
                      id="unidade"
                      v-model="novoProduto.unidade"
                      class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option value="L">L (Litros)</option>
                      <option value="kg">kg (Quilos)</option>
                      <option value="ml">ml (Mililitros)</option>
                      <option value="g">g (Gramas)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label for="observacao" class="text-sm text-gray-700 mb-1.5 block">Observação</label>
                  <textarea
                    id="observacao"
                    v-model="novoProduto.observacao"
                    rows="2"
                    placeholder="Observações sobre o produto..."
                    class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none resize-none"
                  />
                </div>

                <button 
                  @click="handleAdicionarProduto"
                  class="w-full h-10 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Plus class="w-4 h-4" />
                  Adicionar Produto
                </button>
              </div>
            </div>

            <!-- Tabela de Produtos -->
            <div v-if="produtos.length > 0" class="bg-white shadow-sm p-5 rounded-lg border border-gray-200">
              <h3 class="text-gray-900 mb-3 text-sm font-medium">Produtos Adicionados</h3>
              <div class="space-y-2">
                <div 
                  v-for="produto in produtos" 
                  :key="produto.id" 
                  class="border border-gray-200 rounded-lg p-3"
                >
                  <div class="flex justify-between items-start mb-2">
                    <div class="flex-1">
                      <p class="text-gray-900 text-sm font-medium">{{ produto.produto }}</p>
                      <p class="text-gray-600 text-xs">
                        {{ produto.quantidade }} {{ produto.unidade }}
                      </p>
                    </div>
                    <button
                      @click="handleRemoverProduto(produto.id)"
                      class="text-red-600 hover:text-red-700 p-1 transition-colors"
                    >
                      <Trash2 class="w-4 h-4" />
                    </button>
                  </div>
                  <p v-if="produto.observacao" class="text-gray-500 text-xs mt-1">{{ produto.observacao }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 - Dados Técnicos -->
        <div v-if="currentStep === 3" class="animate-slide-in">
          <div class="bg-white shadow-sm p-5 rounded-lg border border-gray-200 mb-4">
            <div class="space-y-4">
              <div>
                <label for="cultura" class="text-sm text-gray-700 mb-1.5 block">Cultura</label>
                <select
                  id="cultura"
                  v-model="formData.cultura"
                  class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="">Selecionar cultura...</option>
                  <option value="Soja">Soja</option>
                  <option value="Milho">Milho</option>
                  <option value="Café">Café</option>
                  <option value="Cana-de-açúcar">Cana-de-açúcar</option>
                </select>
              </div>

              <div>
                <label for="diagnostico" class="text-sm text-gray-700 mb-1.5 block">Diagnóstico</label>
                <select
                  id="diagnostico"
                  v-model="formData.diagnostico"
                  class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="">Selecionar diagnóstico...</option>
                  <option value="Lagarta">Lagarta</option>
                  <option value="Percevejo">Percevejo</option>
                  <option value="Ferrugem">Ferrugem</option>
                  <option value="Mofo Branco">Mofo Branco</option>
                </select>
              </div>

              <div>
                <label for="dose" class="text-sm text-gray-700 mb-1.5 block">Dose</label>
                <input
                  id="dose"
                  type="text"
                  v-model="formData.dose"
                  placeholder="Ex: 200 ml/ha"
                  class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label for="intervaloSeguranca" class="text-sm text-gray-700 mb-1.5 block">Intervalo de Segurança</label>
                <input
                  id="intervaloSeguranca"
                  type="text"
                  v-model="formData.intervaloSeguranca"
                  placeholder="Ex: 14 dias"
                  class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label for="modoAplicacao" class="text-sm text-gray-700 mb-1.5 block">Modo de Aplicação</label>
                <select
                  id="modoAplicacao"
                  v-model="formData.modoAplicacao"
                  class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="">Selecionar...</option>
                  <option value="Pulverização">Pulverização</option>
                  <option value="Tratamento de sementes">Tratamento de sementes</option>
                  <option value="Aplicação no solo">Aplicação no solo</option>
                </select>
              </div>

              <div>
                <label for="volumeCalda" class="text-sm text-gray-700 mb-1.5 block">Volume de Calda</label>
                <input
                  id="volumeCalda"
                  type="text"
                  v-model="formData.volumeCalda"
                  placeholder="Ex: 200 L/ha"
                  class="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4 - Resumo -->
        <div v-if="currentStep === 4" class="animate-slide-in">
          <div class="space-y-4 mb-4">
            <!-- Dados da Receita -->
            <div class="bg-white shadow-sm p-5 rounded-lg border border-gray-200">
              <h3 class="text-gray-900 mb-3 font-medium">Dados da Receita</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Data:</span>
                  <span class="text-gray-900">{{ formData.data || '-' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Cliente:</span>
                  <span class="text-gray-900">
                    {{ formData.cliente === '1' ? 'Fazenda São José' : 
                       formData.cliente === '2' ? 'Sítio Boa Esperança' : 
                       formData.cliente === '3' ? 'Fazenda Santa Clara' : '-' }}
                  </span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Propriedade:</span>
                  <span class="text-gray-900">{{ formData.propriedade || '-' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Cultura:</span>
                  <span class="text-gray-900">{{ formData.cultura || '-' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Diagnóstico:</span>
                  <span class="text-gray-900">{{ formData.diagnostico || '-' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Dose:</span>
                  <span class="text-gray-900">{{ formData.dose || '-' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Modo de Aplicação:</span>
                  <span class="text-gray-900">{{ formData.modoAplicacao || '-' }}</span>
                </div>
              </div>
            </div>

            <!-- Produtos -->
            <div class="bg-white shadow-sm p-5 rounded-lg border border-gray-200">
              <h3 class="text-gray-900 mb-3 font-medium">Produtos</h3>
              <div v-if="produtos.length > 0" class="space-y-3">
                <div 
                  v-for="produto in produtos" 
                  :key="produto.id" 
                  class="border border-gray-200 rounded-lg p-3"
                >
                  <p class="text-gray-900 text-sm font-medium">{{ produto.produto }}</p>
                  <p class="text-gray-600 text-xs mt-1">
                    Quantidade: {{ produto.quantidade }} {{ produto.unidade }}
                  </p>
                  <p v-if="produto.observacao" class="text-gray-500 text-xs mt-1">{{ produto.observacao }}</p>
                </div>
              </div>
              <p v-else class="text-gray-500 text-sm">Nenhum produto adicionado</p>
            </div>

            <!-- Botões de Ação -->
            <div class="space-y-2">
              <button class="w-full h-11 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <Printer class="w-4 h-4" />
                Imprimir Receita
              </button>
              <button class="w-full h-11 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <PenTool class="w-4 h-4" />
                Assinar Digitalmente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Botões de Navegação Fixos no Rodapé -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-30">
      <div class="max-w-md mx-auto">
        <!-- Step 1 -->
        <button 
          v-if="currentStep === 1"
          @click="handleNext"
          class="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
        >
          Próximo
          <ArrowRight class="w-4 h-4" />
        </button>

        <!-- Step 2 -->
        <div v-if="currentStep === 2" class="flex gap-3">
          <button 
            @click="handlePrevious"
            class="flex-1 h-12 border border-gray-300 text-gray-700 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft class="w-4 h-4" />
            Anterior
          </button>
          <button 
            @click="handleNext"
            class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            Próximo
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Step 3 -->
        <div v-if="currentStep === 3" class="flex gap-3">
          <button 
            @click="handlePrevious"
            class="flex-1 h-12 border border-gray-300 text-gray-700 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft class="w-4 h-4" />
            Anterior
          </button>
          <button 
            @click="handleNext"
            class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            Próximo
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Step 4 -->
        <div v-if="currentStep === 4" class="flex gap-3">
          <button 
            @click="handlePrevious"
            class="flex-1 h-12 border border-gray-300 text-gray-700 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft class="w-4 h-4" />
            Anterior
          </button>
          <button 
            @click="handleSubmit"
            class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            Salvar Receita
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Plus, ArrowLeft, ArrowRight, Leaf, Droplet, Clipboard, FileCheck, Trash2, Printer, PenTool } from 'lucide-vue-next'

interface ProdutoReceita {
  id: string
  produto: string
  quantidade: string
  unidade: string
  observacao: string
}

const currentStep = ref(1)

const produtos = ref<ProdutoReceita[]>([])

const novoProduto = ref({
  produto: '',
  quantidade: '',
  unidade: 'L',
  observacao: '',
})

const formData = ref({
  data: '',
  cliente: '',
  funcionario: '',
  propriedade: '',
  situacao: 'Não Enviada',
  cultura: '',
  diagnostico: '',
  dose: '',
  intervaloSeguranca: '',
  modoAplicacao: '',
  volumeCalda: '',
})

const steps = [
  { number: 1, icon: Leaf },
  { number: 2, icon: Droplet },
  { number: 3, icon: Clipboard },
  { number: 4, icon: FileCheck },
]

const handleNext = () => {
  if (currentStep.value < 4) {
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const handlePrevious = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const handleAdicionarProduto = () => {
  if (novoProduto.value.produto && novoProduto.value.quantidade) {
    produtos.value.push({
      id: Date.now().toString(),
      ...novoProduto.value,
    })
    novoProduto.value = {
      produto: '',
      quantidade: '',
      unidade: 'L',
      observacao: '',
    }
  }
}

const handleRemoverProduto = (id: string) => {
  produtos.value = produtos.value.filter((p) => p.id !== id)
}

const handleSubmit = () => {
  console.log('Finalizando receita:', { formData: formData.value, produtos: produtos.value })
}
</script>

<style scoped>
.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>