type ActionButtonProps = {
  title: string;
  onClick: () => void;
};

export default function ActionButton({ title, onClick }: ActionButtonProps) {
  return (
    <button className="action-button" onClick={onClick}>
      {title}
    </button>
  );
}
