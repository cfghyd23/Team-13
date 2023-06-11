import { Card, Space } from 'antd';

const App = () => (
  <div className="container">
  <Space direction="vertical" size={16}>
    <Card
      title="Blood Bridge Patient Details"
      extra={<a href="#">need to discuss with team</a>}
      style={{
        width: 600,
      }}
    >
      <p>Patient name</p>
      <p>bridge number</p>
      <p>something else to be put here :|</p>
    </Card>
  </Space>
  </div>
);
export default App;