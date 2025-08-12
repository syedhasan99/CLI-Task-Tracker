const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ silent: true });
const Task = require("./models/Task");

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const [, , command, ...arg] = process.argv;

  switch (command) {
    case "add":
      await Task.create({ description: arg.join(" ") });
      console.log("Task added successfully.");
      break;
    case "update":
      await Task.findByIdAndUpdate(arg[0], {
        description: arg.slice(1).join(" "),
      });
      console.log("Task updated successfully.");
      break;
    case "delete":
      await Task.findByIdAndDelete(arg[0]);
      console.log("Task deleted successfully.");
      break;
    case "mark-done":
      await Task.findByIdAndUpdate(arg[0], { status: "done" });
      console.log("Task marked as done.");
      break;
    case "mark-in-progress":
      await Task.findByIdAndUpdate(arg[0], { status: "in-progress" });
      console.log("Task marked as in-progress.");
      break;
    case "list":
      const filter = arg[0] ? { status: arg[0] } : {};
      const list = await Task.find(filter).sort({ createdAt: -1 });
      console.table(
        list.map((t) => ({
          id: t.id,
          description: t.description,
          status: t.status,
        }))
      );
      break;
    default:
      console.log("Unknown command.");
  }
  mongoose.connection.close();
})();
