import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../../src/components';
import { product1 } from '../../src/data/products';

describe('ProductCard', () => {
  test('should render the component correctly', () => {
    const { asFragment } = render(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should counter increment', () => {
    const { asFragment } = render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>Increase</button>
          </>
        )}
      </ProductCard>
    );

    const countSpan = screen.getByText('0');
    const button = screen.getByRole('button', { name: 'Increase' });

    expect(countSpan.textContent).toBe('0');

    fireEvent.click(button);
    expect(countSpan.textContent).toBe('1');

    expect(asFragment()).toMatchSnapshot();
  });
});
