import {
  FieldsSelection,
  ProductsItem,
  ProductsItemGenqlSelection,
  basehub,
} from "basehub";

const productFrame = {
  _id: true,
  _slug: true,
  _title: true,
  description: true,
  image: {
    alt: true,
    aspectRatio: true,
    fileName: true,
    fileSize: true,
    height: true,
    lastModified: true,
    mimeType: true,
    rawUrl: true,
  },
  name: true,
  price: true,
  quantity: true,
} satisfies ProductsItemGenqlSelection;

export type ProductItem = FieldsSelection<ProductsItem, typeof productFrame>;

export const getProducts = async () => {
  // revalidate products every 30 seconds

  // fetch first 6 products by default
  const first = 6;

  const data = await basehub({ next: { revalidate: 30 } }).query({
    store: {
      _id: true,
      _slug: true,
      _title: true,
      products: {
        __args: {
          first,
        },
        _id: true,
        _meta: {
          totalCount: true,
        },
        _slug: true,
        _title: true,
        items: productFrame,
      },
    },
  });

  // return products
  return data.store.products.items;
};
