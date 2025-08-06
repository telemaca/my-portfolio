import React, { useState, useRef, useEffect } from "react";
import styles from "./ChatWindow.module.scss";
import WindowHeader from "./WindowHeader";
import WindowMenu from "./WindowMenu";
import Image from "next/image";
import chatContent from "@/data/chatContent";
import inputButtons from "@/data/inputButtons";
import { menuItems } from "@/data/menuData";

interface Message {
  user: string;
  text: string;
  time: string;
  isCurrentUser: boolean;
  isFile?: boolean;
  fileUrl?: string;
  fileName?: string;
}

type AutoMessage = {
  text: string;
  delay: number;
  isFile?: boolean;
  fileName?: string;
  fileUrl?: string;
};

interface ChatWindowProps {
  contactName?: string;
  contactStatus?: string;
  contactMessage?: string;
  chatType?: "about" | "stack" | "work" | "projects" | "contact" | "default";
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  contactName,
  chatType = "default",
  onClose,
  onMinimize,
  onMaximize,
}) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const [isShaking, setIsShaking] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isAutoSequenceActive, setIsAutoSequenceActive] = useState(false);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  // Limpiar timeouts al desmontar
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  // Inicializar mensajes automáticos según el tipo de chat
  useEffect(() => {
    const content = chatContent[chatType as keyof typeof chatContent];
    if (content && content.messages.length > 0) {
      setIsAutoSequenceActive(true);
      startAutoMessageSequence(content.messages);
    } else {
      // Mensajes por defecto si no hay contenido específico
      setMessages([
        {
          user: "Jane Smith",
          text: "what's up?",
          time: "2:34 PM",
          isCurrentUser: false,
        },
      ]);
    }
  }, [chatType]);

  const startAutoMessageSequence = (messageSequence: AutoMessage[]) => {
    messageSequence.forEach((msgData, index) => {
      const timeout = setTimeout(() => {
        // Mostrar typing indicator
        setIsTyping(true);

        // Después de 1.5 segundos, mostrar el mensaje
        const messageTimeout = setTimeout(() => {
          const newMessage: Message = {
            user:
              chatContent[chatType as keyof typeof chatContent]?.contactName ||
              "Flor",
            text: msgData.text,
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            isCurrentUser: false,
            isFile: msgData.isFile || false,
            fileName: msgData.fileName,
            fileUrl: msgData.fileUrl,
          };

          setMessages((prev) => [...prev, newMessage]);
          setIsTyping(false);

          // Si es el último mensaje, permitir que el usuario escriba
          if (index === messageSequence.length - 1) {
            setIsAutoSequenceActive(false);
          }
        }, 1500);

        timeoutRefs.current.push(messageTimeout);
      }, msgData.delay);

      timeoutRefs.current.push(timeout);
    });
  };

  const handleSendMessage = (): void => {
    if (message.trim() && !isAutoSequenceActive) {
      const newMessage: Message = {
        user: "Tú",
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isCurrentUser: true,
      };
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");

      // Respuesta automática para el contacto (opcional)
      if (chatType === "contact") {
        setTimeout(() => {
          const autoReply: Message = {
            user: "Flor",
            text: "¡Gracias por escribirme! Te voy a responder pronto 😊",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            isCurrentUser: false,
          };
          setMessages((prev) => [...prev, autoReply]);
        }, 2000);
      }
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const triggerNudge = () => {
    if (isShaking) return;
    setIsShaking(true);
    audioRef.current?.play();
    setTimeout(() => setIsShaking(false), 500);
  };

  const windowRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;

    const newX = e.clientX - offset.current.x;
    const newY = e.clientY - offset.current.y;

    const windowWidth = windowRef.current?.offsetWidth ?? 380;
    const windowHeight = windowRef.current?.offsetHeight ?? 300;
    const maxX = window.innerWidth - windowWidth;
    const maxY = window.innerHeight - windowHeight;

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const displayContactName =
    chatContent[chatType as keyof typeof chatContent]?.contactName ||
    contactName ||
    "Chat";

  return (
    <div
      className={`${styles.chatWindow} ${isShaking ? styles.shake : ""}`}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: 10,
      }}
      ref={windowRef}
    >
      <WindowHeader
        handleMouseDown={handleMouseDown}
        onMaximize={onMaximize}
        onMinimize={onMinimize}
        onClose={onClose}
      />

      <WindowMenu menuItems={menuItems} />

      <div>
        <Image
          src="/chat-header.png"
          alt="Windows logo"
          width={600}
          height={65}
        />
      </div>

      <div className={styles.chatAndAvatarArea}>
        <div className={styles.chatAreaLeft}>
          <div className={styles.chatArea}>
            <div className={styles.chatToArea}>{displayContactName}:</div>
            <div className={styles.messagesContainer}>
              {messages.map((msg: Message, index: number) => (
                <div key={index} className={styles.message}>
                  <div className={styles.messageHeader}>
                    <span
                      className={`${styles.username} ${
                        msg.isCurrentUser
                          ? styles.currentUser
                          : styles.otherUser
                      }`}
                    >
                      {msg.user}
                    </span>
                    <span className={styles.messageLabel}>says:</span>
                  </div>
                  <div className={styles.messageText}>
                    {msg.text}
                    {msg.isFile && (
                      <div className={styles.fileAttachment}>
                        <a
                          href={msg.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          📄 {msg.fileName}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className={styles.typingIndicator}>
                  <span className={styles.username}>
                    {chatContent[chatType as keyof typeof chatContent]
                      ?.contactName || "Flor"}
                  </span>
                  <span className={styles.messageLabel}>
                    está escribiendo...
                  </span>
                  <div className={styles.typingDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.inputArea}>
            <div className={styles.inputControls}>
              <div className={styles.inputIconsBar}>
                {inputButtons.map((btn, idx) => (
                  <button
                    key={idx}
                    className={`${styles.inputButton} ${btn.className}`}
                    onClick={btn.type === "nudge" ? triggerNudge : undefined}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
              <div className={styles.inputWrapper}>
                <textarea
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setMessage(e.target.value)
                  }
                  onKeyDown={handleKeyPress}
                  className={styles.messageInput}
                  placeholder={
                    isAutoSequenceActive
                      ? "Esperá a que termine de escribir..."
                      : "Type a message..."
                  }
                  disabled={isAutoSequenceActive}
                />
                <div className={styles.buttonsWrapper}>
                  <button
                    className={styles.sendButton}
                    onClick={handleSendMessage}
                    disabled={isAutoSequenceActive}
                  >
                    Enviar
                  </button>
                  <button className={styles.searchButton}>Buscar</button>
                </div>
              </div>
              <div className={styles.chatFooter}>
                <div className={`${styles.iconLabel} ${styles.stylus}`}>
                  <Image
                    src="/stylus.png"
                    alt="Windows logo"
                    width={100}
                    height={120}
                    className={styles.stylusIcon}
                  />
                </div>
                <div className={`${styles.iconLabel} ${styles.letter}`}>
                  <Image
                    src="/letter-a-text.svg"
                    alt="Windows logo"
                    width={100}
                    height={100}
                    className={styles.fontIcon}
                  />
                </div>
              </div>
            </div>
            <audio ref={audioRef} src="/sounds/nudge.mp3" preload="auto" />
          </div>
        </div>
        <div className={styles.avatarArea}>
          <div className={styles.avatarContainer}>
            <Image
              src="/duck-avatar.jpeg"
              alt="Avatar"
              width={100}
              height={100}
              className={styles.avatar}
            />
          </div>
          <div className={styles.avatarContainer}>
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={100}
              height={100}
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
