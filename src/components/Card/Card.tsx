interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="flex flex-row shadow-sm rounded-sm card w-3/6">
      {children}
    </div>
  );
}
