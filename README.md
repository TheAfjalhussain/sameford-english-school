# Sameford English School Website

A full-stack web application for Sameford English School, featuring a modern React frontend and a robust Node.js backend with MySQL database.

## 🏗️ Architecture

This project consists of two main parts:

- **Frontend**: React application built with Vite, TypeScript, and ShadCN UI components
- **Backend**: Node.js/Express API server with MySQL database and Sequelize ORM

## 🚀 Features

### Public Features
- **Homepage**: Hero section with sliders, quick facts, and navigation
- **About**: School information and mission
- **Vision**: School vision and values
- **Academics**: Academic programs and curriculum
- **Admission**: Admission process and requirements
- **Facilities**: School facilities and infrastructure
- **Activities**: Extracurricular activities and programs
- **Gallery**: Image gallery with categories (Academics, Sports, Arts, Events)
- **Notices**: School announcements and news
- **FAQ**: Frequently asked questions
- **Contact**: Contact information and form
- **Testimonials**: Student and parent testimonials
- **Policies**: School policies and guidelines
- **Terms**: Terms and conditions

### Admin Features
- **Dashboard**: Admin control panel
- **Authentication**: Secure login system
- **Content Management**: Manage hero sliders, gallery images, facilities, activities, and notices
- **File Upload**: Image upload functionality

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **ShadCN UI** for components
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Query** for data fetching
- **React Router** for navigation

### Backend
- **Node.js** with Express.js
- **MySQL** database with Sequelize ORM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Multer** for file uploads
- **EJS** for admin panel templates
- **Helmet, CORS, Compression** for security and performance

## 📋 Prerequisites

- Node.js (v16 or higher)
- MySQL database
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sameford-english-school
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../Frontend
   npm install
   ```

## ⚙️ Configuration

### Backend Configuration

1. Create a `.env` file in the `Backend` directory:
   ```env
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASS=your_mysql_password
   DB_NAME=sameford_school
   DB_PORT=3306
   JWT_SECRET=your_jwt_secret_key
   FRONTEND_URL=http://localhost:8080
   PORT=5000
   ```

2. **Database Setup**
   - Create a MySQL database named `sameford_school`
   - Run the seed script to populate initial data:
     ```bash
     npm run seed
     ```

### Frontend Configuration

1. Create a `.env` file in the `Frontend` directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

## 🚀 Running the Application

### Development Mode

1. **Start Backend** (Terminal 1):
   ```bash
   cd Backend
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start Frontend** (Terminal 2):
   ```bash
   cd Frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:8080`

### Production Build

1. **Build Frontend**:
   ```bash
   cd Frontend
   npm run build
   ```

2. **Start Backend**:
   ```bash
   cd Backend
   npm start
   ```

## 📊 Database Models

- **Admin**: User accounts for admin panel
- **HeroSlider**: Homepage hero section images
- **ImageGallery**: Gallery images with categories
- **Facility**: School facilities information
- **Activity**: Extracurricular activities
- **Notice**: School announcements

## 🔐 Admin Access

Default admin credentials (after running seed):
- **Username**: admin
- **Password**: admin123
- **Email**: admin@school.com

Access admin panel at: `http://localhost:5000/admin`

## 📁 Project Structure

```
sameford-english-school/
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── public/
│   ├── routes/
│   ├── seeders/
│   ├── views/
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── lib/
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## 🧪 Testing

### Frontend Tests
```bash
cd Frontend
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support or questions, please contact the development team.</content>
<parameter name="filePath">F:\Rk-mission-school\Sameford English School\README.md