type ParseJWTResponse = {
  exp: number;
  iat: number;
  sub: string;
  username: string;
};

export const parseJwt = (jwt?: string): ParseJWTResponse | undefined => {
  if (jwt) {
    const base64Url = jwt.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
};
