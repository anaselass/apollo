# Apollo GS - Energy Management Dashboard

A modern, high-performance web dashboard for monitoring and managing energy assets (Solar Inverters, Battery Packs, EV Chargers, Grid Meters) in real-time. Built with a focus on modern UI/UX design, utilizing a dark-themed glassmorphism aesthetic tailored for facility operators.

## 🚀 Features

- **Real-Time Monitoring:** Live tracking of total active devices, power output, and system status.
- **Dynamic Asset Management:** Interactive dashboard displaying active, charging, offline, and fault states for various energy assets.
- **Detailed Asset View:** Deep-dive into individual assets with real-time stats (Current Output, Daily Yield, Efficiency, Temperature) and historical power output charts.
- **Responsive Layout:** Fluid layout that seamlessly adapts from standard laptops to ultra-wide desktop monitors without breaking or stretching.
- **State Management:** Graceful handling of different data states including Live data, Empty State (Onboarding), and Offline/Error states with visual alerts.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Charting:** [Recharts](https://recharts.org/) (Customized for dynamic gradients and responsive sizing)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🎨 UI/UX Design System

This project strictly adheres to a premium industrial design system:
- **Deep Dark Theme:** Canvas (`#0D1117`), Surface (`#161B22`) to reduce operator eye strain.
- **Semantic Colors:** Cyan (Primary), Emerald (Active), Amber (Warning), Red (Offline/Fault) with custom glow effects for critical alerts.
- **Typography:** Inter font family optimized for tabular numeric data.
- **Spacing:** Strict 4px grid system aligned perfectly with Tailwind CSS utilities.

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/apollo-dashboard.git
   cd apollo-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/      # Reusable UI elements (MetricTile, AssetCard, StatusBadge, Charts)
├── pages/           # Main views (Dashboard, AssetDetail)
├── data/            # Mock data structure (mockAssets.js)
├── App.jsx          # Root component and Routing
├── index.css        # Global Tailwind styles and custom utilities
└── main.jsx         # React entry point
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
