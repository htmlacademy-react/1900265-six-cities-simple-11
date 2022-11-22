export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const PIN_MARKER_DEFAULT = '/img/pin.svg';
export const PIN_MARKER_ACTIVE = '/img/pin-active.svg';

export const CITY_ID_DEFAULT = 1;

export const PERCENT_MULTIPLIER = 20;
