import React, { FC, useEffect, useMemo, useState } from "react";

type Props = {
  text: string;
  speed?: number;
};

const AnimationLetter: FC<Props> = ({ text, speed = 50 }) => {
  const [index, setIndex] = useState(0);

  const words = useMemo(() => text.split(""), [text]);
  const placeholder = useMemo(() => {
    let newPlaceholder = "";
    let emptySpace = "";

    words.forEach((record) => {
      if (record === " ") {
        emptySpace = record;
      }

      newPlaceholder = words.slice(0, index).join("") + emptySpace;
    });

    return newPlaceholder;
  }, [words, index]);

  useEffect(() => {
    if (index >= words.length) return;

    const timeout = setTimeout(() => setIndex((i) => i + 1), speed);

    return () => {
      clearTimeout(timeout);
    };
  }, [setIndex, index, words, speed]);

  return <span className="text-primary dark:text-white">{placeholder}</span>;
};

export default AnimationLetter;
