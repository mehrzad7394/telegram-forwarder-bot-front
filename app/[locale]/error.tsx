"use client";

// import { useTranslations } from "next-intl";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  // const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <button
        className="text-white underline underline-offset-2"
        onClick={reset}
        type="button"
      >
        reset
      </button>
    </div>
  );
}
