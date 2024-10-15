const ContentArea = ({children}) => {
  return (
    <div className="lg:w-[calc(100%-300px)] w-full relative">
      {children}
    </div>
  )
}

export default ContentArea
