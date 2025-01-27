import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout flex flex-col min-h-screen w-full bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-500 text-white dark:from-gray-900 dark:via-black dark:to-blue-900 dark:text-gray-200">
      {/* Navbar */}
      <header className="bg-gray-800 text-white w-full">
        <Navbar />
      </header>

      {/* Dynamic Content */}
      <main className="flex-grow w-full">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
