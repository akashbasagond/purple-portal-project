
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Sidebar = ({ 
  isOpen, 
  onClose, 
  title, 
  items,
  onItemSelect 
}) => {
  return (
    <div 
      className={`fixed top-[59px] bottom-[50px] bg-white w-64 shadow-lg border-r border-gray-200 transition-transform duration-300 z-10 ${
        isOpen ? "translate-x-0 animate-slide-in" : "-translate-x-full animate-slide-out"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="font-bold text-lg text-purple-dark">{title}</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-gray-500 hover:text-purple" 
          onClick={onClose}
        >
          <X size={18} />
        </Button>
      </div>
      <nav className="p-2">
        <ul>
          {items.map((item) => (
            <li key={item}>
              <Button
                variant="ghost"
                className="w-full justify-start text-left mb-1 hover:bg-purple-accent hover:text-purple-dark"
                onClick={() => onItemSelect(item)}
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
