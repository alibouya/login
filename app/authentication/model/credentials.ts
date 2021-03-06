
export interface UserDetails {
  email: string;
  username: string;
  type: string;
}

export interface TokenDetails {
  duration: number;
  token: string;
}

export class RegisterDetails implements UserDetails {
  constructor(public email: string, public username: string, private password: string, private password2: string, public type: string) {}
  //Type is hard coded as user - otherwise registration doesn't work
}

export class Credentials {
  constructor(public email: string, private password: string) {}

  get basicAuth(): string {
    return 'Basic ' + btoa(this.email + ':' + this.password);
  }
}
