import { init, sheets } from "../dist/index.js";

async function main() {
  // 1️⃣ Initialize SDK
  init({
    credentials: "./service-account.json"
  });

  // 2️⃣ Read rows
  const rows = await sheets.getRows("YOUR_SPREADSHEET_ID", "Sheet1!A1:C10");

  console.log("Rows:", rows);
}

main().catch(console.error);
