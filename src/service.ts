const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const get_data = async (path: string) => {
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

export const ask_question = async (question: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/py/ask/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
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
