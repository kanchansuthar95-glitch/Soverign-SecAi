export const API_BASE_URL = '/api';
export const WS_URL = `ws://${window.location.host}/ws`;

export async function fetchStatus() {
  const response = await fetch(`${API_BASE_URL}/status`);
  return response.json();
}

export async function selectAgent(agentId: string) {
  const response = await fetch(`${API_BASE_URL}/agent/select?agent_id=${agentId}`, {
    method: 'POST',
  });
  return response.json();
}
