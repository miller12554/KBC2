   <div className="flex justify-between items-center h-14 w-full mx-auto px-4 bg-black text-white">
			<div className="">
				<div className="w-full text-3xl font-bold text-green-500">
					Wanted Today
				</div>
			</div>
			<div className="">
				<ul className="hidden md:flex">
					
					
						
					
					
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
        



        <div className="menu">
			{nav.map((r, i) => {
				if (!r.isPrivate && r.isMenu) {
					return <MenuItem key={i} r={r} />;
				} else if (user.isAuthenticated && r.isMenu) {
					return <MenuItem key={i} r={r} />;
				} else return false;
			})}

			{user.isAuthenticated ? (
				<div className="menuItem">
					<Link to={"#"} onClick={logout}>
						Log out
					</Link>
				</div>
			) : (
				<div className="menuItem">
					<Link to={"login"}>Log in</Link>
				</div>
			)}
		</div>

