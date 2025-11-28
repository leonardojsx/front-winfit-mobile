export interface Product {
  id: string
  name: string
  registryNumber: string
  colorTag: 'blue' | 'red' | 'green'
  mapaRegistry: string
  holder: string
  lastRevision: string
  activeIngredients: string[]
  chemicalGroups: string[]
  actionClass: string
  toxicologicalClass: string
  concentration: string
  formulation: string
  actionMode: string
  environmentalClass: string
}

export interface Receita {
  id: string
  numero: string
  data: string
  cliente: string
  responsavelTecnico: string
  envio: string
  status: 'rascunho' | 'finalizada' | 'cancelada'
}