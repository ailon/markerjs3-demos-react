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
import { MarkerTypeItem } from "@/models/toolbar";
import { CustomImageMarker } from "@markerjs/markerjs3";

export const emojis: MarkerTypeItem[] = [
  {
    name: "Smiley",
    markerType: CustomImageMarker,
    icon: SmileyEmoji,
  },
  {
    name: "Disappointed face",
    markerType: CustomImageMarker,
    icon: DisappointedEmoji,
  },
  {
    name: "Crying face",
    markerType: CustomImageMarker,
    icon: CryingEmoji,
  },
  {
    name: "Angry face",
    markerType: CustomImageMarker,
    icon: AngryEmoji,
  },
  {
    name: "Exclamation mark",
    markerType: CustomImageMarker,
    icon: ExclamationMarkEmoji,
  },
  {
    name: "Question mark",
    markerType: CustomImageMarker,
    icon: QuestionMarkEmoji,
  },
  {
    name: "Check mark",
    markerType: CustomImageMarker,
    icon: CheckMarkEmoji,
  },
  {
    name: "Cross mark",
    markerType: CustomImageMarker,
    icon: CrossMarkEmoji,
  },
  {
    name: "Heart",
    markerType: CustomImageMarker,
    icon: HeartEmoji,
  },
  {
    name: "Thumbs up",
    markerType: CustomImageMarker,
    icon: ThumbsUpEmoji,
  },
  {
    name: "Thumbs down",
    markerType: CustomImageMarker,
    icon: ThumbsDownEmoji,
  },
];
