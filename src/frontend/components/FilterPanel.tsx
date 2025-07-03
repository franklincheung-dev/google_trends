import React from 'react';
import { TrendRequest } from '../utils/api';

interface Props {
  params: TrendRequest;
  onChange: (next: TrendRequest) => void;
}

export const FilterPanel: React.FC<Props> = ({ params, onChange }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange({ ...params, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-2 p-4 bg-gray-100 rounded">
      <input name="geo" placeholder="Location" value={params.geo || ''} onChange={handleInput} className="border p-1" />
      <input name="hl" placeholder="Language" value={params.hl || ''} onChange={handleInput} className="border p-1" />
      <input name="hours" type="number" placeholder="Hours" value={params.hours || ''} onChange={handleInput} className="border p-1" />
      <input name="category" placeholder="Category" value={params.category || ''} onChange={handleInput} className="border p-1" />
    </div>
  );
};
