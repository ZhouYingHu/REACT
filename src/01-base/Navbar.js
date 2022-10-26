import '../css/01.css';
const NavBar = (props) => {
  return (
    <div className="flex ye">
      <button onClick={() => {
        props.changeTab(0);
      }}
      >goBack</button>
      <span>卖座中心</span>
      <button onClick={() => {
        props.changeTab(2);
      }}
      >center</button>
    </div>
  );
};
export default NavBar;