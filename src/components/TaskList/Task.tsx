import Checkbox from '../Checkbox/Checkbox';

export type Task = {
  title: string | undefined;
  completed: boolean;
  color: string | undefined;
};

export default function TaskItem({ title = 'DEFAULT TITLE', color }: Task) {
  return (
    <div>
      <Checkbox onClick={() => {}} active={false}>
        {title}
      </Checkbox>
    </div>
  );
}
