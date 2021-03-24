import '../App.css';

import{ PageHeader, Input} from 'antd';


const {Search} = Input;

function Home() {
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
                title="Welcome to my Favirote Movies"
                subTitle="Welcome to my favirote movies"/>
            </div>  
          </div>
        </>  
      );
}


export default Home;