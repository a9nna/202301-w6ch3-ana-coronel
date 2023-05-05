import chalk from "chalk";
import inquirer from "inquirer";
import { type TaskListStrucrture, type TaskStructure } from "./types.js";

const addData = async (info: TaskListStrucrture) => {
  const lowUrgency = chalk.green("low");
  const mediumUrgency = chalk.yellow("medium");
  const highUrgency = chalk.red("high");

  await inquirer
    .prompt([
      {
        name: "task",
        message: "Add the description of the task",
        default: "",
      },
      {
        type: "checkbox",
        name: "urgencyLevel",
        message: "Select the urgency with which the task must be completed",
        choices: [lowUrgency, mediumUrgency, highUrgency],
      },
    ])
    .then((answers) => {
      const { task } = answers;
      let urgencyLevel = answers.urgencyLevel[0];

      switch (urgencyLevel) {
        case lowUrgency:
          urgencyLevel = "🟢 low 🟢";
          break;
        case mediumUrgency:
          urgencyLevel = "🟡 medium 🟡";
          break;
        case highUrgency:
          urgencyLevel = "🔴 high 🔴";
          break;
        default:
          console.log(chalk.bgRed("You don't chose any urgency"));
          break;
      }

      const taskToDo: TaskStructure = {
        status: "⬜",
        task,
        urgencyLevel,
      };

      info.push(taskToDo);

      console.table(info);
    });
};

export default addData;
