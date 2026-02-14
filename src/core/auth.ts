import { google } from "googleapis";

let authClient: any;

export function init(options: { credentials: string }) {
  authClient = new google.auth.GoogleAuth({
    keyFile: options.credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });
}

export function getAuth() {
  if (!authClient) {
    throw new Error("Workspree not initialized.");
  }
  return authClient;
}
