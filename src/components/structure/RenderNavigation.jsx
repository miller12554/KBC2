import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export const RenderRoutes = () => {

        const { user } = AuthData();
        
        return (
             <Routes>
             { nav.map((r, i) => {
                  
                  if (r.isPrivate && user.isAuthenticated) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else if (!r.isPrivate) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else return false
             })}
             
             </Routes>
        )
   }
    
   export const RenderMenu = () => {
   
        const { user, logout } = AuthData()
   
        const MenuItem = ({r}) => {
             return (
                  <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
             )
        }


        const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
        return (
             

             <>
                  
                  <div className="flex justify-between items-center h-14 w-full mx-auto px-4 bg-black text-white">
			<div className="">
				<div className="w-full text-3xl font-bold text-green-500">
					Wanted Today
				</div>
			</div>
			<div className="">
				<ul className="hidden md:flex">
					<li className="p-4">
						<Link className="text-green-500" to="/">
							Home
						</Link>
					</li>
					
				</ul>
			</div>
			<div className="mr-8">
				<ul className="hidden md:flex space-x-5 text-yellow-500 text-xs">
				
                                 <li>
                                 Home</li>
					
						
					
					
				</ul>
			</div>
			<div onClick={handleNav} className="block md:hidden ">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<ul
				className={
					nav
						? "fixed left-0 top-20 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
						: "ease-in-out duration-500 fixed left-[-100%]"
				}
			>
				<li className="p-4">
					<Link to="/">Home</Link>
				</li>
				<li className="p-4">
					{/* <NavLink to="/account">Account</NavLink> */}
				</li>
			</ul>
		</div>
             </>





          //    <div className="menu">
          //         { nav.map((r, i) => {
   
          //              if (!r.isPrivate && r.isMenu) {
          //                   return (
          //                        <MenuItem key={i} r={r}/>
          //                   )
          //              } else if (user.isAuthenticated && r.isMenu) {
          //                   return (
          //                        <MenuItem key={i} r={r}/>
          //                   )
          //              } else return false
          //         } )}
   
          //         { user.isAuthenticated ?
          //         <div className="menuItem"><Link to={'#'} onClick={logout}>Log out</Link></div>
          //         :
          //         <div className="menuItem"><Link to={'login'}>Log in</Link></div> }
          //    </div>
        )
   }