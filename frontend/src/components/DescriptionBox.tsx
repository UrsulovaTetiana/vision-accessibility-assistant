type DescriptionBoxProps = {
  text: string;
};

export default function DescriptionBox({ text }: DescriptionBoxProps) {
  return (
    <section className="description-box">
      <h2>Description</h2>

      <p>
        {text || "No description yet. Click one of the buttons above to start."}
      </p>
    </section>
  );
}
