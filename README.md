# 🚀 TUF Clone - LeetCode with Video Solutions

A full-stack LeetCode clone platform that revolutionizes coding practice by providing video solution explanations for every problem. Master data structures and algorithms with visual learning!

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)

## ✨ Features

### 🎯 Core Features
- **Interactive Code Editor** - Monaco Editor with syntax highlighting and multiple language support
- **Video Solutions** - Watch detailed video explanations for each problem
- **Problem Library** - Comprehensive collection of DSA problems with difficulty levels
- **Test Cases** - Run and validate your code against multiple test cases
- **User Authentication** - Secure login and registration system
- **Progress Tracking** - Track your solved problems and learning progress
- **Responsive UI** - Beautiful, mobile-friendly interface built with Tailwind CSS

### 🛠️ Technical Features
- Real-time code execution
- Redis caching for optimized performance
- JWT-based authentication
- Cloud storage integration (Cloudinary)
- AI-powered features using Google GenAI
- Redux state management
- Form validation with Zod

## 🏗️ Tech Stack

### Frontend
- **Framework:** React 19.1.0
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4 + DaisyUI
- **State Management:** Redux Toolkit
- **Routing:** React Router v7
- **Code Editor:** Monaco Editor
- **Forms:** React Hook Form + Zod validation
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express 5
- **Database:** MongoDB (Mongoose)
- **Caching:** Redis
- **Authentication:** JWT + bcrypt
- **File Storage:** Cloudinary
- **AI Integration:** Google GenAI
- **Security:** CORS, Cookie Parser, Validator

## 📁 Project Structure

```
Major_Leetcode/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── store/      # Redux store configuration
│   │   ├── utils/      # Utility functions
│   │   └── App.jsx     # Main app component
│   ├── public/         # Static assets
│   └── package.json
├── backend/            # Express backend API
│   ├── src/
│   │   └── index.js    # Server entry point
│   └── package.json
├── DataPart/           # Data and problem sets
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB installed and running
- Redis server installed and running
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SahilTanwani/TUFClone.git
   cd TUFClone
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   REDIS_URL=your_redis_url
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   GOOGLE_GENAI_API_KEY=your_google_genai_key
   ```

   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

   Start the development server:
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## 💡 Usage

1. **Register/Login** - Create an account or login to existing account
2. **Browse Problems** - Explore the problem library categorized by difficulty
3. **Solve Problems** - Use the integrated code editor to write your solution
4. **Run Tests** - Validate your solution against test cases
5. **Watch Solutions** - Learn from video explanations if you get stuck
6. **Track Progress** - Monitor your improvement over time

## 🎨 Screenshots

<!-- Add screenshots of your application here -->
<!-- Example:
![Home Page](./screenshots/home.png)
![Code Editor](./screenshots/editor.png)
![Video Solution](./screenshots/video.png)
-->

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sahil Tanwani**
- GitHub: [@SahilTanwani](https://github.com/SahilTanwani)

## 🙏 Acknowledgments

- Inspired by LeetCode and TakeUForward
- Monaco Editor for the excellent code editor component
- All contributors who help improve this project

## 📧 Contact

For any queries or suggestions, feel free to reach out!

---

⭐ Star this repo if you find it helpful!
