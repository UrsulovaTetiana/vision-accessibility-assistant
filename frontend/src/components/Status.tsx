type StatusProps = {
  status: string;
};

export default function Status({ status }: StatusProps) {
  return (
    <div className="status">
      <span>Status:</span>
      <strong>{status}</strong>
    </div>
  );
}
