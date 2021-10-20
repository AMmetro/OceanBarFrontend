import foodData from '../DB/foodData';
import {Row} from 'react-bootstrap';
import ListItem from './ListItem';


function SoupList() {

  return (
    <>
        <Row >
              <ListItem data={foodData[1]} />
         </Row>
    </>
  );
}

export default SoupList;


