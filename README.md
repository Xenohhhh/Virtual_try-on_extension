# Virtual Try-On Browser Extension (Prototype)

A virtual try-on system that allows users to preview how a clothing item would look on a person by combining a Chrome extension frontend with a Node.js backend and an AI-based virtual try-on model (HR-VITON).

A virtual try-on system that lets users preview how a clothing item would look on a person.This project focuses on **robust backend engineering and AI input orchestration** for virtual try-on models (HR-VITON), integrated with a Chrome extension frontend.

> Built with a production-style mindset: validation, transaction safety, and clean AI boundaries.

## 🚀 Highlights (Why this project stands out)

- End-to-end **image ingestion pipeline** from real-world URLs
- **Transaction-safe backend** (no partial state on failure)
- Clear separation between **staging** and **AI input**
- AI-ready filesystem orchestration for HR-VITON
- Designed to scale from single try-on → batch inference
- GPU-ready architecture (tested on local NVIDIA setup)

## 🧠 System Overview

Chrome Extension
↓ (image URL)
Node.js Backend
↓
Download → Validate → Resize → Cleanup-safe
↓
HR-VITON Input Preparation
↓
AI Inference (next phase)

The backend guarantees that **AI models only ever receive valid, fully-prepared inputs**..

## ✨ Features

- Chrome extension captures clothing image URLs from e-commerce sites
- Backend downloads images securely from URLs
- Image validation (format & size checks)
- Deterministic image resizing
- Transaction-safe processing (no partial state on failure)
- Staging system for safe preprocessing
- Automatic preparation of HR-VITON input structure
- Programmatic generation of `pairs.txt` for AI inference

## 🔄 Backend Processing Pipeline

The backend follows a **transactional image preprocessing pipeline**:

1. **Request validation**

   - Both `imageUrl` (cloth) and `personUrl` are required
2. **Image staging**

   - Images are downloaded into `backend/public/`
3. **Validation & resize**

   - File size limit (≤ 5MB)
   - Allowed formats (`jpg`, `jpeg`, `png`)
   - Resized to fixed dimensions for AI compatibility
4. **Safe cleanup**

   - Any failure triggers automatic rollback
   - No partial or corrupted files remain on disk
5. **AI input preparation**

   - Images are copied into the HR-VITON test directory
   - `pairs.txt` is generated programmatically

This guarantees that **HR-VITON only ever sees valid, complete inputs**.

## 📄 `pairs.txt` Format

`pairs.txt` is generated automatically and contains:

person.jpg cloth.jpg

- One pair per line
- Filenames only (no paths)
- Required by HR-VITON to map person–cloth pairs.

## 🧱 Engineering Principles Demonstrated

* **Transactional backend design**
* **Clean separation of concerns**
* **AI-safe preprocessing**
* **Failure-first thinking**
* **Scalable architecture**

This project is intentionally built to resemble **real-world ML-backed systems**, not demos.

## 🖥 Tech Stack

* **Backend:** Node.js, Express
* **Image Processing:** Sharp
* **Frontend:** Chrome Extension (JavaScript)
* **AI Model:** HR-VITON (integration ready)
* **Hardware:** NVIDIA GPU (RTX-class recommended)

## 🛣 Roadmap

* [X]  Backend preprocessing pipeline
* [X]  Transaction-safe file handling
* [X]  HR-VITON input orchestration
* [ ]  Trigger HR-VITON inference from Node.js
* [ ]  Capture and return AI output image
* [ ]  Frontend try-on preview
* [ ]  Multi-garment & batch support
* [ ]  Dockerized deployment
