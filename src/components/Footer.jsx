import contacts from "../data/contacts";

const icons = {
  email: (
    <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm2 .4V19h16V5.4l-8 6.4-8-6.4ZM5.6 5 12 10.1 18.4 5H5.6Z" />
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),
  whatsapp: (
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.13-1.35A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.04.8.81-2.96-.2-.31a8.2 8.2 0 1 1 6.91 3.8Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.47c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.17-.47-.29Z" />
  ),
};

function buildLinks() {
  const links = [];
  if (contacts.email)
    links.push({ key: "email", label: contacts.email, href: `mailto:${contacts.email}` });
  if (contacts.github)
    links.push({ key: "github", label: "GitHub", href: contacts.github });
  if (contacts.linkedin)
    links.push({ key: "linkedin", label: "LinkedIn", href: contacts.linkedin });
  if (contacts.whatsapp)
    links.push({ key: "whatsapp", label: "WhatsApp", href: `https://wa.me/${contacts.whatsapp}` });
  return links;
}

function Footer() {
  const links = buildLinks();

  return (
    <footer id="contato" className="mt-16 border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl font-bold">Vamos conversar?</h2>
        <p className="font-mono text-gray-300 max-w-xl">
          Estou aberto a oportunidades. Entre em contato por qualquer um dos canais abaixo.
        </p>

        <ul className="flex flex-wrap justify-center gap-4 mt-2">
          {links.map(({ key, label, href }) => (
            <li key={key}>
              <a
                href={href}
                target={key === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 font-semibold transition-colors duration-300 hover:border-purple-500 hover:text-purple-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  {icons[key]}
                </svg>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Guilherme Lacerda
        </p>
      </div>
    </footer>
  );
}

export default Footer;
