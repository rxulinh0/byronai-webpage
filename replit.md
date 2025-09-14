# ByronAI - AI-Powered Poetry Writing Application

## Overview

ByronAI is a modern web application designed for creative writers and poets, featuring AI-powered autocompletion and intelligent writing assistance. The application combines a beautiful, minimalist user interface with advanced artificial intelligence to help users craft poetry with real-time suggestions and creative guidance. Built as a full-stack TypeScript application, it features a React frontend with a clean, glassmorphic design and an Express.js backend with database integration capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18+ with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing 
- **Styling**: Tailwind CSS with custom design system featuring glassmorphic elements and neon accents
- **Component Library**: shadcn/ui components built on Radix UI primitives for accessibility
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Design System
- **Visual Style**: Apple-inspired minimalist design with glassmorphic cards and neon blue accents
- **Typography**: Inter font family with bold, rounded variants
- **Color Scheme**: Light/dark mode support with pure white/black backgrounds and electric blue highlights
- **Layout**: Responsive grid system using Tailwind's spacing primitives (4, 8, 16, 24 units)

### Backend Architecture  
- **Runtime**: Node.js with TypeScript and ESM modules
- **Framework**: Express.js for REST API endpoints
- **Development**: tsx for TypeScript execution and hot reloading
- **Error Handling**: Centralized error middleware with proper status codes and JSON responses
- **Request Logging**: Custom middleware for API request/response logging with performance metrics

### Data Storage Solutions
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Database**: Configured for PostgreSQL with Neon Database serverless integration
- **Schema Management**: Shared TypeScript schema definitions with Zod validation
- **Migrations**: Drizzle Kit for schema migrations and database management
- **Development Storage**: In-memory storage implementation for local development

### Authentication and Authorization
- **User Model**: Basic user schema with username/password fields and UUID primary keys
- **Session Management**: Session-based authentication with connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod schemas for request validation and type inference

### External Dependencies

#### Database Services
- **Neon Database**: Serverless PostgreSQL for production data storage
- **connect-pg-simple**: PostgreSQL session store for Express sessions

#### UI and Design Libraries  
- **Radix UI**: Comprehensive set of accessible component primitives
- **Lucide React**: Modern icon library for consistent iconography
- **class-variance-authority**: Type-safe component variant management
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

#### Development and Build Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **esbuild**: Fast JavaScript bundler for production server builds

#### Utility Libraries
- **date-fns**: Modern date manipulation library
- **clsx**: Conditional className utility
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel component for content showcases