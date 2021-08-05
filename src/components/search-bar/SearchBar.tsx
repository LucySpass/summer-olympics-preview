import React, {useEffect, useState} from 'react';
import './search-bar.scss';
import useDebounce from "./hooks/useDebounce";

interface SearchBarPropsInterface {
  fetchData: (term: string) => void;
}

function SearchBar({fetchData}: SearchBarPropsInterface) {
  const [keyword, setKeyword] = useState<string>('');
  const debouncedSearchTerm = useDebounce(keyword, 500);

  useEffect(() => {
      fetchData(debouncedSearchTerm);
    }, [fetchData, debouncedSearchTerm]
  );

  return (
    <div className='search-bar'>
      <div className='search-bar__input'>
        <input className="search-bar__input-input"
               type="text"
               placeholder="Search country by name"
               onChange={event => setKeyword(event.target.value)}/>
        <span className="focus-border"/>
      </div>
    </div>
  );
}

export default SearchBar;
