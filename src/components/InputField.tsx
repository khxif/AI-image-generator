export default function InputField({userInputs,setUserInputs,isLoading,handleSubmit}: InputFieldProps) {
  return (
    <form className="w-full flex flex-col space-y-4 justify-center " onSubmit={handleSubmit}>
        <div className="flex space-x-4">
            <input type="text" className="input" 
            placeholder="Enter title..." 
            value={userInputs.title}
            required
            onChange={(e) => setUserInputs({...userInputs,title:e.target.value})}
            />
            <input type="text" className="input"
             placeholder="#AI #CHATGPT"
             value={userInputs.tag}
             required
            onChange={(e) => setUserInputs({...userInputs,tag:e.target.value})}
             />
        </div>
        <input type="text" className="input w-auto" 
        placeholder="Describe the details for your image"
        value={userInputs.description}
        required
        onChange={(e) => setUserInputs({...userInputs,description:e.target.value})}
        />
        <button type="submit" className="button">
          {isLoading? 'Generating...' : 'Generate'}
        </button>
    </form>
  )
}
