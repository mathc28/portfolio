// components/CalendlyBadge.jsx
import { useEffect } from "react";

const CalendlyBadge = () => {
  useEffect(() => {
    const scriptWidget = document.createElement("script");
    scriptWidget.src = "https://assets.calendly.com/assets/external/widget.js";
    scriptWidget.async = true;
    document.body.appendChild(scriptWidget);

    const linkStyle = document.createElement("link");
    linkStyle.href = "https://assets.calendly.com/assets/external/widget.css";
    linkStyle.rel = "stylesheet";
    document.head.appendChild(linkStyle);

    scriptWidget.onload = () => {
      window.Calendly?.initBadgeWidget({
        url: "https://calendly.com/d/cnd6-4zg-bhm",
        text: "Discutons de votre projet",
        color: "#0069ff",
        textColor: "#ffffff",
        branding: false, // tu peux mettre true si tu veux le logo Calendly
      });
    };
  }, []);

  return null; // Pas besoin de JSX, Calendly injecte lui-même le badge
};

export default CalendlyBadge;
