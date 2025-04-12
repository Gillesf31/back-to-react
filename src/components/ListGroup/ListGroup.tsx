import { useState } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import styled from 'styled-components';
import './ListGroup.css';
const List = styled.ul`
  list-style: none;
`;

type ListItemProps = {
  $active: boolean;
};

const ListItem = styled.li<ListItemProps>`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: ${(props) => (props.$active ? 'red' : 'white')};
`;

type Props = {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
};

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [activeItemIndex, setActiveItemIndex] = useState<number | undefined>(
    undefined
  );

  function handleClick(index: number) {
    setActiveItemIndex(index);
  }

  return (
    <>
      <h1>
        {heading}
        {activeItemIndex !== undefined
          ? ',  selected item index is : ' + activeItemIndex
          : null}
      </h1>
      {items.length < 0 ? (
        <p>No item found</p>
      ) : (
        <List>
          {items.map((item, index) => (
            <ListItem
              onClick={() => {
                handleClick(index);
                onSelectItem(item);
              }}
              $active={activeItemIndex === index}
              key={item}
            >
              <FaCalendarCheck
                color={activeItemIndex === index ? 'white' : 'red'}
                size={25}
              />
              {item}
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default ListGroup;
