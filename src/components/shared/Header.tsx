interface IHeaderProps {
  text: string;
}

const Header: React.FC<IHeaderProps> = ({ text }: IHeaderProps) => {
  return <h3 className="text-center mt-10 text-4xl">{text}</h3>;
};

export default Header;
