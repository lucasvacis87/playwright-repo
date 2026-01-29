import fs from "fs";
import path from "path";

type Env = "default" | "staging" | "production";

const ENV = (process.env.TEST_ENV as Env) || "default";

const configPath = path.resolve(
  __dirname,
  `../fixtures/${ENV}.json`
);

if (!fs.existsSync(configPath)) {
  throw new Error(`Config file not found: ${configPath}`);
}

const rawConfig = fs.readFileSync(configPath, "utf-8");

export const config = JSON.parse(rawConfig);
