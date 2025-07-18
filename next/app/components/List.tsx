// List/List.test.js
import Heading from "@/components/Heading";

interface ItemsInterface {
  items: Item[]
  title: string;
}

interface Item {
   index: number;
   name: string;
}

interface ListItemInterface {
  index?: number;
  item: {
    name: string;
  }
}

function ListItem({index, item}: ListItemInterface) {
  return <li key={index} className="dark:text-white">{item.name}</li>;
}

const List: React.FC<ItemsInterface> = ({ items, title  }) => {
  return (
    <>
      <Heading Tag="h3" title={title} />
      <ul className="list-disc mb-4 mt-4 pl-6" role="list">
        {items && items.map((item, index) => <ListItem key={index} item={item} />)}
      </ul>
    </>
  );
};

List.displayName = 'List';
export default List;