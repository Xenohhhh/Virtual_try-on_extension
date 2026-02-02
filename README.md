# Virtual Try-On Browser Extension (Prototype)

> **A Full-Stack AI application that bridges e-commerce browsing with personal styling.**

## 📖 Overview

This project is a **Chrome Extension** integrated with a **MERN Stack Backend** that allows users to virtually "try on" clothing items directly from websites like **Amazon** and **Myntra**.

Instead of guessing how a piece of clothing looks, the user simply clicks the item, and the extension captures the high-resolution image data, processes it via a Node.js backend, and (planned) uses Generative AI to map the clothing onto the user's photo.

## 🏗️ Architecture

The system operates as a data pipeline:

1. **The Sensor (Extension):** Injects code into the browser to detect product images, handling complex DOM structures and dynamic loading (SPAs).
2. **The Bridge (API):** Transmits image data securely from the client (Browser) to the server.
3. **The Brain (Backend):** A Node.js/Express server that receives the payload and orchestrates the AI processing (Current Stage).
4. **The AI (Planned):** Integration with Computer Vision models (e.g., Hugging Face/Vertex AI) for image synthesis.

## 🛠️ Tech Stack

* **Frontend:** Chrome Extension API (Manifest V3), JavaScript (ES6+), HTML5.
* **Backend:** Node.js, Express.js, Body-Parser.
* **Networking:** REST API, CORS handling, Fetch API.
* **Tools:** Chrome DevTools (Console/Network debugging).

## 🚀 Features (Current Status)

* **Smart Image Detection:** Uses **Event Delegation** to detect clicks on dynamic elements (images that load after the page render).
* **High-Res Capture:** Automatically prioritizes high-quality image sources (`data-old-hires`) over standard thumbnails.
* **Anti-Zoom Locking:** Prevents e-commerce "zoom lenses" from blocking user interaction.
* **Full-Stack Connectivity:** Successfully sends captured payloads to a local Express server.
