import SmileyEmoji from "@/assets/icons/emojis/fluent-emoji--slightly-smiling-face.svg?raw";
import DisappointedEmoji from "@/assets/icons/emojis/fluent-emoji--disappointed-face.svg?raw";
import CryingEmoji from "@/assets/icons/emojis/fluent-emoji--crying-face.svg?raw";
import AngryEmoji from "@/assets/icons/emojis/fluent-emoji--angry-face.svg?raw";
import ExclamationMarkEmoji from "@/assets/icons/emojis/fluent-emoji--double-exclamation-mark.svg?raw";
import QuestionMarkEmoji from "@/assets/icons/emojis/fluent-emoji--red-question-mark.svg?raw";
import CheckMarkEmoji from "@/assets/icons/emojis/fluent-emoji--check-mark-button.svg?raw";
import CrossMarkEmoji from "@/assets/icons/emojis/fluent-emoji--cross-mark.svg?raw";
import HeartEmoji from "@/assets/icons/emojis/fluent-emoji--heart-suit.svg?raw";
import ThumbsUpEmoji from "@/assets/icons/emojis/fluent-emoji--thumbs-up.svg?raw";
import ThumbsDownEmoji from "@/assets/icons/emojis/fluent-emoji--thumbs-down.svg?raw";

export interface CustomSvgImage {
  name: string;
  svgString: string;
}

export const emojis: CustomSvgImage[] = [
  {
    name: "Smiley",
    svgString: SmileyEmoji,
  },
  {
    name: "Disappointed face",
    svgString: DisappointedEmoji,
  },
  {
    name: "Crying face",
    svgString: CryingEmoji,
  },
  {
    name: "Angry face",
    svgString: AngryEmoji,
  },
  {
    name: "Exclamation mark",
    svgString: ExclamationMarkEmoji,
  },
  {
    name: "Question mark",
    svgString: QuestionMarkEmoji,
  },
  {
    name: "Check mark",
    svgString: CheckMarkEmoji,
  },
  {
    name: "Cross mark",
    svgString: CrossMarkEmoji,
  },
  {
    name: "Heart",
    svgString: HeartEmoji,
  },
  {
    name: "Thumbs up",
    svgString: ThumbsUpEmoji,
  },
  {
    name: "Thumbs down",
    svgString: ThumbsDownEmoji,
  },
];
