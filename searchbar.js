import React , {useState} from 'react'

const Searchbar = () => {
    const [text, setText] = useState("")
    //why do we need these states 
    //because when there is change in variablesreact doent have any idea about that so it doesnt re-render 
  return (
    <div>
        <input
        type='text'
        placeholder='search'
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button>
            search
        </button>

        {text}
    </div>
  )
}

export default Searchbar