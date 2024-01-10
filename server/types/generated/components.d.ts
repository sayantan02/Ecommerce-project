import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderProductOrderedProduct extends Schema.Component {
  collectionName: 'components_order_product_ordered_products';
  info: {
    displayName: 'Ordered_product';
    icon: 'command';
  };
  attributes: {
    name: Attribute.String;
    product: Attribute.Relation<
      'order-product.ordered-product',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order-product.ordered-product': OrderProductOrderedProduct;
    }
  }
}
