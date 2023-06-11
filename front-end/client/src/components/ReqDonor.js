import { Button, Space } from 'antd';

const App = () => (
  <Space direction="vertical">
    <Space>
      <Button type="link" danger>
        create request
      </Button>
      <Button type="link" danger disabled>
        CAnnot create request(disabled)
      </Button>
    </Space>
  </Space>
);
export default App;