import React, {useState} from 'react';
import { ReactComponent as FilterIcon } from '../../assets/img/filter.svg';
import styles from './Filter.module.css';

export const Filter = () => {
  const [expandedFilter, setExpandedFilter] = useState(false);


  return (<>
    <div className={`${styles.box} ${expandedFilter && styles.expanded}`}
    onClick={() => setExpandedFilter(!expandedFilter)}>
      <FilterIcon />
    </div>
    {expandedFilter && <div className={styles.filters}>
      <ul>
        <li>Preço</li>
        <li>Cor</li>
        <li>Categoria</li>       
        </ul> 
      </div>}
    </>
  );
};
