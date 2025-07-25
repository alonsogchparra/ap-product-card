import React from 'react';
import { render } from '@testing-library/react';
import ProductCard, { ProductTitle } from '../../src/components';
import { product1 } from '../../src/data/products';

describe('ProductTitle', () => {
  test('should render the component correctly wit the custom title', () => {
    const { asFragment } = render(<ProductTitle title="Custom Title" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be shoe the component with the product name', () => {
    const { asFragment } = render(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
