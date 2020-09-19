const API_URL = 'http://localhost:5000'

export async function listFormEntries() { 
    const response = await fetch(`${API_URL}/form`)
    return response.json();
}