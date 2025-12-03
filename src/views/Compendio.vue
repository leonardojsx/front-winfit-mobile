<template>
  <div class="compendio-container">
    <!-- Campo de Busca -->
    <div class="search-container">
      <div class="search-input-wrapper">
        <SearchIcon class="search-icon" />
        <input
          type="text"
          placeholder="Nome / Nº Registro"
          v-model="searchTerm"
          class="search-input"
        />
      </div>
    </div>

    <!-- Lista de Produtos -->
    <div class="products-list">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card"
        @click="selectProduct(product)"
      >
        <!-- Barra Lateral Colorida -->
        <div class="product-color-bar" :class="product.colorTag"></div>
        
        <!-- Conteúdo do Card -->
        <div class="product-content">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-registry">{{ product.registryNumber }}</p>
        </div>
      </div>
    </div>

    <div v-if="filteredProducts.length === 0" class="no-products">
      <p>Nenhum produto encontrado</p>
    </div>
  </div>
</template>

<script>
import { Search } from 'lucide-vue'

export default {
  name: 'Compendio',
  components: {
    SearchIcon: Search
  },
  data() {
    return {
      searchTerm: '',
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
        },
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.mockProducts.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.registryNumber.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  },
  methods: {
    selectProduct(product) {
      this.$router.push(`/product/${product.id}`)
    }
  }
}
</script>