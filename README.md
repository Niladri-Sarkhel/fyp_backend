📂 backend/
├── 📄 README.md
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 tsconfig.json
├── 📄 .gitignore
├── 📄 .env
├── 📄 .prettierrc # Prettier configuration
├── 📄 .prettierignore # Ignore files for Prettier
├── 📄 .eslintrc.json # ESLint configuration
├── 📄 .eslintignore # Ignore files for ESLint
├── 📂 node_modules/
├── 📂 dist/ # Compiled output (ignored in Git)  
├── 📂 public/ # Static assets (if needed)  
│ └── 📂 temp/
│ └── 📄 .gitkeep
├── 📂 tests/ # Unit & integration tests
├── 📂 dummy/ # Random test code
├── 📂 src/ # Source code (TypeScript/JavaScript files)
│ ├── 📂 api/ # (Optional) External API integrations
│ ├── 📂 types/ # TypeScript type definitions
│ ├── 📂 config/ # Configurations (env, logger, etc.)
│ ├── 📂 db/ # Database connections & migrations
│ ├── 📂 controllers/ # Request handlers
│ ├── 📂 middlewares/ # Express middlewares(auth,logging,validation)
│ ├── 📂 models/ # Database models/schema
│ ├── 📂 routes/ # API route definitions
│ ├── 📂 services/ # Business logic (separating from controllers)
│ ├── 📂 utils/ # Utility functions/helpers
│ ├── 📄 index.ts # Main entry point (initializes the app)
│ └── 📄 server.ts # Server setup (Express configuration)
└── 📂 .git/ # Git repository files
