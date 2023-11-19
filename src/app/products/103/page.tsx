import Imovel from '@/app/components/templateImovel'
import React from 'react'
import { products } from '@/app/data/products'

const Item = () => {
  const item = products[3];

  return (
    <div>
      <Imovel
        key={item.id}
        title={item.title}
        img={item.img}
        price={item.price}
      />
    </div>
  )
}

export default Item;

