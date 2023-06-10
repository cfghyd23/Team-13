import { Col, InputNumber, Row, Slider, Space } from 'antd';
import { useState } from 'react';
const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={10}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={10}
          style={{
            margin: '0 16px',
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
    </div>
  );
};

const App = () => (
  <Space
    style={{
      width: '100%',
    }}
    direction="vertical"
  >
    <IntegerStep />
  </Space>
);
export default App;