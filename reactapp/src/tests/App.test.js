import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});















INDEX.CSS
.title{
  text-align: center;
  margin: 20px 0;
}

.btn{
  background-color: #ffa16b;
  border: none;
  padding: 5px 10px;
  text-align: center;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #491b00;
}

.main{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.result{
  width: 600px;
  font-size: 20px;
  background-color: #ff6e4ad2;
  border: 1px solid #491b00;
  text-align: center;
  border-radius: 5px;
  margin:100px auto 50px;
}

.start_btn{
  width: 300px;
  font-size: 20px;
  height: 50px;
  background-color: #ffa16b;
  border: 1px solid #491b00;
  text-align: center;
  border-radius: 5px; 
  cursor: pointer;
  margin:50px;
}

.show_btn{
  font-size: 15px;
  height: 30px;
  background-color: #71ff2f;
  border: 1px solid #2e9000;
  text-align: center;
  padding: 0px 15px;
  border-radius: 5px; 
  cursor: pointer;
  margin: 10px;
}

.option{
  background-color: #ffa16b;
  border: none;
  width: 100px;
  padding: 10px 15px;
  text-align: center;
  font-size: 12px;
  margin: 2px 1px;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid #491b00;
}

.options{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 5px;
}

.card{
  width: 600px;
  font-size: 20px;
  background-color: #af1273;
  border: 2px solid #491b00;
  text-align: center;
  border-radius: 5px;
  margin: 10px;
  color:white
}

.question{
  margin: 5px;
}
