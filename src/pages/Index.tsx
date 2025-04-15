
import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import FormDisplay from "@/components/FormDisplay";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [sidebarItems, setSidebarItems] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState("");

  const handleMenuSelect = (menu: string, items: string[]) => {
    setCurrentCategory(menu);
    setSidebarItems(items);
    setSidebarOpen(true);
    // Reset the form when a new menu is selected
    setSelectedForm("");
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleSidebarItemSelect = (item: string) => {
    setSelectedForm(item);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header onMenuSelect={handleMenuSelect} />
      
      <div className="flex flex-1 relative pb-12">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={handleSidebarClose}
          title={currentCategory}
          items={sidebarItems}
          onItemSelect={handleSidebarItemSelect}
        />
        
        <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>
          {selectedForm ? (
            <FormDisplay category={currentCategory} formName={selectedForm} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-purple-dark mb-4">Welcome to CompanyName Portal</h1>
                <p className="text-lg text-gray-600">
                  Select an option from the dropdown menu to get started.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
