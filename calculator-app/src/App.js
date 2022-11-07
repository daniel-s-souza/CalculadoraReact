import Input from './componnets/Input';
import Button from './componnets/Button';
import {Container, Content, Row, Columns} from './style'

function App() {
  return (
    <Container >
      <Content>
        <Input />
        <Row>
        <Button label="*"/>
        <Button label="/"/>
        <Button label="C"/>
        <Button label="X"/>
        </Row>
        <Row>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="-"/>
        </Row>
        <Row>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="+"/>
        </Row>
        <Row>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="="/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
