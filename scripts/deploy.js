// npm run deploy
// Salva (commit) todas as alterações e envia para o GitHub.
// O push na main dispara o GitHub Actions, que publica o site.
//
// Mensagem personalizada:  npm run deploy -- "minha mensagem"
import { execSync } from "node:child_process";

const run = (cmd) => execSync(cmd, { stdio: "inherit" });
const output = (cmd) => execSync(cmd, { encoding: "utf8" }).trim();

const branch = output("git rev-parse --abbrev-ref HEAD");
if (branch !== "main") {
  console.error(`\nVocê está na branch "${branch}". Troque para a main antes do deploy.`);
  process.exit(1);
}

if (output("git status --porcelain")) {
  const message =
    process.argv.slice(2).join(" ") ||
    `Atualização do site ${new Date().toLocaleString("pt-BR")}`;
  run("git add -A");
  run(`git commit -m ${JSON.stringify(message)}`);
} else {
  console.log("Nenhuma alteração nova para salvar.");
}

run("git push origin main");

console.log(
  "\nEnviado! O site será publicado em cerca de 1 minuto." +
    "\nAcompanhe em: https://github.com/Guilherme-codr/Portfolio_Guilherme/actions" +
    "\nSite: https://guilherme-codr.github.io/Portfolio_Guilherme/"
);
