import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  //create function to swicth toggle visibility
  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen);
  }
  return (
    <div className="absolute bottom-5 right-5">
      {isWidgetOpen && <p>Hello World</p>}
      <button
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
        onClick={toggleWidgetVisibility}
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </button>
    </div>
  );
}
