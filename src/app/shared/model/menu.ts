export type Categories = 'salad' | 'junk food' | 'desserts' | 'steak' | 'work food'

export interface Product {
  id: number,
  category: Categories,
  product: string,
  description: string,
  amount: number,
  img?: string
}

export type Menu = Product[]