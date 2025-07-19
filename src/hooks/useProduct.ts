import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);

    if (initialValues?.maxCount && newValue > initialValues.maxCount) {
      setCounter(initialValues.maxCount);
      onChange && onChange({ count: initialValues.maxCount, product });
    }

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset,
  };
};
