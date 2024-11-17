// src/questions/options/chat.ts

import { Option } from "../types/option";

const chatOptions: Option[] = [
  { title: "Групповой чат", description: "Поддержка общения между несколькими пользователями одновременно.", key: "group_chat", image: "/images/group_chat.png" },
  { title: "Отправка файлов", description: "Возможность делиться документами, изображениями и другими файлами.", key: "file_sharing", image: "/images/file_sharing.png" },
  { title: "Видеозвонки", description: "Интеграция видеосвязи для пользователей чата.", key: "video_calls", image: "/images/video_calls.png" },
  { title: "Чат-бот", description: "Добавление бота для автоматизированного взаимодействия с пользователями.", key: "chat_bot", image: "/images/chat_bot.png" },
  { title: "История сообщений", description: "Сохранение всех сообщений для последующего просмотра.", key: "message_history", image: "/images/message_history.png" },
  { title: "Уведомления", description: "Оповещения о новых сообщениях, упоминаниях или приглашениях в чат.", key: "notifications", image: "/images/notifications.png" },
  { title: "Шифрование", description: "Обеспечение безопасности сообщений с помощью шифрования.", key: "encryption", image: "/images/encryption.png" },
  { title: "Поиск по сообщениям", description: "Возможность искать сообщения по ключевым словам или датам.", key: "message_search", image: "/images/message_search.png" },
  { title: "Поддержка мультиязычного интерфейса", description: "Чат с поддержкой нескольких языков.", key: "multilingual_chat", image: "/images/multilingual_chat.png" },
  { title: "Интеграция с социальными сетями", description: "Возможность взаимодействия с чатами через соцсети (например, Telegram или WhatsApp).", key: "social_media_integration", image: "/images/social_media_integration.png" },
  { title: "Настраиваемый интерфейс", description: "Возможность настройки внешнего вида чата под нужды пользователей.", key: "customizable_ui", image: "/images/customizable_ui.png" },
  { title: "Модерация", description: "Функции для управления и модерирования чатов.", key: "moderation", image: "/images/moderation.png" },
];

export default chatOptions;
