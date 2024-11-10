// src/questions/index.ts

export interface Option {
  title: string;
  description: string;
  key: string;
  image: string;
}

export interface Question {
  question: string;
  options: Option[];
}

const questions: Question[] = [
  {
    question: "Какова основная цель вашего проекта?",
    options: [
      { title: "Веб-сайт", description: "Создание интерактивного веб-приложения для пользователей.", key: "web_site", image: "/images/web_site.png" },
      { title: "Мобильное приложение", description: "Разработка приложения для мобильных устройств.", key: "mobile_app", image: "/images/mobile_app.png" },
      { title: "Игра", description: "Создание увлекательной игры для различных платформ.", key: "game", image: "/images/game.png" },
      { title: "Корпоративная система", description: "Программное обеспечение для управления бизнес-процессами.", key: "enterprise_system", image: "/images/enterprise_system.png" },
      { title: "Интернет-магазин", description: "Создание онлайн-платформы для продажи товаров или услуг.", key: "e_commerce", image: "/images/e_commerce.png" },
      { title: "Образовательная платформа", description: "Платформа для обучения и обмена знаниями.", key: "education_platform", image: "/images/education_platform.png" },
      { title: "Программное обеспечение для управления проектами", description: "Инструменты для планирования и отслеживания проектов.", key: "project_management", image: "/images/project_management.png" },
      { title: "Социальная сеть", description: "Платформа для общения и обмена информацией между пользователями.", key: "social_network", image: "/images/social_network.png" },
      { title: "Финансовое приложение", description: "Приложение для управления личными или корпоративными финансами.", key: "finance_app", image: "/images/finance_app.png" },
      { title: "Платформа для аналитики данных", description: "Программное обеспечение для сбора и анализа данных.", key: "data_analytics", image: "/images/data_analytics.png" },
      { title: "Платформа для здоровья и фитнеса", description: "Приложение для мониторинга здоровья и физической активности.", key: "health_fitness", image: "/images/health_fitness.png" },
      { title: "Мессенджер", description: "Приложение для обмена сообщениями в реальном времени.", key: "messenger", image: "/images/messenger.png" },
      { title: "Платформа для бронирования", description: "Система для бронирования услуг (например, отелей, авиабилетов).", key: "booking_platform", image: "/images/booking_platform.png" },
      { title: "CRM-система", description: "Система для управления взаимоотношениями с клиентами.", key: "crm", image: "/images/crm.png" },
      { title: "Программное обеспечение для автоматизации бизнеса", description: "Инструменты для автоматизации бизнес-процессов.", key: "business_automation", image: "/images/business_automation.png" },
      { title: "Сайт-портфолио", description: "Сайт для представления работ или услуг фрилансера, компании или агентства.", key: "portfolio_site", image: "/images/portfolio_site.png" },
      { title: "Блог", description: "Платформа для публикации статей и создания контента.", key: "blog", image: "/images/blog.png" },
      { title: "Маркетинговая платформа", description: "Инструменты для управления маркетингом и рекламой.", key: "marketing_platform", image: "/images/marketing_platform.png" },
      { title: "Информационный портал", description: "Сайт или приложение для предоставления актуальных новостей и информации.", key: "news_portal", image: "/images/news_portal.png" },
      { title: "Платформа для проведения вебинаров", description: "Приложение для организации и проведения вебинаров и конференций.", key: "webinar_platform", image: "/images/webinar_platform.png" },
      { title: "Система для управления документами", description: "Программное обеспечение для хранения и управления документами.", key: "document_management", image: "/images/document_management.png" },
      { title: "Платформа для фриланса", description: "Сайт для поиска и предоставления фриланс-услуг.", key: "freelance_platform", image: "/images/freelance_platform.png" },
      { title: "Клиентская панель", description: "Приложение для управления данными и сервисами для клиентов.", key: "client_portal", image: "/images/client_portal.png" },
      { title: "Программное обеспечение для управления складом", description: "Система для контроля за запасами и движением товаров.", key: "inventory_management", image: "/images/inventory_management.png" },
      { title: "Автоматизация производства", description: "ПО для контроля и управления процессами на производстве.", key: "production_automation", image: "/images/production_automation.png" },
      { title: "Рекламная платформа", description: "Платформа для создания и управления рекламными кампаниями.", key: "advertisement_platform", image: "/images/advertisement_platform.png" },
      { title: "Геолокационное приложение", description: "Приложение с функциями карт и геолокации.", key: "geo_location_app", image: "/images/geo_location_app.png" },
      { title: "Сервис подписки", description: "Приложение для управления подписками и периодическими платежами.", key: "subscription_service", image: "/images/subscription_service.png" },
      { title: "Искусственный интеллект и машинное обучение", description: "Система для реализации моделей ИИ и анализа данных.", key: "ai_ml", image: "/images/ai_ml.png" },
      { title: "Кибербезопасность", description: "Система для мониторинга и защиты данных и инфраструктуры.", key: "cybersecurity", image: "/images/cybersecurity.png" },
      { title: "Интернет вещей (IoT)", description: "Система для управления устройствами и сенсорами IoT.", key: "iot", image: "/images/iot.png" },
    ],
  },
  {
    question: "Какие ключевые функции должны быть в этом приложении?",
    options: [
      { title: "Чат", description: "Интеграция функционала чата для обмена сообщениями.", key: "chat", image: "/images/chat.png" },
      { title: "Галерея", description: "Создание галереи изображений или каталога.", key: "gallery", image: "/images/gallery.png" },
      { title: "Форма обратной связи", description: "Форма для связи с пользователями или получения отзывов.", key: "feedback_form", image: "/images/feedback_form.png" },
      { title: "Расширенный поиск", description: "Система поиска с фильтрами и категорией.", key: "search", image: "/images/search.png" },
      { title: "Панель администратора", description: "Интерфейс управления для администраторов приложения.", key: "admin_panel", image: "/images/admin_panel.png" },
      { title: "Система рекомендаций", description: "Рекомендации по контенту или продуктам для пользователей.", key: "recommendation_system", image: "/images/recommendation_system.png" },
    ],
  },
  {
    question: "Кто будет пользоваться вашим приложением?",
    options: [
      { title: "Общая аудитория", description: "Приложение для широкой аудитории.", key: "general_public", image: "/images/general_public.png" },
      { title: "Специалисты", description: "Пользователи из определенной профессиональной области.", key: "specialists", image: "/images/specialists.png" },
      { title: "Работники компании", description: "Внутреннее приложение для сотрудников.", key: "company_employees", image: "/images/company_employees.png" },
      { title: "Дети и подростки", description: "Приложение для детей или подростков.", key: "youth", image: "/images/youth.png" },
      { title: "Бизнес-клиенты", description: "Продукт для профессионалов и компаний.", key: "business_clients", image: "/images/business_clients.png" },
    ],
  },
  {
    question: "Насколько важно, чтобы приложение работало быстро, даже если пользователей будет много?",
    options: [
      { title: "Критично", description: "Высокая производительность имеет первостепенное значение.", key: "critical", image: "/images/critical.png" },
      { title: "Желательно", description: "Производительность важна, но не критична.", key: "preferred", image: "/images/preferred.png" },
      { title: "Не важно", description: "Производительность не играет большой роли.", key: "not_important", image: "/images/not_important.png" },
    ],
  },
  {
    question: "Будут ли пользователи часто работать с приложением на телефонах или планшетах?",
    options: [
      { title: "Да", description: "Мобильная поддержка обязательна.", key: "mobile_support_required", image: "/images/mobile_support_required.png" },
      { title: "Нет", description: "Достаточно версии для компьютеров.", key: "desktop_only", image: "/images/desktop_only.png" },
      { title: "Не уверен", description: "Возможно, потребуется мобильная версия в будущем.", key: "unsure", image: "/images/unsure.png" },
    ],
  },
  {
    question: "Нужно ли приложению поддерживать несколько языков?",
    options: [
      { title: "Да", description: "Приложение должно быть доступно на нескольких языках.", key: "multilingual_required", image: "/images/multilingual_required.png" },
      { title: "Нет", description: "Достаточно одного языка.", key: "single_language", image: "/images/single_language.png" },
      { title: "Не знаю", description: "Возможно, поддержка нескольких языков понадобится позже.", key: "unsure", image: "/images/unsure.png" },
    ],
  },
  {
    question: "Нужны ли вам дополнительные уровни защиты и безопасности для этого приложения?",
    options: [
      { title: "Высокий", description: "Высокий уровень безопасности необходим (например, для данных пользователей).", key: "high_security", image: "/images/high_security.png" },
      { title: "Средний", description: "Требуется стандартный уровень безопасности.", key: "medium_security", image: "/images/medium_security.png" },
      { title: "Низкий", description: "Безопасность не критична.", key: "low_security", image: "/images/low_security.png" },
    ],
  },
  {
    question: "Будете ли вы собирать и анализировать данные, чтобы улучшить продукт или принимать решения?",
    options: [
      { title: "Да", description: "Планируем использовать данные для аналитики и решений.", key: "data_analysis_needed", image: "/images/data_analysis_needed.png" },
      { title: "Возможно", description: "В будущем это может понадобиться.", key: "maybe_later", image: "/images/maybe_later.png" },
      { title: "Нет", description: "Анализ данных не нужен.", key: "no_data_analysis", image: "/images/no_data_analysis.png" },
    ],
  },
  {
    question: "Нужно ли приложению подключаться к другим системам или базам данных?",
    options: [
      { title: "Да", description: "Требуется подключение к внешним системам или базам данных.", key: "integration_required", image: "/images/integration_required.png" },
      { title: "Желательно", description: "Это было бы полезно, но не обязательно.", key: "integration_preferred", image: "/images/integration_preferred.png" },
      { title: "Нет", description: "Приложение будет работать автономно.", key: "no_integration", image: "/images/no_integration.png" },
    ],
  },
  {
    question: "Какие ваши требования к срокам и бюджету для этого проекта?",
    options: [
      { title: "Быстро и недорого", description: "Ограниченный бюджет и сжатые сроки.", key: "low_budget_quick", image: "/images/low_budget_quick.png" },
      { title: "Стандартные сроки и бюджет", description: "Средний бюджет и сроки.", key: "standard_budget", image: "/images/standard_budget.png" },
      { title: "Не ограничены", description: "Бюджет позволяет использовать лучшие технологии, сроки не критичны.", key: "high_budget_flexible", image: "/images/high_budget_flexible.png" },
    ],
  },
];

export default questions;
