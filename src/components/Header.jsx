import React from 'react';
import { User } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full px-4 py-2" style={{ backgroundColor: '#c5c5c5' }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#00695C' }}>
            <img 
              src="/logo.png" 
              alt="Eliteinova Properties Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold leading-none" style={{ fontFamily: 'Pacifico, cursive', color: '#00695C' }}>
              Eliteinova Properties
            </h1>
            <p className="text-xs text-black">No Brokerage</p>
          </div>
        </div>
        <button className="w-9 h-9 bg-white border border-black rounded-full flex items-center justify-center hover:bg-gray-50">
          <User className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  );
};

export default Header;