import { SearchIcon } from 'lucide-react';
import { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { randomstores } from '../States/Atom';

interface Option {
  value: string;
  label: string;
}

interface SearchSelectProps {
  options?: Option[];
  placeholder?: string;
  onChange?: (option: Option) => void;
  className?: string;
  defaultValue?: Option;
  onSearch?: (term: string) => void;
}

export const SearchBar: React.FC<SearchSelectProps> = ({
  options = [
    { value: '1', label: 'Assam' },
    { value: '2', label: 'Arunchal Pradesh' },
    { value: '3', label: 'Bihar' },
    { value: '4', label: 'Chandigarh' },
    { value: '5', label: 'Chattisgarh' },
    { value: '5', label: 'Delhi' },
    { value: '5', label: 'Goa' },
    { value: '5', label: 'Haryana' },
    { value: '5', label: 'Himachal Pradesh' },
    { value: '5', label: 'Jammu & Kashmir' },
  ],
  placeholder = 'Search...',
  onChange = (option: Option) => console.log('Selected:', option),
  onSearch = (term: string) => console.log('Searching:', term),
  className = '',
  defaultValue
}) => {
  const stores = [
    {
      id: 1,
      name: "Kongkon Store",
      address: "Komolata Pati, New York, USA",
      src: "/instrumentstorejpg.jpg",
    },
    {
      id: 2,
      name: "Harmony Music Center",
      address: "Downtown Street, Los Angeles, USA",
      src: "/instrument.jpg",
    },
    {
      id: 3,
      name: "Melody Shop",
      address: "Park Avenue, Chicago, USA",
      src: "/streetinstrument.jpg",
    },
    {
      id: 4,
      name: "Symphony Instruments",
      address: "Broadway Lane, Houston, USA",
      src: "/brook.jpg",
    },
    {
      id: 5,
      name: "Orchestra Hub",
      address: "Bay Area, San Francisco, USA",
      src: "/stwewarts.jpg",
    },
  ];
  const [store ,setstore] = useRecoilState(randomstores);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(defaultValue?.label || '');
  const [selectedOption, setSelectedOption] = useState<Option | null>(defaultValue || null);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getRandomStores = () => {
    const randomNumber = Math.floor(Math.random() * stores.length) + 1;
    const shuffledStores = stores.sort(() => 0.5 - Math.random());
    setstore(shuffledStores.slice(0, randomNumber)); // Update the Recoil state
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: Option): void => {
    setSelectedOption(option);
    setSearchTerm(option.label);
    setIsOpen(false);
    onChange(option);
  };

  const handleSearch = (): void => {
    onSearch(searchTerm);
    setIsOpen(false);
    if(searchTerm!=''){ getRandomStores();}
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (isOpen && filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex]);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${className}`}
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls="search-select-dropdown"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close dropdown' : 'Open dropdown'}
          >
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        
        <button 
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>

      {isOpen && (
        <div 
          id="search-select-dropdown"
          role="listbox"
          className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border max-h-60 overflow-auto"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={option.value}
                role="option"
                aria-selected={selectedOption?.value === option.value}
                className={`px-4 py-2 cursor-pointer transition-colors duration-150
                  ${index === highlightedIndex ? 'bg-blue-50' : 'hover:bg-gray-50'}
                  ${index !== filteredOptions.length - 1 ? 'border-b' : ''}`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No options found</div>
          )}
        </div>
      )}
    </div>
  );
};