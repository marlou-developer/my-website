import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function Select({
  label = 'Select an option',
  options = [],
  value,
  onChange,
}) {
  const [selected, setSelected] = useState(value || options[0] || null)

  const handleChange = (val) => {
    setSelected(val)
    if (onChange) onChange(val)
  }

  return (
    <Listbox value={selected} onChange={handleChange}>
      <Label className="block text-sm/6 font-medium text-gray-900 dark:text-white">{label}</Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full border cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:focus-visible:outline-indigo-500">
          <span className="col-start-1 row-start-1 truncate pr-6">{selected?.name}</span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
          />
        </ListboxButton>

        <ListboxOptions
          className="absolute z-10 mt-1 max-h-60 w-full border overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 sm:text-sm dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pr-9 pl-3 ${
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900 dark:text-white'
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                    {option.name}
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 dark:text-indigo-400">
                      <CheckIcon aria-hidden="true" className="size-5" />
                    </span>
                  )}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
