"use client";

export default function Error({
  error,
  reset,
}: {
  error: String;
  reset: () => void;
}) {
  // const t = useTranslations('Error');

  return (
    <div>
      <h1>title</h1>
      <button onClick={reset}>retry</button>
    </div>
  );
}
