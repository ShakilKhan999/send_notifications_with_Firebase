# NestJS Firebase Push Notification Service

A professional, lightweight microservice built with **NestJS** and **Firebase Admin SDK** to handle push notifications. This service provides a clean API to send notifications to mobile devices via FCM (Firebase Cloud Messaging).

## 🚀 Features

- **NestJS Architecture**: Built with modularity and scalability in mind.
- **Firebase Admin Integration**: Secure connection to FCM.
- **Data Validation**: Request payloads are validated using `class-validator`.
- **Environment Driven**: Configuration managed via environment variables.

---

## 🛠️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **SDK**: [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- **Language**: TypeScript
- **Validation**: class-validator & class-transformer

---

## 📋 Prerequisites

- Node.js (v16+)
- npm / yarn
- A Firebase Project with Cloud Messaging enabled
- A Firebase Service Account Key (JSON)

---

## ⚙️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Md-sakib-al-hasan/send_notifications_with_Firebase.git
   cd send_notifications_with_Firebase
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your Firebase credentials:
   ```env
   FIREBASE_PROJECT_ID="your-project-id"
   FIREBASE_CLIENT_EMAIL="your-client-email"
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"
   ```

---

## 🚀 Running the App

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

---

## 📡 API Reference

### Send Notification

**Endpoint**: `POST /notifications/send`

**Request Body**:
```json
{
  "token": "DEVICE_FCM_TOKEN",
  "title": "Notification Title",
  "body": "Notification message body content.",
  "data": {
    "key1": "extra_value",
    "key2": "extra_value"
  }
}
```

**Success Response**:
```json
{
  "success": true,
  "messageId": "projects/your-project/messages/0:123456789"
}
```

---

## 📁 Project Structure

```text
src/
├── firebase.service.ts        # Firebase Admin SDK initialization
├── notification.service.ts    # Business logic for sending FCM messages
├── notification.controller.ts  # API routes
├── notification.dto.ts        # Request validation
├── app.module.ts              # Root module
└── main.ts                    # Entry point
```

---

## 📄 License

This project is [MIT licensed](LICENSE).
