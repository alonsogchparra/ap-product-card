# AP-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Alonso Parra

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ap-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 15,
  }}
>
  {({ count, reset, increaseBy, isMaxCountReached, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
