export enum SERVER_STATUS {
  UP = 'up',
  DOWN = 'down',
  SHUTTING_DOWN = 'shutting_down',
}
export const HOME_PAGE_URL = 'https://ally.com';

export const SERVER_RELOAD_LIMIT_CONFIG = {
  keyPrefix: 'server_reload_request',
  points: 6,
  duration: 90,
};
