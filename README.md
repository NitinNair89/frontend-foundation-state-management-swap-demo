# Frontend Foundation — State Swap Demo

This repository demonstrates how to use the `frontend-foundation` template to swap state implementations and how the same UI and business logic can run on different state management engines without modification.

## What this demo shows

- UI components do not import redux or jotai
- Services depend on a stable state contract
- State management implementation can be swapped
- No UI or hook changes are required

## Swap Demonstrated

This demo has two implementations:

- `main-redux` — Redux Toolkit implementation
- `main-jotai` — Jotai implementation

Both implement the same Counter interface.

The UI code, hooks contract, and page logic are identical.
Only the internal state adapter differs.

## Why This Matters

This mirrors real-world state evolution:
Redux → Jotai → Signals → Something else

Without rewriting the application.

This repo intentionally focuses on ONE concern:
**State swap-ability**.

Architecture details live in the template repo:
[Frontend Foundation](https://github.com/NitinNair89/frontend-foundation)
