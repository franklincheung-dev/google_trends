export interface TrendRequest {
  geo?: string;
  hl?: string;
  hours?: number;
  category?: string;
  sort?: string;
  status?: string;
}

export interface Trend {
  title: string;
}

export interface TrendsResponse {
  topics: Trend[];
  source_url: string;
}

export async function fetchTrends(params: TrendRequest): Promise<TrendsResponse> {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  });
  // Call local backend API instead of Google Trends directly to avoid CORS
  const url = `/api/trends?${query.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}