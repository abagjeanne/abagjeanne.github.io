const LayoutContainer = ({children}) => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
      {children}
    </div>
  )
}

export default LayoutContainer
