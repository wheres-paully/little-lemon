// Nav.js
function Nav() {
    return (
      <nav>
        <Routes> 
        <Route path="/" element={<Homepage/>}></Route>
         <Route path="/about"element={<About/>}></Route>
         <Route path="/menu"element={<Menu/>}></Route>
          <Route path="/BookingForm.js"element={<Reservation/>}></Route>
          <Route path="/orderonline"element={<OrderOnline/>}></Route>
          <Route path="/login"element={<LogIn/>}></Route>
        </Routes>
      </nav>
    );
  }
  export default Nav;