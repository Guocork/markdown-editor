import './ShowBar.css'


const ShowBar = () =>  {
  
    return (
        <div className='showbar'>
            <div className='icon'>
                <img src="./icon.png" alt="ospp" />
                <span>申请书编辑器</span>
            </div>
            <div className='section'>开始编写</div>
            <div className='section'>导入模板</div>
        </div>
    )
  }
  
  export default ShowBar