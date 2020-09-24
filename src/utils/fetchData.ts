export default async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return error;
  }
}
