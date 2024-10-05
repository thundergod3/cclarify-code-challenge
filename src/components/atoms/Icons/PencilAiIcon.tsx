import { FC } from "react";

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const PencilAiIcon: FC<Props> = (props) => {
  const { color = "white", width = 20, height = 20 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.9653 4.77666C18.1588 4.97012 18.3123 5.19981 18.417 5.45261C18.5217 5.70541 18.5756 5.97636 18.5756 6.24999C18.5756 6.52363 18.5217 6.79458 18.417 7.04738C18.3123 7.30017 18.1588 7.52986 17.9653 7.72333L8.88526 16.8033C8.77927 16.9094 8.65507 16.9954 8.51859 17.0575L5.34859 18.4983C4.64693 18.8175 3.92526 18.095 4.24443 17.3933L5.68609 14.2233C5.74789 14.0869 5.8337 13.9627 5.93943 13.8567L15.0194 4.77666C15.4101 4.38609 15.9399 4.16669 16.4923 4.16669C17.0448 4.16669 17.5746 4.38609 17.9653 4.77666Z"
        fill={color}
      />
      <path
        d="M5.83334 4.58244C5.83273 4.6816 5.86283 4.77852 5.91951 4.85986C5.97619 4.94119 6.05666 5.00295 6.14985 5.03663L7.71875 5.61424L8.29588 7.18323C8.33006 7.27615 8.39189 7.35635 8.47304 7.413C8.55419 7.46965 8.65075 7.50002 8.74969 7.50002C8.84863 7.50002 8.94519 7.46965 9.02634 7.413C9.10749 7.35635 9.16932 7.27615 9.2035 7.18323L9.78215 5.61607L11.3501 5.03845C11.443 5.00425 11.5231 4.94236 11.5797 4.86114C11.6363 4.77993 11.6667 4.68329 11.6667 4.58427C11.6667 4.48524 11.6363 4.3886 11.5797 4.30739C11.5231 4.22617 11.443 4.16428 11.3501 4.13008L9.78124 3.55246L9.20411 1.98348C9.16993 1.89056 9.1081 1.81036 9.02695 1.75371C8.9458 1.69706 8.84924 1.66669 8.7503 1.66669C8.65136 1.66669 8.5548 1.69706 8.47365 1.75371C8.3925 1.81036 8.33067 1.89056 8.29649 1.98348L7.71935 3.55368L6.15168 4.1313C6.05863 4.1645 5.97811 4.22566 5.92113 4.30642C5.86415 4.38718 5.83349 4.48358 5.83334 4.58244Z"
        fill={color}
      />
      <path
        d="M2.50001 9.9995C2.49965 10.0562 2.51686 10.1115 2.54924 10.158C2.58163 10.2045 2.62762 10.2398 2.68087 10.259L3.57738 10.5891L3.90717 11.4857C3.9267 11.5388 3.96203 11.5846 4.00841 11.617C4.05478 11.6493 4.10995 11.6667 4.16649 11.6667C4.22303 11.6667 4.2782 11.6493 4.32457 11.617C4.37095 11.5846 4.40628 11.5388 4.42581 11.4857L4.75647 10.5901L5.65246 10.2601C5.70551 10.2405 5.7513 10.2052 5.78365 10.1588C5.81599 10.1123 5.83333 10.0571 5.83333 10.0005C5.83333 9.94396 5.81599 9.88874 5.78365 9.84233C5.7513 9.79592 5.70551 9.76055 5.65246 9.74101L4.75595 9.41094L4.42616 8.51438C4.40663 8.46128 4.37129 8.41545 4.32492 8.38308C4.27855 8.35071 4.22337 8.33335 4.16684 8.33335C4.1103 8.33335 4.05512 8.35071 4.00875 8.38308C3.96238 8.41545 3.92705 8.46128 3.90752 8.51438L3.57773 9.41164L2.68191 9.7417C2.62874 9.76068 2.58273 9.79563 2.55017 9.84177C2.51761 9.88792 2.50009 9.94301 2.50001 9.9995Z"
        fill={color}
      />
    </svg>
  );
};

export default PencilAiIcon;
