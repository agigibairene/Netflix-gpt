export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
    }
};

export const languages = [
  {identifier: "en", name: "English",},
  {identifier: "fr", name: "French",},
]