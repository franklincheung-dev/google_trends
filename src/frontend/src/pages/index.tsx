import React, { useState, useEffect } from 'react';
import { FilterPanel } from '../components/FilterPanel';
import { fetchTrends, TrendRequest, Trend } from '../utils/api';

const Home: React.FC = () => {
  const [params, setParams] = useState<TrendRequest>({ geo: 'US', hl: 'en', hours: 24 });
  const [topics, setTopics] = useState<Trend[]>([]);

  useEffect(() => {
    fetchTrends(params)
      .then((data) => setTopics(data.topics))
      .catch(console.error);
  }, [params]);

  return (
    <div className="p-4">
      <FilterPanel params={params} onChange={setParams} />
      <button
        onClick={async () => {
          const data = await fetchTrends(params);
          const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
          const a = document.createElement('a');
          a.href = url;
          a.download = 'trends.json';
          a.click();
        }}
        className="mt-4 px-2 py-1 bg-blue-500 text-white"
      >
        Download JSON
      </button>
      <ul className="mt-4 list-disc list-inside">
        {topics.map((t) => (
          <li key={t.title}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
