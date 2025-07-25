import React from 'react';
import { render } from '@testing-library/react';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../../src/data/products';

describe('ProductImage', () => {
  test('should render component correctly with custom image', () => {
    const { asFragment } = render(<ProductImage img="./custom-image.png" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should show the component with the product image', () => { 
    const {asFragment} = render(<ProductCard product={product2}>{() => <ProductImage />}</ProductCard>);

    expect(asFragment()).toMatchSnapshot();
   })
});
