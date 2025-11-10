import React, { Suspense, lazy } from "react"; // Importe Suspense e lazy
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

// Use lazy para importar os componentes que não estão na primeira tela
const About = lazy(() => import("./components/About"));
const Features = lazy(() => import("./components/Features"));
const Story = lazy(() => import("./components/Story"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      {/* Envolva os componentes lazy em Suspense com um fallback leve */}
      <Suspense fallback={<div className="flex-center h-screen w-full">Carregando...</div>}>
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;