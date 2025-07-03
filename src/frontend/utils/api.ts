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
  const query = new URLSearchParams(params as Record<string, string>);
  const res = await fetch(`/api/trends?${query.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
