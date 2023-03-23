export const APP_KEY = "@learn2dev";

export function getStorageItem(key: string) {
  if (typeof window === "undefined") return;

  const token = window.localStorage.getItem(`${APP_KEY}-${key}`);

  return JSON.parse(token!);
}

export function setStorageItem(key: string, value?: unknown) {
  if (typeof window === "undefined") return;

  const token = JSON.stringify(value);

  return window.localStorage.setItem(`${APP_KEY}-${key}`, token);
}
