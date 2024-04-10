import { Colors } from "../styles/theme/Colors";

// YOUR TIMERS SCREEN BUTTONS:
export const presetButtons = [
    { name: "add", icon: "add-alarm" },
    { name: "delete", icon: "delete" },
  ];

// ADD TIMER MODAL BUTTONS:
export const inputButtons = [
  {
    name: "save",
    icon: "content-save-outline",
    bgColor: Colors.LIGHT,
    iconColor: Colors.DARK,
  },
  // {
  //   name: "edit",
  //   icon: "clock-edit-outline",
  //   bgColor: Colors.GREEN,
  //   iconColor: Colors.DARK,
  // },
  {
    name: "addToActiveTimer",
    icon: "play",
    bgColor: Colors.PURPLE,
    iconColor: Colors.LIGHT,
  },
  {
    name: "undo",
    icon: "undo-variant",
    bgColor: Colors.RED,
    iconColor: Colors.LIGHT,
  },
];

// ACTIVE TIMER && ACTIMER TIMER MODAL BUTTON CONTROLS:
export const generateButtonControls = (isRunning) => {
  return [!isRunning ? { name: "play" } : { name: "pause" }, { name: "stop" }];
};
