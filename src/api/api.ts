const url = import.meta.env.VITE_API_FAKESTORE;
export const api_Post = async function (link: string, body: any) {
  const cabecera = {
    "Content-Type": "application/json",
  };

  const request = {
    method: "POST",
    headers: cabecera,
    body: JSON.stringify(body),
  };
console.log(url + link)
  const response = await fetch(url + link, request);

  return response;
};
export const api_Get = async function (link: string) {
  const cabecera = {
    "Content-Type": "application/json",
  };

  const request = { method: "GET", headers: cabecera };
  const response = await fetch(url + link, request);

  return response;
};
