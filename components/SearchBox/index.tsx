import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { close } from "../../utils/icons";
import { useEffect, useState } from "react";
import { User } from "No/utils/types";

type SearchBoxProps = {
  users: User[];
  setSearchResult: (searchResult: User[]) => void;
  searchResult: User[];
};

export const SearchBox = ({
  users,
  setSearchResult,
  searchResult,
}: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState(users);

  useEffect(() => {
    const results = users.filter(
      (user: User) =>
        user.name.toLowerCase().includes(searchTerm) || user.name === searchTerm
    );
    setSuggestionsList(results);
  }, [searchTerm]);

  const handleAutoComplete = (name: string) => {
    setSearchTerm(name);
    setSuggestionsVisible(false);
  };

  const handleClear = () => {
    setSearchResult(users);
    setSearchTerm("");
  };

  const handleSearch = (name: string) => {
    const results = searchResult.filter(
      (user: User) =>
        user.name.toLowerCase().includes(searchTerm) || user.name === name
    );
    setSearchTerm(name);
    setSearchResult(results);
    setSuggestionsVisible(false);
  };

  return (
    <div className="m-2">
      <div className="flex justify-center items-center w-full">
        <input
          className="p-2 border rounded-lg w-full"
          placeholder="Enter user name.."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            setSuggestionsVisible(true);
          }}
        />
        <FontAwesomeIcon
          className="absolute w-4 h-4 right-28 cursor-pointer font-bold text-lg"
          icon={close}
          onClick={handleClear}
        />
        <button
          className="px-4 py-2 bg-gray-200 ml-2 rounded-lg text-gray-600 font-semibold"
          onClick={() => handleSearch(searchTerm)}
        >
          Search
        </button>
      </div>
      {suggestionsVisible === true ? (
        suggestionsList.length > 0 ? (
          <div className="max-h-40 overflow-y-scroll absolute bg-white w-full">
            {suggestionsList.map((result: User) => {
              return (
                <div
                  className="cursor-pointer flex border-b p-2"
                  onClick={() => handleAutoComplete(result.name)}
                  key={result.id}
                >
                  <p className="text-gray-600 mr-2">{result.name}</p>
                  <p className="text-gray-400">{result.email}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="max-h-40 overflow-y-scroll absolute bg-white w-full"
            onBlur={() => setSuggestionsVisible(false)}
          >
            <p className="text-gray-400 text-center font-semibold p-4">
              No suggestions
            </p>
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
