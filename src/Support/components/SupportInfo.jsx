
const SupportInfo = ({ icon: Icon, title, text }) => {
    return (
        <div className="bg-white px-5 pb-5 pt-2 rounded-2xl  " >
            <Icon size={24} className="text-primary" />
            <h1 className="mt-2 text-2xl font-semibold">{title}</h1>
            <p className="mt-2 text-[#535D66] text-xs max-w-[310px]">{text}</p>
        </div>
    )
}

export default SupportInfo
