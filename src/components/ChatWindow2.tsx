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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const menuItems = [
    "Photos",
    "Files",
    "Video",
    "Call",
    "Games",
    "Activities",
    ">>",
  ];
  const inputButtons = [
    { icon: "Aa", className: styles.fontButton },
    { icon: "😀", className: styles.emojiButton },
    { icon: "📎", className: styles.attachButton },
    { icon: "🎨", className: styles.formatButton },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
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
      className={styles.chatWindow}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: 10,
      }}
      ref={windowRef}
    >
      {/* Title Bar */}
      <div className={styles.titleBar}>
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
      <div className={styles.contactInfo}>
        <div className={styles.contactContent}>
          <div className={styles.avatar}>
            <div className={styles.avatarInner}>
              <div className={styles.avatarCore}></div>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactName}>{contactName}</div>
            <div className={styles.contactStatus}>({contactStatus})</div>
            <div className={styles.contactMessage}>{contactMessage}</div>
          </div>
        </div>
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
              <div className={styles.inpuIconsBar}>
                {inputButtons.map((btn, idx) => (
                  <button
                    key={idx}
                    className={`${styles.inputButton} ${btn.className}`}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
              <div className={styles.chatFooter}>A</div>
            </div>
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
