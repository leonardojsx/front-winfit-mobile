<template>
  <main class="product-container">
      <!-- Cabeçalho do Produto -->
      <div class="product-header">
        <h2 class="product-title">{{ product.name }}</h2>
        <div class="product-info">
          <p class="product-info-item">
            <span class="product-info-label">Registro MAPA:</span> {{ product.mapaRegistry }}
          </p>
          <p class="product-info-item">
            <span class="product-info-label">Titular:</span> {{ product.holder }}
          </p>
          <p class="product-info-item">
            <span class="product-info-label">Última revisão:</span> {{ product.lastRevision }}
          </p>
        </div>
      </div>

      <!-- Abas de Navegação -->
      <div class="tabs-container">
        <div class="tabs-list">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'tab-button',
              activeTab === tab.id ? 'active' : 'inactive'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Conteúdo da Aba Ativa -->
      <div v-if="activeTab === 'geral'" class="content-section">
        <!-- Ingredientes Ativos -->
        <div class="info-card">
          <h3 class="info-card-title">Ingredientes Ativos</h3>
          <div class="info-card-content">
            <p v-for="ingredient in product.activeIngredients" :key="ingredient" class="info-card-item">
              {{ ingredient }}
            </p>
          </div>
        </div>

        <!-- Grupos Químicos -->
        <div class="info-card">
          <h3 class="info-card-title">Grupos Químicos</h3>
          <div class="info-card-content">
            <p v-for="group in product.chemicalGroups" :key="group" class="info-card-item">
              {{ group }}
            </p>
          </div>
        </div>

        <!-- Classe de Ação -->
        <div class="info-card">
          <h3 class="info-card-title">Classe de Ação</h3>
          <p class="info-card-item">{{ product.actionClass }}</p>
        </div>

        <!-- Classe Toxicológica -->
        <div class="info-card">
          <h3 class="info-card-title">Classe Toxicológica</h3>
          <p class="info-card-item">{{ product.toxicologicalClass }}</p>
        </div>

        <!-- Concentração -->
        <div class="info-card">
          <h3 class="info-card-title">Concentração</h3>
          <p class="info-card-item">{{ product.concentration }}</p>
        </div>

        <!-- Formulação -->
        <div class="info-card">
          <h3 class="info-card-title">Formulação</h3>
          <p class="info-card-item">{{ product.formulation }}</p>
        </div>

        <!-- Modo de Ação -->
        <div class="info-card">
          <h3 class="info-card-title">Modo de Ação</h3>
          <p class="info-card-item">{{ product.actionMode }}</p>
        </div>

        <!-- Classe Ambiental -->
        <div class="info-card">
          <h3 class="info-card-title">Classe Ambiental</h3>
          <p class="info-card-item">{{ product.environmentalClass }}</p>
        </div>
      </div>

      <div v-if="activeTab === 'cultura'" class="empty-state">
        <p>Informações de aplicação por cultura em breve</p>
      </div>

      <div v-if="activeTab === 'indicacoes'" class="empty-state">
        <p>Indicações de uso em breve</p>
      </div>

      <div v-if="activeTab === 'modalidades'" class="empty-state">
        <p>Modalidades de aplicação em breve</p>
      </div>

      <div v-if="activeTab === 'restricoes'" class="empty-state">
        <p>Restrições por estado em breve</p>
      </div>

      <div v-if="activeTab === 'adicionais'" class="empty-state">
        <p>Informações adicionais em breve</p>
      </div>

      <!-- Botões de Ação -->
      <div class="action-buttons">
        <button class="action-button primary">
          <Printer />
          Imprimir Ficha
        </button>
        
        <button class="action-button secondary">
          <FileText />
          Imprimir Várias Fichas
        </button>
        
        <button class="action-button secondary">
          <BarChart3 />
          Relatório do Produto
        </button>
      </div>
  </main>
</template>

<script>
import { Printer, FileText, BarChart3 } from 'lucide-vue'

export default {
  name: 'ProductSheet',
  components: {
    Printer,
    FileText,
    BarChart3
  },
  data() {
    return {
      activeTab: 'geral',
      mockProducts: [
  {
    id: '1',
    name: 'ACTARA 10 GR',
    registryNumber: 'nº 3200',
    colorTag: 'blue',
    mapaRegistry: '3200 - MAPA',
    holder: 'SYNGENTA PROTEÇÃO DE CULTIVOS LTDA',
    lastRevision: '15/03/2024',
    activeIngredients: ['TIAMETOXAM'],
    chemicalGroups: ['NEONICOTINOIDE'],
    actionClass: 'Inseticida',
    toxicologicalClass: 'Classe III - Medianamente tóxico',
    concentration: '100 g/kg',
    formulation: 'Granulado (GR)',
    actionMode: 'Contato e ingestão',
    environmentalClass: 'Classe II - Produto muito perigoso',
  },
  {
    id: '2',
    name: 'ROUNDUP ORIGINAL DI',
    registryNumber: 'nº 1679',
    colorTag: 'green',
    mapaRegistry: '1679 - MAPA',
    holder: 'MONSANTO DO BRASIL LTDA',
    lastRevision: '22/01/2024',
    activeIngredients: ['GLIFOSATO'],
    chemicalGroups: ['GLICINA SUBSTITUÍDA'],
    actionClass: 'Herbicida',
    toxicologicalClass: 'Classe IV - Pouco tóxico',
    concentration: '480 g/L',
    formulation: 'Concentrado Solúvel (SL)',
    actionMode: 'Sistêmico',
    environmentalClass: 'Classe III - Produto perigoso',
  },
  {
    id: '3',
    name: 'CERCOBIN 700 WP',
    registryNumber: 'nº 0189',
    colorTag: 'red',
    mapaRegistry: '0189 - MAPA',
    holder: 'IHARA COMÉRCIO DE PRODUTOS QUÍMICOS LTDA',
    lastRevision: '10/02/2024',
    activeIngredients: ['TIOFANATO METÍLICO'],
    chemicalGroups: ['BENZIMIDAZOL'],
    actionClass: 'Fungicida',
    toxicologicalClass: 'Classe III - Medianamente tóxico',
    concentration: '700 g/kg',
    formulation: 'Pó Molhável (WP)',
    actionMode: 'Sistêmico',
    environmentalClass: 'Classe III - Produto perigoso',
  },
  {
    id: '4',
    name: 'KARATE ZEON 50 CS',
    registryNumber: 'nº 2899',
    colorTag: 'blue',
    mapaRegistry: '2899 - MAPA',
    holder: 'SYNGENTA PROTEÇÃO DE CULTIVOS LTDA',
    lastRevision: '05/04/2024',
    activeIngredients: ['LAMBDA-CIALOTRINA'],
    chemicalGroups: ['PIRETROIDE'],
    actionClass: 'Inseticida',
    toxicologicalClass: 'Classe II - Altamente tóxico',
    concentration: '50 g/L',
    formulation: 'Suspensão de Cápsula (CS)',
    actionMode: 'Contato e ingestão',
    environmentalClass: 'Classe II - Produto muito perigoso',
  },
  {
    id: '5',
    name: 'SCORE 250 EC',
    registryNumber: 'nº 1795',
    colorTag: 'red',
    mapaRegistry: '1795 - MAPA',
    holder: 'SYNGENTA PROTEÇÃO DE CULTIVOS LTDA',
    lastRevision: '18/03/2024',
    activeIngredients: ['DIFENOCONAZOL'],
    chemicalGroups: ['TRIAZOL'],
    actionClass: 'Fungicida',
    toxicologicalClass: 'Classe III - Medianamente tóxico',
    concentration: '250 g/L',
    formulation: 'Concentrado Emulsionável (EC)',
    actionMode: 'Sistêmico',
    environmentalClass: 'Classe III - Produto perigoso',
  },
  {
    id: '6',
    name: 'CONNECT',
    registryNumber: 'nº 7612',
    colorTag: 'green',
    mapaRegistry: '7612 - MAPA',
    holder: 'BAYER S.A.',
    lastRevision: '28/02/2024',
    activeIngredients: ['BETA-CIFLUTRINA', 'IMIDACLOPRIDO'],
    chemicalGroups: ['PIRETROIDE', 'NEONICOTINOIDE'],
    actionClass: 'Inseticida',
    toxicologicalClass: 'Classe II - Altamente tóxico',
    concentration: '100 g/L + 700 g/L',
    formulation: 'Suspensão Concentrada (SC)',
    actionMode: 'Contato, ingestão e sistêmico',
    environmentalClass: 'Classe II - Produto muito perigoso',
  }],
      tabs: [
        { id: 'geral', label: 'Informações Gerais' },
        { id: 'cultura', label: 'Aplicação por Cultura' },
        { id: 'indicacoes', label: 'Indicações' },
        { id: 'modalidades', label: 'Modalidades de Aplicação' },
        { id: 'restricoes', label: 'Restrições por Estado' },
        { id: 'adicionais', label: 'Informações Adicionais' },
      ]
    }
  },
  computed: {
    product() {
      const productId = this.$route.params.id
      return this.mockProducts.find(p => p.id === productId) || this.mockProducts[0]
    }
  }
}
</script>