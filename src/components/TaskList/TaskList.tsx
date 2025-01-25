import TaskItem, { Task } from './Task';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({}) {
  return <TaskItem />;
}
