import chalk from "chalk";
import inquirer from "inquirer";
import { type TaskListStrucrture } from "./types.js";

const removeTask = async (info: TaskListStrucrture) => {
  const denial = chalk.green("No, keep it");
  const affirmation = chalk.red("Yes, delete");

  await inquirer
    .prompt([
      {
        name: "task",
        message: "Indicate the id of the task to delete",
        default: "",
      },
      {
        type: "checkbox",
        name: "sequrityQuestion",
        message: "Are you sure?",
        choices: [denial, affirmation],
      },
    ])
    .then((answers) => {
      const { task } = answers;
      const sequrityQuestion = answers.sequrityQuestion[0];

      if (sequrityQuestion === "Yes,delete") {
        info.slice(task, 0);
      }

      console.log(chalk.bgGreen("Operation carried out successfully"));

      console.table(info);
    });
};

export default removeTask;
