(function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  document.getElementById("list").value = tasks.join("\n");
})();

function addTask() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(document.getElementById("task").value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("list").value = tasks.join("\n");
  document.getElementById("task").value = null;
}

function clearTask() {
  localStorage.removeItem("tasks");
  document.getElementById("list").value = "";
}
