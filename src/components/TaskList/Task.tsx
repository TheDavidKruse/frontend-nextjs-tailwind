interface TaskProps {
  title: string | undefined;
  completed: boolean;
  color: string | undefined;
}

export default function Task({ title, color }: TaskProps) {}
