import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/Bug.svg";
import ideaImageUrl from "../../assets/Idea.svg";
import thoughtImageUrl from "../../assets/Thought.svg";
import { useState } from "react";
const feedbackTypes = {
  BUG: {
    title: "Problema",
    img: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEIA: {
    title: "Ideia",
    img: {
      source: ideaImageUrl,
      alt: "Imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    img: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <CloseButton />
        <span> Deixe seu feedback</span>
      </header>
      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                onClick={() => setFeedbackType(key as feedbackType)}
                className=" bg-zinc-800 py-5 rounded-lg flex-1 w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline"
              >
                <img src={value.img.source} alt={value.img.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>Hello World</p>
      )}

      <footer className="text-xs">
        <span>
          feito por
          <a
            className="underline underline-offset-2 ml-1 mr-1"
            href="https://www.github.com/MatheusPatriota"
          >
            Matheus Patriota
          </a>
          🚀
        </span>
      </footer>
    </div>
  );
}
