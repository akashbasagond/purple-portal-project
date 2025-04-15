
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut } from "lucide-react";
import Logo from "./Logo";

const Header = ({ onMenuSelect }) => {
  const menus = [
    {
      label: "Human Resources",
      items: ["Employees", "Departments", "Payroll", "Time Off"]
    },
    {
      label: "Finance",
      items: ["Invoices", "Expenses", "Reports", "Budgets"]
    },
    {
      label: "Operations",
      items: ["Projects", "Tasks", "Resources", "Timeline"]
    }
  ];

  return (
    <header className="bg-purple-dark py-3 px-4 flex justify-between items-center shadow-md">
      <Logo />
      
      <div className="flex gap-4 items-center">
        {menus.map((menu) => (
          <DropdownMenu key={menu.label}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white flex gap-1 items-center hover:bg-purple-light">
                {menu.label}
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              {menu.items.map((item) => (
                <DropdownMenuItem 
                  key={item}
                  onClick={() => onMenuSelect(menu.label, menu.items)}
                  className="cursor-pointer hover:bg-purple-accent"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>
      
      <Button variant="ghost" className="text-white hover:bg-purple-light gap-2">
        <LogOut size={18} />
        <span className="hidden sm:inline">Logout</span>
      </Button>
    </header>
  );
};

export default Header;
