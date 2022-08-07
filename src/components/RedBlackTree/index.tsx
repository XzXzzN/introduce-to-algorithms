/* eslint-disable new-cap */
import React, {useState, useCallback, useEffect} from 'react';
import './index.scss';
const RedBlackTree: React.FC<{}> = () => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');
  const AddRandomNode = () => {};
  const AddSingleNode = () => {
    const oneNums = inputValue.match(/[0-9]+\,?/);
    setInputValue(inputValue.replace(/[0-9]+\,?/, ''));
    const num = (oneNums + '').match(/[0-9]+/);
    if (num) {
      AddNumber(parseInt(num[0]));
    }
  };
  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);
  const AddAllNode = () => {
    while (true) {
      AddSingleNode();
      if (!/[0-9]+/.test(value)) {
        break;
      }
    }
  };
  const getAllNumber = useCallback((value) => {
    setInputValue(value.target.value);
  }, []);
  const AddNumber = (number: Number) => {
    console.log(number);
    // tree.Insert(number);
    // RenewView();
  };
  return (
    <div className='red-black-tree' id='RBT'>
      <div className='describe'>
        <ul>
          <li>1. 空格分割数字</li>
          <li>2. 双击节点删除</li>
        </ul>
      </div>
      <div className='add-number'>
        <input
          type='text'
          placeholder='空格分割数字'
          className='number'
          value={inputValue}
          onChange={
            getAllNumber}
        />
      </div>
      <div className='add-node'>
        <input type='button' value='增加单个节点' onClick={AddSingleNode} />
        <input type='button' value='增加所有节点' onClick={AddAllNode} />
        <input
          className='add-random-node'
          type='button'
          value='随机增加一个节点'
          onClick={AddRandomNode}
        />
      </div>
      <div id='currentView'></div>
      <div id='stepView'></div>
    </div>
  );
};

export default RedBlackTree;
