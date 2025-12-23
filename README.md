# Frontend Foundation — State Swap Demo 

This repository demonstrates how to use the `frontend-foundation` template to swap state management implementations without changing UI code.

## What this demo shows

- UI components do not import redux or jotei
- Services depend on a stable state contract
- State management implementation can be swapped
- No UI or hook changes are required

## Swap Demonstrated

This demo has two implementations:

- Redux-based adapter - `main-redux`
- Jotai-based adapter - `main-jotei`

Both implement the same Counter interface.

## How Swap Works

The swap is performed by replacing: `src/stores/counter.adapter.ts`

No UI, hook, or domain logic changes are required.

## Why This Matters

This mirrors real-world state evolution:
Redux → Jotai → Signals → Something else

Without rewriting the application.

This repo intentionally focuses on ONE concern:
**State swap-ability**.

Architecture details live in the template repo:
[Frontend Foundation](https://github.com/NitinNair89/frontend-foundation)