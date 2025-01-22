interface CheckboxProps {
  onClick: Function;
  active: boolean;
}

export default function Checkbox({
  onClick = () => {},
  active,
}: CheckboxProps) {
  return (
    <div className="round">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox flex"
        disabled={active}
        onClick={(e) => onClick(e)}
        style={{ width: '32px', height: '32px', borderRadius: '32px' }}
      />
      <label htmlFor="checkbox"></label>
    </div>
  );
}
