import { ArrowLeft, Camera } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}
export function FeedbackContentStep(props: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[props.feedbackType];
  const [screenshot, setScreenshot] = useState<string |null>(null)
  return (
    <>
      <header>
        <button
          type="button"
          onClick={props.onFeedbackRestartRequested}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="flex text-xl leading-6 items-center gap-2">
          {" "}
          <img
            src={feedbackTypeInfo.img.source}
            alt={feedbackTypeInfo.img.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-600 bg-transparent border-2 rounded-md p-2 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin "
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot} />
          <button className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm  hover:bg-brand-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors">
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
