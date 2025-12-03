<template>
  <main class="nova-receita-container">
      <!-- Barra de Steps Minimalista com Ícones -->
      <div class="steps-progress">
        <div 
          v-for="(step, index) in steps" 
          :key="step.number"
          style="display: flex; align-items: center;"
        >
          <!-- Círculo do Step -->
          <div
            :class="[
              'step-circle',
              currentStep === step.number
                ? 'current'
                : currentStep > step.number
                ? 'completed'
                : 'pending'
            ]"
          >
            <component
              :is="step.icon"
              :class="[
                'step-icon',
                currentStep === step.number
                  ? 'current'
                  : currentStep > step.number
                  ? 'completed'
                  : 'pending'
              ]"
            />
          </div>

          <!-- Linha conectora -->
          <div 
            v-if="index < steps.length - 1"
            :class="[
              'step-connector',
              currentStep > step.number ? 'completed' : 'pending'
            ]"
          />
        </div>
      </div>

      <!-- Container dos Steps -->
      <div class="relative">
        <!-- Step 1 - Dados Gerais -->
        <div v-if="currentStep === 1" class="slide-in">
          <div class="form-section">
            <div class="form-group">
              <div class="form-field">
                <label for="data" class="form-label">Data</label>
                <div class="input-with-icon">
                  <Calendar class="icon" />
                  <input
                    id="data"
                    type="date"
                    v-model="formData.data"
                    class="form-input form-input-with-icon"
                  />
                </div>
              </div>

              <div class="form-field">
                <label for="cliente" class="form-label">Cliente</label>
                <div class="form-row">
                  <select
                    id="cliente"
                    v-model="formData.cliente"
                    class="form-select"
                  >
                    <option value="">Selecionar cliente...</option>
                    <option value="1">Fazenda São José</option>
                    <option value="2">Sítio Boa Esperança</option>
                    <option value="3">Fazenda Santa Clara</option>
                  </select>
                  <button class="add-button">
                    <Plus />
                  </button>
                </div>
              </div>

              <div class="form-field">
                <label for="funcionario" class="form-label">Funcionário</label>
                <div class="form-row">
                  <select
                    id="funcionario"
                    v-model="formData.funcionario"
                    class="form-select"
                  >
                    <option value="">Selecionar funcionário...</option>
                    <option value="1">João Silva</option>
                    <option value="2">Maria Santos</option>
                  </select>
                  <button class="add-button">
                    <Plus />
                  </button>
                </div>
              </div>

              <div class="form-field">
                <label for="propriedade" class="form-label">Propriedade</label>
                <input
                  id="propriedade"
                  type="text"
                  v-model="formData.propriedade"
                  placeholder="Nome da propriedade"
                  class="form-input"
                />
              </div>

              <div class="form-field">
                <label for="situacao" class="form-label">Situação</label>
                <input
                  id="situacao"
                  type="text"
                  v-model="formData.situacao"
                  disabled
                  class="form-input disabled-input"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 - Itens do Receituário -->
        <div v-if="currentStep === 2" class="slide-in">
          <div class="form-section">
            <div class="form-group">
              <div class="form-field">
                <label for="produto" class="form-label">Produto</label>
                <select
                  id="produto"
                  v-model="novoProduto.produto"
                  class="form-select"
                >
                  <option value="">Selecionar produto...</option>
                  <option value="ACTARA 10 GR">ACTARA 10 GR</option>
                  <option value="ROUNDUP ORIGINAL DI">ROUNDUP ORIGINAL DI</option>
                  <option value="CERCOBIN 700 WP">CERCOBIN 700 WP</option>
                  <option value="KARATE ZEON 50 CS">KARATE ZEON 50 CS</option>
                </select>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="quantidade" class="form-label">Quantidade</label>
                  <input
                    id="quantidade"
                    type="number"
                    v-model="novoProduto.quantidade"
                    placeholder="0"
                    class="form-input"
                  />
                </div>
                <div class="form-field">
                  <label for="unidade" class="form-label">Unidade</label>
                  <select
                    id="unidade"
                    v-model="novoProduto.unidade"
                    class="form-select"
                  >
                    <option value="L">L (Litros)</option>
                    <option value="kg">kg (Quilos)</option>
                    <option value="ml">ml (Mililitros)</option>
                    <option value="g">g (Gramas)</option>
                  </select>
                </div>
              </div>

              <div class="form-field">
                <label for="observacao" class="form-label">Observação</label>
                <textarea
                  id="observacao"
                  v-model="novoProduto.observacao"
                  rows="2"
                  placeholder="Observações sobre o produto..."
                  class="form-textarea"
                />
              </div>

              <button 
                @click="handleAdicionarProduto"
                class="form-add-button"
              >
                <Plus />
                Adicionar Produto
              </button>
            </div>
          </div>

          <!-- Tabela de Produtos -->
          <div v-if="produtos.length > 0" class="produtos-section">
            <h3 class="produtos-title">Produtos Adicionados</h3>
            <div class="produtos-list">
              <div 
                v-for="produto in produtos" 
                :key="produto.id" 
                class="produto-item"
              >
                <div class="produto-header">
                  <div class="produto-info">
                    <p class="produto-nome">{{ produto.produto }}</p>
                    <p class="produto-quantidade">
                      {{ produto.quantidade }} {{ produto.unidade }}
                    </p>
                  </div>
                  <button
                    @click="handleRemoverProduto(produto.id)"
                    class="remove-produto-btn"
                  >
                    <Trash2 />
                  </button>
                </div>
                <p v-if="produto.observacao" class="produto-observacao">{{ produto.observacao }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 - Dados Técnicos -->
        <div v-if="currentStep === 3" class="slide-in">
          <div class="form-section">
            <div class="form-group">
              <div class="form-field">
                <label for="cultura" class="form-label">Cultura</label>
                <select
                  id="cultura"
                  v-model="formData.cultura"
                  class="form-select"
                >
                  <option value="">Selecionar cultura...</option>
                  <option value="Soja">Soja</option>
                  <option value="Milho">Milho</option>
                  <option value="Café">Café</option>
                  <option value="Cana-de-açúcar">Cana-de-açúcar</option>
                </select>
              </div>

              <div class="form-field">
                <label for="diagnostico" class="form-label">Diagnóstico</label>
                <select
                  id="diagnostico"
                  v-model="formData.diagnostico"
                  class="form-select"
                >
                  <option value="">Selecionar diagnóstico...</option>
                  <option value="Lagarta">Lagarta</option>
                  <option value="Percevejo">Percevejo</option>
                  <option value="Ferrugem">Ferrugem</option>
                  <option value="Mofo Branco">Mofo Branco</option>
                </select>
              </div>

              <div class="form-field">
                <label for="dose" class="form-label">Dose</label>
                <input
                  id="dose"
                  type="text"
                  v-model="formData.dose"
                  placeholder="Ex: 200 ml/ha"
                  class="form-input"
                />
              </div>

              <div class="form-field">
                <label for="intervaloSeguranca" class="form-label">Intervalo de Segurança</label>
                <input
                  id="intervaloSeguranca"
                  type="text"
                  v-model="formData.intervaloSeguranca"
                  placeholder="Ex: 14 dias"
                  class="form-input"
                />
              </div>

              <div class="form-field">
                <label for="modoAplicacao" class="form-label">Modo de Aplicação</label>
                <select
                  id="modoAplicacao"
                  v-model="formData.modoAplicacao"
                  class="form-select"
                >
                  <option value="">Selecionar...</option>
                  <option value="Pulverização">Pulverização</option>
                  <option value="Tratamento de sementes">Tratamento de sementes</option>
                  <option value="Aplicação no solo">Aplicação no solo</option>
                </select>
              </div>

              <div class="form-field">
                <label for="volumeCalda" class="form-label">Volume de Calda</label>
                <input
                  id="volumeCalda"
                  type="text"
                  v-model="formData.volumeCalda"
                  placeholder="Ex: 200 L/ha"
                  class="form-input"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4 - Resumo -->
        <div v-if="currentStep === 4" class="slide-in">
          <!-- Dados da Receita -->
          <div class="resumo-section">
            <h3 class="resumo-title">Dados da Receita</h3>
            <div class="resumo-item">
              <span class="resumo-label">Data:</span>
              <span class="resumo-value">{{ formData.data || '-' }}</span>
            </div>
            <div class="resumo-item">
              <span class="resumo-label">Cliente:</span>
              <span class="resumo-value">
                {{ formData.cliente === '1' ? 'Fazenda São José' : 
                   formData.cliente === '2' ? 'Sítio Boa Esperança' : 
                   formData.cliente === '3' ? 'Fazenda Santa Clara' : '-' }}
              </span>
            </div>
            <div class="resumo-item">
              <span class="resumo-label">Propriedade:</span>
              <span class="resumo-value">{{ formData.propriedade || '-' }}</span>
            </div>
            <div class="resumo-item">
              <span class="resumo-label">Cultura:</span>
              <span class="resumo-value">{{ formData.cultura || '-' }}</span>
            </div>
            <div class="resumo-item">
              <span class="resumo-label">Diagnóstico:</span>
              <span class="resumo-value">{{ formData.diagnostico || '-' }}</span>
            </div>
            <div class="resumo-item">
              <span class="resumo-label">Dose:</span>
              <span class="resumo-value">{{ formData.dose || '-' }}</span>
            </div>
            <div class="resumo-item">
              <span class="resumo-label">Modo de Aplicação:</span>
              <span class="resumo-value">{{ formData.modoAplicacao || '-' }}</span>
            </div>
          </div>

          <!-- Produtos -->
          <div class="resumo-section">
            <h3 class="resumo-title">Produtos</h3>
            <div v-if="produtos.length > 0" class="produtos-list">
              <div 
                v-for="produto in produtos" 
                :key="produto.id" 
                class="produto-item"
              >
                <p class="produto-nome">{{ produto.produto }}</p>
                <p class="produto-quantidade">
                  Quantidade: {{ produto.quantidade }} {{ produto.unidade }}
                </p>
                <p v-if="produto.observacao" class="produto-observacao">{{ produto.observacao }}</p>
              </div>
            </div>
            <p v-else class="empty-state">Nenhum produto adicionado</p>
          </div>

          <!-- Botões de Ação -->
          <div class="form-action-buttons">
            <button class="form-action-button">
              <Printer />
              Imprimir Receita
            </button>
            <button class="form-action-button">
              <PenTool />
              Assinar Digitalmente
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Botões de Navegação Fixos no Rodapé -->
    <div class="nav-buttons">
      <div class="nav-buttons-container">
        <!-- Step 1 -->
        <button 
          v-if="currentStep === 1"
          @click="handleNext"
          class="nav-button primary"
        >
          Próximo
          <ArrowRight />
        </button>

        <!-- Step 2 -->
        <div v-if="currentStep === 2" class="nav-buttons two-buttons">
          <button 
            @click="handlePrevious"
            class="nav-button secondary"
          >
            <ArrowLeft />
            Anterior
          </button>
          <button 
            @click="handleNext"
            class="nav-button primary"
          >
            Próximo
            <ArrowRight />
          </button>
        </div>

        <!-- Step 3 -->
        <div v-if="currentStep === 3" class="nav-buttons two-buttons">
          <button 
            @click="handlePrevious"
            class="nav-button secondary"
          >
            <ArrowLeft />
            Anterior
          </button>
          <button 
            @click="handleNext"
            class="nav-button primary"
          >
            Próximo
            <ArrowRight />
          </button>
        </div>

        <!-- Step 4 -->
        <div v-if="currentStep === 4" class="nav-buttons two-buttons">
          <button 
            @click="handlePrevious"
            class="nav-button secondary"
          >
            <ArrowLeft />
            Anterior
          </button>
          <button 
            @click="handleSubmit"
            class="nav-button primary"
          >
            Salvar Receita
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Calendar, Plus, ArrowLeft, ArrowRight, Leaf, Droplet, Clipboard, FileCheck, Trash2, Printer, PenTool } from 'lucide-vue'

export default {
  name: 'NovaReceita',
  components: {
    Calendar,
    Plus,
    ArrowLeft,
    ArrowRight,
    Leaf,
    Droplet,
    Clipboard,
    FileCheck,
    Trash2,
    Printer,
    PenTool
  },
  data() {
    return {
      currentStep: 1,
      produtos: [],
      novoProduto: {
        produto: '',
        quantidade: '',
        unidade: 'L',
        observacao: '',
      },
      formData: {
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
      },
      steps: [
        { number: 1, icon: Leaf },
        { number: 2, icon: Droplet },
        { number: 3, icon: Clipboard },
        { number: 4, icon: FileCheck },
      ]
    }
  },
  methods: {
    handleNext() {
      if (this.currentStep < 4) {
        this.currentStep++
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    handlePrevious() {
      if (this.currentStep > 1) {
        this.currentStep--
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    handleAdicionarProduto() {
      if (this.novoProduto.produto && this.novoProduto.quantidade) {
        this.produtos.push({
          id: Date.now().toString(),
          ...this.novoProduto,
        })
        this.novoProduto = {
          produto: '',
          quantidade: '',
          unidade: 'L',
          observacao: '',
        }
      }
    },
    handleRemoverProduto(id) {
      this.produtos = this.produtos.filter((p) => p.id !== id)
    },
    handleSubmit() {
      console.log('Finalizando receita:', { formData: this.formData, produtos: this.produtos })
    }
  }
}
</script>

