const Button = ({ label , iconURL}) => {
  return (
    <button className="flex
    justify-center items-center gap-2
    px-7 py-4 border font-montserrat
    text-lg leading-none rounded-full
    text-white bg-coral-red
    border-coral-red">
        
        {label}
        <img 
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full"
        />
    </button>
  )
}

export default Button