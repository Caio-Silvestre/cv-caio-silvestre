"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { topics } from "./topics";

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
