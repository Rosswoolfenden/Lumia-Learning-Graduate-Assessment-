import '../App.css';

import{ PageHeader, Input} from 'antd';


const {Search} = Input;

function AddMovies() {
    return (
        <>
          <div className="site-layout-content">
            <div style={{ padding: '2% 20%' }}>
              <Search placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={null}/>
              <PageHeader className="site-page-header"
                title="Add to my Favirote Movies"
                subTitle="Welcome to my favirote movies"/>
            </div>  
          </div>
        </>  
      );
}


export default AddMovies;