# Smart Lawyer AI

A modern, AI-powered legal document analysis platform built with React, TypeScript, and Vite.

## Features

- 🤖 **AI-Powered Document Analysis**: Fast and accurate analysis of legal documents
- 🔍 **Smart Precedent Search**: Find relevant legal precedents using text similarity technology
- ✍️ **Professional Legal Drafting**: Generate suggestions for legal memos and defenses
- 🌐 **Bilingual Support**: Full Arabic and English language support
- 🎨 **Modern UI**: Built with Tailwind CSS and Shadcn UI components
- 📱 **Responsive Design**: Fully responsive across all devices

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **Internationalization**: React-i18next
- **Data Visualization**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Smart-Lawyer.git
cd Smart-Lawyer/Smart-Lawyer-Front
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:8080`

### Build

To create a production build:

```bash
npm run build
# or
pnpm build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React context providers
├── hooks/          # Custom React hooks
├── lib/           # Utility functions and libraries
├── pages/         # Application pages/routes
└── translations/  # i18n translation files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run build:dev` - Create development build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Query](https://tanstack.com/query/latest) for powerful data synchronization
