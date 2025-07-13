// const BASE_URL = process.env.BASE_URL;
const BASE_URL = "http://127.0.0.1:8000";

// const get_data = async (path: string): Promise<any> => {
//   const response = await fetch(`${BASE_URL}/api/py/${path}`);
//   if (!response.ok) {
//     return [];
//   }
//   return await response.json();
// };

const get_data = async (path: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/py/${path}/`, {
      method: "GET",
    });
    if (response.status === 404) return null;
    if (!response.ok) console.warn(`Response status: ${response.status}`);

    const json = await response.json();
    return json;
  } catch (error) {
    console.warn(error);
    return null;
  }
};

export { get_data };
