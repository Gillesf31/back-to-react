interface NavbarProps {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: NavbarProps) => {
  return (
    <div>
      <span>Count : </span>
      <span>{cartItemsCount}</span>
    </div>
  );
};

export default Navbar;
