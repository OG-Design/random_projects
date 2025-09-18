export async function fetchLists() {
    const res = await fetch('/local/list_data/list_data.json')
    if(!res.ok){
        throw new Error('failed to fetch list_data.json')
    }
    return res.json()
}