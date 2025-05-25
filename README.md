# fe-no2-assignment

<p align="center">
  <img src="https://postfiles.pstatic.net/MjAyMzA1MjNfMTA2/MDAxNjg0ODIyNTE3MzYz.Tsu0XB0JLwyei5iDONAOmfEUAKTdeTXLOLySAdSGwI8g.MKqg-iVZJimxfirv4iIqtpTtBKBo8cxD_sT_3ZJbWDsg.JPEG.yrchungraxi/1684506057139.jpg?type=w580" width="200" />
</p>

<h1 align="center">⚡️ My Pokémon Dex ⚡️</h1>

<p align="center">
  A slick, modern PokéDex built with React, Redux Toolkit &︎ Context API — prop-drilling → context → redux, styled-components, and react-toastify for polished UX!  
</p>

---

## 🚀 Live Demo

> Preview: (https://pokemon-app-7-cdlu9ws96-jeonghunsons-projects.vercel.app)

---

## 📋 Table of Contents

1. [Features](#-features)  
2. [Branch Strategy](#-branch-strategy)  
3. [Tech Stack](#-tech-stack)  
4. [Getting Started](#-getting-started)  
5. [Available Scripts](#-available-scripts)  


---

## ✨ Features

- **Git Branch Strategy**  
  - `prop-drilling`: Props only, basic state management  
  - `context`: React Context API global store  
  - `redux-toolkits`: Redux Toolkit slice & persist with redux-persist

- **SPA Routing**  
  - Home → Dex → Detail pages with `react-router-dom`  
  - Route params (e.g. `/detail/:id`) and `useNavigate` links

- **PokéDex Core**  
  - **Dashboard**: Fixed 6-slot “My Pokémons” area with add/remove  
  - **List**: Full list of 151 Kanto Pokémons from JSON mock  
  - **Detail**: Show image, types, description + “Add/Remove”  

- **Alerts & Toasts**  
  - Duplicate/add-max warnings replaced by `react-toastify` toasts  
  - Custom success/info messages  

- **Persistence**  
  - User’s Pokémons saved across reloads via `redux-persist`  

- **Responsive UI**  
  - Styled with `styled-components`  
  - Grid-based layouts & mobile-friendly design  

---

## 🌿 Branch Strategy

```bash
# prop-drilling
git checkout -b prop-drilling

# context API
git checkout main
git checkout -b context

# challenge
git checkout main
git checkout -b redux-toolkits
````

* **prop-drilling**

  * Local state + props, `useState` in Dex → Dashboard → Cards
* **context**

  * `PokemonContext`, `useContext` global store
* **redux-toolkits**

  * `createSlice`, `configureStore`, `redux-persist` for state & storage

---

## 🛠 Tech Stack

* **React** (v18+)
* **React Router DOM** (SPA navigation)
* **Redux Toolkit** + **redux-persist**
* **React Context API**
* **styled-components** (CSS-in-JS)
* **react-toastify** (Toasts)
* **Vite** (fast dev & build)
* **Vercel** (hosting)

---

## ⚙️ Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Run locally**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

---

## 📜 Available Scripts

| Command   | Description                      |
| --------- | -------------------------------- |
| `dev`     | Start development server (Vite)  |
| `build`   | Build prod bundle                |
| `preview` | Preview production build locally |
| `lint`    | Run ESLint checks                |
| `test`    | Run unit/UI tests (Jest/RTL)     |

---

