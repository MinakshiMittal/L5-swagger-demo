import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { angleRight, angleLeft } from "../../utils/icons";

type PaginationProps = {
  prevUrl: string | null;
  nextUrl: string | null;
  setUrl: (url: string) => void;
  currentPage: string;
};

export const Pagination = ({
  prevUrl,
  nextUrl,
  setUrl,
  currentPage,
}: PaginationProps) => {
  return (
    <div className="flex justify-center items-center h-4">
      <FontAwesomeIcon
        className={`${prevUrl ? "cursor-pointer" : "cursor-not-allowed"} text-gray-400 h-6`}
        icon={angleLeft}
        onClick={() => (prevUrl ? setUrl(prevUrl ? prevUrl : "") : {})}
      />
      <p className="text-red-400 mx-4 text-xl font-semibold">{currentPage}</p>
      <FontAwesomeIcon
        className={`${nextUrl ? "cursor-pointer" : "cursor-not-allowed"} text-gray-400 h-6`}
        icon={angleRight}
        onClick={() => (nextUrl ? setUrl(nextUrl ? nextUrl : "") : {})}
      />
    </div>
  );
};
