# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React demo repository for [marker.js 3](https://markerjs.com), an image annotation library. It showcases how to integrate marker.js 3 into React applications with custom toolbars and toolboxes.

## Commands

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (runs TypeScript check first)
- `pnpm lint` - Run ESLint

## Architecture

### Multi-Page Application Structure

The app uses Vite's multi-page setup with three entry points:
- `/` - Main index page (`index.html`)
- `/frontpage/` - Front page demo (`frontpage/index.html`)
- `/viewer/` - Annotation viewer demo (`viewer/index.html`)

Each page has its own entry in `src/pages/` with a dedicated `main.tsx` and app component.

### Core Components (`src/components/markerjs/`)

**Editor** (`editor.tsx`): Wraps `MarkerArea` from marker.js 3. Manages marker creation, selection, undo/redo, zoom, and image rendering. Receives annotation state as prop and exposes save callback.

**Viewer** (`viewer.tsx`): Wraps `MarkerView` from marker.js 3. Displays annotations with interactive hover/click to show marker notes. Floating notes card overlay.

**EditorToolbar/ViewerToolbar**: Custom toolbar components for marker selection, actions (undo, redo, zoom, delete, save/download).

**EditorToolbox**: Bottom panel showing context-sensitive controls for the selected marker (stroke, fill, font, opacity, notes).

### State Models (`src/models/`)

- `EditorState`: Tracks editor mode (select/create/rendering) and capability flags (canUndo, canRedo, canDelete)
- `ToolbarAction`: Union type of all toolbar actions
- `MarkerTypeItem/MarkerTypeGroup/MarkerTypeList`: Type definitions for organizing marker types in toolbar

### UI Components (`src/components/ui/`)

shadcn/ui components styled with Tailwind CSS. Uses `@/` path alias for imports from `src/`.

### Key Patterns

- marker.js 3 components (`MarkerArea`, `MarkerView`, `Renderer`) are instantiated via refs and appended to container divs
- Annotation state is passed as `AnnotationState` JSON objects between editor/viewer
- Custom marker icons are defined as SVG strings in `ui/icons.tsx`
- Emoji markers use `CustomImageMarker` with SVG content
