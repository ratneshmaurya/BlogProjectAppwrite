import React, {useId} from 'react' //for creating unique ID, becoz this input component can used any times in parent

// forward reference takes a function or a call back. Now this render function takes 2 things- props and ref
// here "ref" parameter must also be passed in the function which is used in forward reference
// this "ref" used for taking refernece attachment from the form or submit from other component(parent) and helps 
// in sending state from this input component to parent component where it is used

// forward ref can also be used as- create a simple function with props and ref, 
// and at last in export line - export default forwardRef(functionName)

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>

            {/* conditional rendering, using the label when we pass any type of label as a props */}
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props} //any remaining property(like placeholder:"text" etc)
            id={id} // using same id as in used in label tag, so that on touching label here this input gets highlighted also
            />
        </div>
    )
})

export default Input

