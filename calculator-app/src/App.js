import Input from './componnets/Input';
import Button from './componnets/Button';
import {Container, Content, Row} from './style'
import { useState } from 'react';

function App() {

  const [currentNumber, setCurrentNumber] = useState('')
  const [firstNumber, setFirstNumber] = useState('')
  const [operation, setOperation] = useState('')
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}`)
  }

  const handleClear = () => {
    setCurrentNumber('');
    setFirstNumber('');
    setOperation('');
  }

  const handleSum = () => {
    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('')
    }
  }

  const handleMultiplication = () => {
    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('')
    }
  }

  const handleDivision = () => {
    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('')
    }
  }



  const handleRemove = () => {
    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-')
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setFirstNumber('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '' && operation !== '' && currentNumber !== '') {
      switch (operation) {
        case '+':
            handleSum();
            break
         case '-':
          handleRemove();   
          break;
          case '*':
            handleMultiplication();   
            break;
            case '/':
              handleDivision();   
              break;
        default:
          break;
      }
    } 
  }



  return (
    <Container >
      <Content>
        <Input value = {currentNumber}/>
        <Row>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="C" onClick={handleClear}/>
        <Button label="/" onClick={handleDivision}/>
        <Button label="x" onClick={handleMultiplication}/>
        </Row>
        <Row>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="-" onClick={handleRemove}/>
        </Row>
        <Row>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="+" onClick={handleSum}/>
        </Row>
        <Row>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
