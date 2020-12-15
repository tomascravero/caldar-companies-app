import "./header.css";

const Header = () => {
  return (
    <header className="disp-flex just-between">
      <div className="shadow-box cols-3">
        <form action="" id="search" className="disp-flex just-center">
          <button type="submit">
            <i class="fas fa-search"></i>
          </button>
          <input type="text" placeholder="Search..." />
        </form>
      </div>
      <div className="disp-flex just-between cols-3">
        <div id="user" className="disp-flex just-between">
          <i class="fas fa-user-tie"></i>
          <span>Tomas Cravero</span>
        </div>
        <div id="sign-out">
          <i class="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;