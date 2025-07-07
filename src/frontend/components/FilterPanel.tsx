import React from 'react';
import { TrendRequest } from '../utils/api';

interface Props {
  params: TrendRequest;
  onChange: (next: TrendRequest) => void;
}

export const FilterPanel: React.FC<Props> = ({ params, onChange }) => {
  const handleInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    let parsed: string | number | undefined = value === '' ? undefined : value;
    if (name === 'hours' && parsed !== undefined) {
      parsed = parseInt(parsed as string, 10);
    }
    onChange({ ...params, [name]: parsed });
  };

  const categories = Array.from({ length: 83 }, (_, i) => (i + 1).toString());
  const hoursOptions = ['1', '4', '8', '24', '72'];
  const locations = ['HK', 'US', 'GB', 'JP'];
  const languages = ['en', 'zh', 'es'];

  return (
    <div className="space-y-2 p-4 bg-gray-100 rounded">
      <label className="block">
        <span className="mr-2">Location</span>
        <select
          name="geo"
          value={params.geo}
          onChange={handleInput}
          className="border p-1"
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mr-2">Language</span>
        <select
          name="hl"
          value={params.hl}
          onChange={handleInput}
          className="border p-1"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mr-2">Hours</span>
        <select
          name="hours"
          value={params.hours ?? ''}
          onChange={handleInput}
          className="border p-1"
        >
          <option value="">All</option>
          {hoursOptions.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mr-2">Category</span>
        <select
          name="category"
          value={params.category ?? ''}
          onChange={handleInput}
          className="border p-1"
        >
          <option value="">All</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mr-2">Sort</span>
        <select
          name="sort"
          value={params.sort ?? ''}
          onChange={handleInput}
          className="border p-1"
        >
          <option value="">Default</option>
          <option value="title">Title</option>
          <option value="search-volume">Search volume</option>
        </select>
      </label>
      <label className="block">
        <span className="mr-2">Status</span>
        <select
          name="status"
          value={params.status ?? ''}
          onChange={handleInput}
          className="border p-1"
        >
          <option value="">All</option>
          <option value="active">Active</option>
        </select>
      </label>
    </div>
  );
};
