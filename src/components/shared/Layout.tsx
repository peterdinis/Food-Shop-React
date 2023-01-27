interface ILayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({children}: ILayoutProps) => {
    return (
        <>
        {children}
        </>
    )
}


export default Layout;