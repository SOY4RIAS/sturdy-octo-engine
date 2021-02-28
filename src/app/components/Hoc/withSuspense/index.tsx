import { FC, Suspense } from 'react';

interface SuspenseParams {
  fallback: FC;
  child: FC;
}

export const withSuspense = ({ fallback: Fallback, child: Child }: SuspenseParams) => {
  const wrappedComponent = () => (
    <Suspense fallback={<Fallback />}>
      <Child />
    </Suspense>
  );

  return wrappedComponent;
};
