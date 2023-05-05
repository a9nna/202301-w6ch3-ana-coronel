import addTask from "./addTask.js";
import inquirer from "inquirer";
import removeTask from "./removeTask.js";
import { type TaskListStrucrture } from "./types.js";
import chalk from "chalk";

export const list: TaskListStrucrture = [
  {
    status: "✅",
    task: "Do laundry",
    urgencyLevel: "🟡 medium 🟡",
  },
  {
    status: "⬜",
    task: "Make lunch",
    urgencyLevel: "🔴 high 🔴",
  },
  {
    status: "✅",
    task: "Buy oil",
    urgencyLevel: "🔴 high 🔴",
  },
];

await inquirer
  .prompt([
    {
      type: "expand",
      name: "typeOfAction",
      message: "What do you want to do?",
      choices: [
        {
          key: "a",
          value: "Add a task",
        },
        {
          key: "b",
          value: "Remove a task",
        },
      ],
    },
  ])
  .then(async (answer) => {
    switch (answer.typeOfAction) {
      case "Add a task":
        await addTask(list);
        break;
      case "Remove a task":
        await removeTask(list);
        break;
      default:
        console.log(chalk.bgRed("You don't chose any question"));
        break;
    }
  });
