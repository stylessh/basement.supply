"use client";

import JSConfetti from "js-confetti";
import { useEffect } from "react";

const Confetti = () => {
  useEffect(() => {
    const confetti = new JSConfetti();
    confetti.addConfetti();
  }, []);

  return null;
};

export default Confetti;
