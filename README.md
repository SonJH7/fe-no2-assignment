# fe-no2-assignment
````markdown
<p align="center">
  <img src="https://raw.githubusercontent.com/your-username/your-repo/main/public/logo.png" alt="PokéDex Logo" width="200" />
</p>

<h1 align="center">⚡️ 나만의 Pokémon Dex ⚡️</h1>

<p align="center">
  A slick, modern PokéDex built with React, Redux Toolkit &︎ Context API — prop-drilling → context → redux, styled-components, and react-toastify for polished UX!  
</p>

---

## 🚀 Live Demo

> 곧 배포 주소를 업데이트합니다!  
> Preview: [https://your-app.vercel.app](https://your-app.vercel.app)  

---

## 📋 Table of Contents

1. [Features](#-features)  
2. [Branch Strategy](#-branch-strategy)  
3. [Tech Stack](#-tech-stack)  
4. [Getting Started](#-getting-started)  
5. [Available Scripts](#-available-scripts)  
6. [Screenshots](#-screenshots)  
7. [License](#-license)  

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

# redux-toolkits
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

## 🖼 Screenshots

<div align="center">
  <img src="https://raw.githubusercontent.com/your-username/your-repo/main/screenshots/home.png" alt="Home Page" width="300" />
  <img src="https://raw.githubusercontent.com/your-username/your-repo/main/screenshots/dex.png" alt="Dex Page" width="300" />
  <img src="https://raw.githubusercontent.com/your-username/your-repo/main/screenshots/detail.png" alt="Detail Page" width="300" />
</div>

---

## 📄 License

This project is licensed under the MIT License.
See [LICENSE](LICENSE) for details.

---

<p align="center">
  Made with ❤️ by [Your Name](https://github.com/your-username)  
</p>
```
