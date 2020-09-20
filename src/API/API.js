const API_URL = 'http://localhost:5000'

export async function listFormEntries() { 
    const response = await fetch(`${API_URL}/form`)
    return response.json();
}

export async function addFormEntries(entry) { 
    const response = await fetch(`${API_URL}/form`, { 
        //use post method to upload form into mongo
        method: 'POST',
        headers: { 
            'content-type': 'application/json',
        },
        body: JSON.stringify(entry)
    });
    return response.json();
}