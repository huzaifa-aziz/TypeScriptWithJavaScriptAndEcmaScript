var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.addTask = function (task) {
        var newTodo = {
            id: this.todos.length + 1,
            task: task,
            completed: false,
        };
        this.todos.push(newTodo);
        console.log("Task \"".concat(task, "\" added."));
    };
    TodoList.prototype.completeTask = function (id) {
        var todoIndex = this.todos.findIndex(function (todo) { return todo.id === id; });
        if (todoIndex !== -1) {
            this.todos[todoIndex].completed = true;
            console.log("Task with ID ".concat(id, " marked as completed."));
        }
        else {
            console.log("Task with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.listTasks = function () {
        console.log("Todo List:");
        this.todos.forEach(function (todo) {
            console.log("[".concat(todo.completed ? "X" : " ", "] ").concat(todo.task));
        });
    };
    return TodoList;
}());
// Example usage
var todoList = new TodoList();
todoList.addTask("Learn TypeScript");
todoList.addTask("Build a project");
todoList.listTasks();
todoList.completeTask(1);
todoList.listTasks();
