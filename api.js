const API_URL = "https://api.thecatapi.com/v1";
const API_KEY =
  "live_PCcSHCjPAHb5MZks4avqi2CanFuybs7IWgBdaiIAIsWjuTFsJeodK9pWhdw0lyLT";

export async function fetchCats(page = 1, limit = 10) {
  const response = await fetch(
    `${API_URL}/images/search?page=${page}&limit=${limit}`,
    {
      headers: { "x-api-key": API_KEY },
    }
  );
  return response.json();
}

export async function searchCats(breed) {
  const response = await fetch(`${API_URL}/images/search?breed_ids=${breed}`, {
    headers: { "x-api-key": API_KEY },
  });
  return response.json();
}

export async function fetchRandomCat() {
  const response = await fetch(`${API_URL}/images/search?limit=1`, {
    headers: { "x-api-key": API_KEY },
  });
  const data = await response.json();
  return data[0];
}
