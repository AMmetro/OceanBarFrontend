import foodData from '../DB/foodData';
import {Row } from 'react-bootstrap';
import ListItem from './ListItem';

function CatchWeeksList() {



  return (
    <>
        <Row>
          <ListItem data={foodData[3]} />
        </Row>
    </>
  );
}

export default CatchWeeksList;