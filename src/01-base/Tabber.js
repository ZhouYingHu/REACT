import '../css/01.css'
const TabBar = (props) => {
    return <div>
        <div className='flex position-b'>
            {
                props.list.map((item, index) =>
                    <div onClick={() => {
                        props.changeTab(index)
                    }} className={index == props.count ? 'red' : ''} key={item.id}> {item.name}</div>
                )
            }</div>

    </div >

}
export default TabBar