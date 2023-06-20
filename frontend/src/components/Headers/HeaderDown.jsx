import { useState, useEffect } from "react"

const HeaderDown = () => {
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    async function getCategories() {
      const response = await fetch("https://dummyjson.com/products/categories");  
      const data = await response.json();
      const categoriesSliced = data.slice(0, 10);
      setCategories(categoriesSliced); 
    }

    getCategories(); 
  }, [])
  return (
    <nav >
        <div id="header-down" className="bg-slate-800 0 text-white">
         <ul id="submenu" className="gap-7">
          {categories.map((category, index) => (
            <li key={index} className="mr-4 hover:underline cursor-pointer">
              {category.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      </nav>
  )
}

export default HeaderDown