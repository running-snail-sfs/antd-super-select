import React from 'react';
import {Select} from 'antd'
import ReactDOM from 'react-dom';
import SuperSelect from './components/index';
const Option = Select.Option;
const children = [];

for (let i = 0; i < 100; i++) {
  children.push(
    <Option value={i + "aab"} key={i}>
      {i + "abccdefg"}
    </Option>
  );
}
const App = () => {
 const onChange = v => {
    console.log(v, "onChange");
  };
  const onSearch = v => console.log(v);
  return (
    <div style={{ width: '300px',marginTop:200,marginLeft:600 }}>
      <SuperSelect
        showSearch
        allowClear
        dropdownClassName="test-drop"
        onChange={onChange}
        autoClearSearchValue
        onSearch={onSearch}
        style={{ width: '300px' }}
        notFoundContent={<div>nonono</div>}
        // optionHeight={60}
      >
        {children}
      </SuperSelect>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
