interface LoginWithDigitalReturn {
  digitalHash: string;
}

interface LoginWithFacebookReturn {
  name: string;
  pass: number;
}

export interface ApiI {
  loginWithDigital: (digitalHash: string) => Promise<LoginWithDigitalReturn>;
  loginWithFacebook: (
    name: string,
    pass: number,
  ) => Promise<LoginWithFacebookReturn>;
}
