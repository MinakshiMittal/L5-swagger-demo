import { useEffect, useState } from "react";

type SearchBoxProps = {
  users: any;
  setSearchResult: any;
  searchResult: any;
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
      (user: any) =>
        user.name.toLowerCase().includes(searchTerm) || user.name === searchTerm
    );
    setSuggestionsList(results);
  }, [searchTerm]);

  const handleAutoComplete = (name: string) => {
    setSearchTerm(name);
    setSuggestionsVisible(false);
    handleSearch();
  };

  const handleSearch = () => {
    const results = users.filter(
      (user: any) =>
        user.name.toLowerCase().includes(searchTerm) || user.name === searchTerm
    );
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
        <button
          className="px-4 py-2 bg-gray-200 ml-2 rounded-lg text-gray-600 font-semibold"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
      {suggestionsVisible === true && (
        <div className="h-40 overflow-y-scroll absolute bg-white w-full">
          {searchResult.map((result: any) => {
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
      )}
    </div>
  );
};
