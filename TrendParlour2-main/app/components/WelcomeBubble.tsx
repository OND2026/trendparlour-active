"use client";

import { useEffect, useRef, useState } from "react";
import welcomeMessages, { type WelcomeMessagePair } from "../data/welcomeMessages";

const hoverMessages: Record<string, WelcomeMessagePair> = {
  surprise: { headline: 'Excellent choice.', support: 'The strange one, obviously.' },
  ladder: { headline: 'This one goes deeper than you think.', support: 'Keep going.' },
  reflexes: { headline: 'Don\'t blink.', support: 'That is the instruction.' },
  laugh: { headline: 'I needed this one too.', support: 'You have good timing.' },
  mind: { headline: 'Proceed with caution.', support: 'It is very good.' },
  rather: { headline: 'Friendships have ended here.', support: 'You know the feeling.' },
};

const buttonMap: Record<string, string> = {
  surprise: 'surprise',
  play: 'ladder',
  challenge: 'reflexes',
  laugh: 'laugh',
  weird: 'mind',
  'would-you-rather': 'rather',
};

const rotationDelay = 16000;

function getRandomMessage() {
  return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
}

export default function WelcomeBubble() {
  const [message, setMessage] = useState<WelcomeMessagePair | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isUserActive, setIsUserActive] = useState(false);
  const restoreTimeoutRef = useRef<number | null>(null);
  const activeButtonRef = useRef<string | null>(null);

  useEffect(() => {
    const initialMessage = getRandomMessage();
    setMessage(initialMessage);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"));
    let idleTimer: number | undefined;

    const clearRestoreTimer = () => {
      if (restoreTimeoutRef.current !== null) {
        window.clearTimeout(restoreTimeoutRef.current);
        restoreTimeoutRef.current = null;
      }
    };

    const setActiveHover = (nextButton: string | null) => {
      activeButtonRef.current = nextButton;
      setActiveButton(nextButton);
    };

    const handleEnter = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const key = target.getAttribute("href")?.replace(/^\//, "").replace(/\//g, "");
      if (key && buttonMap[key]) {
        clearRestoreTimer();
        setActiveHover(buttonMap[key]);
      }
    };

    const handleLeave = () => {
      clearRestoreTimer();
      restoreTimeoutRef.current = window.setTimeout(() => {
        setActiveHover(null);
        restoreTimeoutRef.current = null;
      }, 200);
    };

    const resetIdleTimer = () => {
      if (idleTimer) {
        window.clearTimeout(idleTimer);
      }

      setIsUserActive(true);
      idleTimer = window.setTimeout(() => {
        setIsUserActive(false);
      }, rotationDelay);
    };

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleEnter);
      button.addEventListener("mouseleave", handleLeave);
      button.addEventListener("focusin", handleEnter);
      button.addEventListener("focusout", handleLeave);
    });

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("keydown", resetIdleTimer);
    window.addEventListener("scroll", resetIdleTimer);
    window.addEventListener("touchstart", resetIdleTimer);
    window.addEventListener("click", resetIdleTimer);

    resetIdleTimer();

    return () => {
      if (idleTimer) {
        window.clearTimeout(idleTimer);
      }

      clearRestoreTimer();

      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleEnter);
        button.removeEventListener("mouseleave", handleLeave);
        button.removeEventListener("focusin", handleEnter);
        button.removeEventListener("focusout", handleLeave);
      });

      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("keydown", resetIdleTimer);
      window.removeEventListener("scroll", resetIdleTimer);
      window.removeEventListener("touchstart", resetIdleTimer);
      window.removeEventListener("click", resetIdleTimer);
    };
  }, []);

  const activeMessage = activeButton ? hoverMessages[activeButton] : message;

  useEffect(() => {
    if (!message || activeButton || isUserActive) {
      return;
    }

    const timer = window.setTimeout(() => {
      setMessage(getRandomMessage());
    }, rotationDelay);

    return () => window.clearTimeout(timer);
  }, [activeButton, isUserActive, message]);

  return (
    <div
      style={{
        width: "min(100%, 300px)",
        margin: "0 auto 1rem",
        position: "relative",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "#FFF9F2",
          border: "1px solid #EDE3D8",
          borderRadius: "20px",
          padding: "0.95rem 1rem 1rem",
          boxShadow: "0 10px 24px rgba(31, 41, 55, 0.06)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          textAlign: "left",
          animation: "bubbleFloat 2.8s ease-in-out infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0.7rem",
            right: "0.8rem",
            fontSize: "0.9rem",
            color: "#D9A24E",
            animation: "sparkle 2.4s ease-in-out infinite",
          }}
          aria-hidden="true"
        >
          ✦
        </div>

        <div
          style={{
            position: "absolute",
            left: "-8px",
            bottom: "18px",
            width: "14px",
            height: "14px",
            background: "#FFF9F2",
            borderLeft: "1px solid #EDE3D8",
            borderBottom: "1px solid #EDE3D8",
            transform: "rotate(45deg)",
          }}
        />

        {activeMessage ? (
          <div style={{ maxWidth: "240px", transition: "opacity 0.18s ease" }}>
            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1F2937", lineHeight: 1.4, marginBottom: "0.2rem" }}>
              {activeMessage.headline}
            </div>
            <div style={{ fontSize: "0.84rem", color: "#6B7280", lineHeight: 1.45 }}>
              {activeMessage.support}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
