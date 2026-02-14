import { google } from "googleapis";
import { getAuth } from "../core/auth";

export async function getRows(spreadsheetId: string, range: string) {
  const auth = await getAuth().getClient();

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range
  });

  return response.data.values ?? [];
}
