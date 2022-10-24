// getData is going to recieve some type T.
// This type T - is what will be returned from this function inside of a Promise

export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}