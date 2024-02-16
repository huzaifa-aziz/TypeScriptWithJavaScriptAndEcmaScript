interface Todo {
    id: number;
    task: string;
    completed: boolean;
  }
  
  class TodoList {
    private todos: Todo[];
  
    constructor() {
      this.todos = [];
    }
  
    addTask(task: string): void {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        task: task,
        completed: false,
      };
      this.todos.push(newTodo);
      console.log(`Task "${task}" added.`);
    }
  
    completeTask(id: number): void {
      const todoIndex = this.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        this.todos[todoIndex].completed = true;
        console.log(`Task with ID ${id} marked as completed.`);
      } else {
        console.log(`Task with ID ${id} not found.`);
      }
    }
  
    listTasks(): void {
      console.log("Todo List:");
      this.todos.forEach((todo) => {
        console.log(`[${todo.completed ? "X" : " "}] ${todo.task}`);
      });
    }
  }
  
  // Example usage
  const todoList = new TodoList();
  
  todoList.addTask("Learn TypeScript");
  todoList.addTask("Build a project");
  todoList.listTasks();
  todoList.completeTask(1);
  todoList.listTasks();
  