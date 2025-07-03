import { render } from '@testing-library/react';
import React from 'react';
import { FilterPanel } from '../../src/frontend/components/FilterPanel';

test('renders filter panel', () => {
  const { getByPlaceholderText } = render(
    <FilterPanel params={{}} onChange={() => {}} />
  );
  expect(getByPlaceholderText('Location')).toBeInTheDocument();
});
