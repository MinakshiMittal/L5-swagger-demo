import { useEffect, useState } from "react";

type SearchBoxProps = {
  users: any;
};

export const SearchBox = ({ users }: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([...users]);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  console.log(searchResult, "search");

  useEffect(() => {
    if (searchTerm !== "") {
      const results = users.filter(
        (user: any) =>
          user.name.toLowerCase().includes(searchTerm) ||
          user.name === searchTerm
      );
      setSearchResult(results);
      setSuggestionsVisible(true);
    }
  }, [searchTerm]);

  const handleAutoComplete = (name: string) => {
    setSearchTerm(name);
    setSuggestionsVisible(false);
  };

  return (
    <div className="m-2">
      <input
        className="p-2 border rounded-lg w-full"
        placeholder="Enter user name.."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {suggestionsVisible === true && (
        <div>
          {searchResult.map((result: any) => {
            return (
              <div
                className="cursor-pointer"
                onClick={() => handleAutoComplete(result.name)}
                key={result.id}
              >
                <p>{result.name}</p>
                <p>{result.email}</p>
              </div>
            );
          })}
        </div>
      )}
      <div>
        {searchResult.map((user: any) => {
          console.log(user, "u");
          return (
            <div className="p-2 border-2 border-red-100" key={user.id}>
              <p className="text-lg font-bold">{user.name}</p>
              <p className="text-sm font-medium">{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
