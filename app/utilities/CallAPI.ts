type CredentialsType = "include" | "omit" | "same-origin";

const cleanURL = (url: string): string => {
  return url
    .split("/")
    .filter((e) => e !== "")
    .join("/");
};

const BASEURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/v1"
    : process.env.API_BASE_URL;

class CallAPI {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  //   GET(url: string) {}

  POST(endPoint: string, body: object, credentials?: CredentialsType) {
    const cleanedEndpoint = cleanURL(endPoint);

    return fetch(`${this.baseURL}/${cleanedEndpoint}`, {
      method: "POST",

      credentials: credentials,

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ ...body }),
    });
  }

  PUT() {}

  DELETE() {}
}

const UseCallAPI = () => new CallAPI(BASEURL!);

export default UseCallAPI;
