# 📦 Order Tracker System

A modern and responsive **Order Tracking System** built for an e-commerce application. The system allows users to view their order information and track the current delivery status through a clear and user-friendly interface.

## ✨ Features

* 📦 Order tracking interface
* 🚚 Real-time-style order status visualization
* 📍 Order progress tracking
* 🔄 Dynamic order status updates
* 📱 Fully responsive design
* 🎨 Modern and clean UI
* ⚡ Fast and optimized Next.js application
* 🧩 Reusable React components
* 🎯 Status-based UI rendering
* 🛒 E-commerce-focused order information

### Supported Order Statuses

The system currently supports:

* **Processing** — Order has been received and is being processed.
* **Shipped** — Order has been shipped and is on the way.
* **Out for Delivery** — Order is currently out for delivery.
* **Delivered** — Order has been successfully delivered.

---

## 🛠️ Tech Stack

### Frontend

* **Next.js**
* **React.js**
* **JavaScript**
* **Tailwind CSS**
* **HTML5**
* **CSS3**

### Tools

* **Git**
* **GitHub**
* **VS Code**
* **npm**

---

## 📂 Project Structure

```text
order-tracker/
├── public/
│
│
├── src/
│   ├── app/
│   │   ├── page.jsx
│   │   ├── layout.jsx
│   │   ├── globals.css
│   │   └── orders
│   │        ├──page.js
│   │        └──[id]/
│   │           ├──page.js
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── StatusBadge.jsx
│   │   ├── Timeline.jsx
│   │   └── TrackingClient.jsx
│   │
│   ├── lib/
│   │   └── data.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.js
├── postcss.config.mjs
├── tailwind.config.js
└── README.md
```

> The exact structure may vary depending on the implementation.

---

# 🚀 Installation Guide

Follow the steps below to run the project locally.

## 1. Clone the Repository

```bash
git clone https://github.com/fardinfaruk-bd/order_tracking_system.git
```

Then move into the project directory:

```bash
cd order-tracker
```

---

## 2. Install Dependencies

Install all required npm packages:

```bash
npm install
```

---

## 3. Start the Development Server

Run:

```bash
npm run dev
```

The application will start on:

```text
http://localhost:3000
```

Open the URL in your browser.

---

# 🧑‍💻 Development

To start the project in development mode:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

To run the linter:

```bash
npm run lint
```

---


# 📱 Responsive Design

The Order Tracker System is designed to work across different screen sizes:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

The UI uses **Tailwind CSS responsive utilities** to provide a consistent experience across devices.

---

# 🔄 Order Status Flow

The order progresses through different stages:

```text
Processing
    ↓
Shipped
    ↓
Out for Delivery
    ↓
Delivered
```

Each status is visually represented in the tracking interface so users can easily understand the current state of their order.

---

# 🎯 Future Improvements

Possible future improvements include:

* [ ] Backend API integration
* [ ] Database integration
* [ ] User authentication
* [ ] Admin order management
* [ ] Real-time order tracking
* [ ] Order history
* [ ] Email notifications
* [ ] SMS notifications
* [ ] Delivery location tracking
* [ ] Estimated delivery time
* [ ] Order search and filtering

---

# 🤝 Contributing

Contributions are welcome!

### 1. Fork the repository

### 2. Create a new branch

```bash
git checkout -b feature/new-feature
```

### 3. Make your changes

### 4. Commit your changes

```bash
git add .
git commit -m "Add new feature"
```

### 5. Push the branch

```bash
git push origin feature/new-feature
```

### 6. Create a Pull Request

---

# 📄 License

This project is created for learning and development purposes.

---

## 👨‍💻 Author

**Md Fardin Faruk**

Frontend Developer

---

⭐ If you find this project useful, consider giving the repository a star!
