"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const topics = [
  {
    id: 1,
    icon: "lab la-react",
    text: "React.jsx",
    subtext:
      "Experiência com interfaces dinâmicas e responsivas, sistemas ERP, atualização de pacotes, manutenção de aplicações e integração com sistemas omnichannel.",
  },
  {
    id: 2,
    icon: "las la-database",
    text: "SQL",
    subtext:
      "Criação e otimização de queries para features novas, resolução de inconsistências em dados e manutenção de integridade em bases relacionais.",
  },
  {
    id: 3,
    icon: "lab la-css3",
    text: "CSS",
    subtext:
      "Experiência com animações, design responsivo e adaptação de layouts; resolução de bugs complexos e uso avançado de pré-processadores como SASS.",
  },
  {
    id: 4,
    icon: "lab la-laravel",
    text: "PHP Laravel",
    subtext:
      "Desenvolvimento de APIs RESTful robustas, implementação de comandos personalizados, manutenção de sistemas legados e criação de novas funcionalidades.",
  },
  {
    id: 5,
    icon: "las la-code-branch",
    text: "Metodologias Ágeis",
    subtext:
      "Experiência com Scrum e Kanban; gestão de tarefas usando Jira e Notion; integração com GitHub, padronização de commits e entregas contínuas.",
  },
  {
    id: 6,
    icon: "lab la-node-js",
    text: "Node.js",
    subtext:
      "Desenvolvimento de APIs RESTful com Express.js, criação de endpoints para operações CRUD e integração com sistemas de terceiros.",
  },
  {
    id: 7,
    icon: "lab la-github",
    text: "GitHub",
    subtext:
      "Gerenciamento de branches para organização de funcionalidades; revisão e criação de pull requests; solução de conflitos de merge e automação com GitHub Actions.",
  },
  {
    id: 8,
    icon: "lab la-npm",
    text: "NPM",
    subtext:
      "Experiência na resolução de conflitos de pacotes, atualização de versões em projetos legados e preparação de builds para deploy.",
  },
];

export default function Mobile() {
  const [activeTopic, setActiveTopic] = useState(null);

  const toggleDropdown = (id) => {
    setActiveTopic(activeTopic === id ? null : id);
  };

  return (
    <>
      <div className="topics-container">
        {topics.map(({ id, icon, text, subtext }) => (
          <div
            key={id}
            className="icon-box topic"
            onClick={() => toggleDropdown(id)}
          >
            <div className="inner innerRigth">
              <div className="icon">
                <i class={icon} />
              </div>
            </div>

            <div className="content ">
              <h3 className="title">{text}</h3>
              {/* Dropdown animado */}
              <motion.div
                className="dropdown"
                initial={{ height: 0, opacity: 0 }}
                animate={
                  activeTopic === id
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                <p className="dropdown-text">{subtext}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
