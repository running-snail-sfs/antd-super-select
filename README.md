## 基于antd Select的大数据渲染的组件SuperSelect,其他api与antd相同


## 🔨 Usage   

```jsx
import SuperSelect from 'antd-super-select';
 const children = [];

 for (let i = 0; i < 500; i++) {
  children.push(
    <Option value={i + "sfs"} key={i}>
      {i + "abccdefg"}
    </Option>
  ); 
 }
 <SuperSelect>{children}</SuperSelect>
```
     