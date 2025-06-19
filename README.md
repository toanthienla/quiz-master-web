# Quiz Master Web

A web application for creating, administering, and participating in quizzes.

## Features

-   Create, edit, and delete quizzes
-   Participate in quizzes and view results
-   Responsive and modern UI
-   Fast performance with Vite
-   Styled with Tailwind CSS
-   Built using React

## Tech Stack

-   [React](https://react.dev/) &mdash; for building the user interface
-   [Vite](https://vitejs.dev/) &mdash; as the build tool and development server
-   [Tailwind CSS](https://tailwindcss.com/) &mdash; for utility-first CSS styling

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 16+ recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/toanthienla/quiz-master-web.git
    cd quiz-master-web
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

### Building for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

## Project Structure

```
quiz-master-web/
│
├── public/           # Static assets
├── src/              # Source files
│   ├── components/   # React components
│   ├── pages/        # Page components
│   ├── App.jsx       # Root app file
│   └── main.jsx      # Entry point
├── tailwind.config.js# Tailwind CSS configuration
├── vite.config.js    # Vite configuration
└── package.json
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
