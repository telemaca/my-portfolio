import React, { useState, useRef, useEffect } from "react";
import styles from "./ChatWindow2.module.scss";
import Image from "next/image";

interface Message {
  user: string;
  text: string;
  time: string;
  isCurrentUser: boolean;
}

interface ChatWindowProps {
  contactName?: string;
  contactStatus?: string;
  contactMessage?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  contactName = "Jane Smith",
  contactStatus = "Available",
  contactMessage = "can summer come back now?",
  onClose,
  onMinimize,
  onMaximize,
}) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const [isShaking, setIsShaking] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      user: "Jane Smith",
      text: "what's up?",
      time: "2:34 PM",
      isCurrentUser: false,
    },
    {
      user: "John Doe",
      text: "eating cinnamon toast with almond milk u?",
      time: "2:35 PM",
      isCurrentUser: true,
    },
    {
      user: "Jane Smith",
      text: "major key to success 😎",
      time: "2:36 PM",
      isCurrentUser: false,
    },
  ]);

  const handleSendMessage = (): void => {
    if (message.trim()) {
      const newMessage: Message = {
        user: "John Doe",
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isCurrentUser: true,
      };
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
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

  const menuItems = ["File", "Edit", "Actions", "Tools", "Help"];
  const inputButtons = [
    {
      icon: (
        <Image
          src="/letter-a-text.svg"
          alt="Windows logo"
          width={100}
          height={100}
          className={styles.fontIcon}
        />
      ),
      className: styles.chatIcon,
    },
    {
      icon: (
        <Image
          src="/emoticons.png"
          alt="Windows logo"
          width={100}
          height={100}
          className={styles.withAfter}
        />
      ),
      className: styles.withAfter,
    },
    {
      icon: (
        <>
          <Image
            src="/sound-clip.png"
            alt="Windows logo"
            width={100}
            height={100}
            className={styles.soundIcon}
          />
          <p>Voice Clip</p>
        </>
      ),
      className: styles.soundIcon,
    },
    {
      icon: (
        <Image
          src="/wink.png"
          alt="Windows logo"
          width={100}
          height={100}
          className={styles.withAfter}
        />
      ),
      className: styles.withAfter,
    },
    {
      icon: (
        <Image
          src="/mountain-icon.png"
          alt="Windows logo"
          width={100}
          height={100}
          className={styles.withAfter}
        />
      ),
      className: styles.withAfter,
    },
    {
      icon: (
        <Image
          src="/gift-icon.png"
          alt="Windows logo"
          width={100}
          height={100}
          className={styles.withAfter}
        />
      ),
      className: styles.withAfter,
    },
    {
      icon: (
        <Image
          src="/zumbido.png"
          alt="Windows logo"
          width={100}
          height={100}
          className={styles.nudgeIcon}
        />
      ),
      className: styles.fontButton,
      onClick: () => triggerNudge(),
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const triggerNudge = () => {
    if (isShaking) return; // evitar spam
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
      {/* Title Bar */}
      <div className={styles.titleBar} onMouseDown={handleMouseDown}>
        <div className={styles.titleContent}>
          <Image
            src="/windows-logo.jpeg"
            alt="Windows logo"
            width={100}
            height={100}
            className={styles.windowsLogo}
          />
          <span className={styles.titleText}>Windows Live Messenger</span>
        </div>
        <div className={styles.windowControls}>
          <button
            onClick={onMinimize}
            className={`${styles.controlButton} ${styles.minimizeButton}`}
          >
            _
          </button>
          <button
            onClick={onMaximize}
            className={`${styles.controlButton} ${styles.maximizeButton}`}
          >
            □
          </button>
          <button
            onClick={onClose}
            className={`${styles.controlButton} ${styles.closeButton}`}
          >
            ×
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className={styles.menuBar}>
        <div className={styles.menuItems}>
          {menuItems.map((item) => (
            <span key={item} className={styles.menuItem}>
              {item}
            </span>
          ))}
        </div>
        <div className={styles.menuActions}>
          <button className={styles.actionButton}>✏️</button>
          <button className={styles.actionButton}>📁</button>
          <button className={styles.actionButton}>▼</button>
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <Image
          src="/chat-header.png"
          alt="Windows logo"
          width={600}
          height={65}
        />
      </div>

      {/* Chat Area */}
      <div className={styles.chatAndAvatarArea}>
        <div className={styles.chatAreaLeft}>
          <div className={styles.chatArea}>
            <div className={styles.chatToArea}>Sobre mí:</div>
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
                  <div className={styles.messageText}>{msg.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className={styles.inputArea}>
            <div className={styles.inputControls}>
              <div className={styles.inputIconsBar}>
                {inputButtons.map((btn, idx) => (
                  <button
                    key={idx}
                    className={`${styles.inputButton} ${btn.className}`}
                    onClick={btn.onClick}
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
                  placeholder="Type a message..."
                />
                <div className={styles.buttonsWrapper}>
                  <button className={styles.sendButton}>Enviar</button>
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

      {/* Contact List Area */}
      {/* <div className={styles.contactList}>
        <div className={styles.contactListContent}>
          <div className={styles.avatar}>
            <div className={styles.avatarInner}>
              <div className={styles.avatarCore}></div>
            </div>
          </div>
          <div className={styles.statusIndicators}>
            <div className={`${styles.statusDot} ${styles.onlineStatus}`}></div>
            <div className={`${styles.statusDot} ${styles.awayStatus}`}></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ChatWindow;
