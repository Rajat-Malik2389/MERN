import React, {useState} from 'react'
import Counter from './Counter'
import ProductCard from './ProductCard';

const App = () => {

  let productsData = [
  {
    id: 1,
    title: "Web Development",
    description: "Build modern and responsive websites.",
    image: "https://picsum.photos/seed/1/400/250",
    category: "Development",
    price: 499
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Create beautiful and user-friendly interfaces.",
    image: "https://picsum.photos/seed/2/400/250",
    category: "Design",
    price: 599
  },
  {
    id: 3,
    title: "React Development",
    description: "Build interactive frontend applications.",
    image: "https://picsum.photos/seed/3/400/250",
    category: "Development",
    price: 799
  },
  {
    id: 4,
    title: "Node.js Development",
    description: "Create scalable backend applications.",
    image: "https://picsum.photos/seed/4/400/250",
    category: "Backend",
    price: 899
  },
  {
    id: 5,
    title: "MongoDB Database",
    description: "Manage application data efficiently.",
    image: "https://picsum.photos/seed/5/400/250",
    category: "Database",
    price: 399
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Grow your business with digital marketing.",
    image: "https://picsum.photos/seed/6/400/250",
    category: "Marketing",
    price: 699
  },
  {
    id: 7,
    title: "SEO Optimization",
    description: "Improve website rankings on search engines.",
    image: "https://picsum.photos/seed/7/400/250",
    category: "Marketing",
    price: 499
  },
  {
    id: 8,
    title: "Graphic Design",
    description: "Design attractive graphics and creatives.",
    image: "https://picsum.photos/seed/8/400/250",
    category: "Design",
    price: 299
  },
  {
    id: 9,
    title: "App Development",
    description: "Develop powerful mobile applications.",
    image: "https://picsum.photos/seed/9/400/250",
    category: "Development",
    price: 1299
  },
  {
    id: 10,
    title: "Cloud Computing",
    description: "Deploy applications using cloud platforms.",
    image: "https://picsum.photos/seed/10/400/250",
    category: "Cloud",
    price: 999
  },
  {
    id: 11,
    title: "Python Programming",
    description: "Learn Python programming from basics.",
    image: "https://picsum.photos/seed/11/400/250",
    category: "Programming",
    price: 599
  },
  {
    id: 12,
    title: "JavaScript Mastery",
    description: "Master modern JavaScript concepts.",
    image: "https://picsum.photos/seed/12/400/250",
    category: "Programming",
    price: 499
  },
  {
    id: 13,
    title: "WordPress Development",
    description: "Create professional WordPress websites.",
    image: "https://picsum.photos/seed/13/400/250",
    category: "Development",
    price: 399
  },
  {
    id: 14,
    title: "E-commerce Website",
    description: "Build a complete online shopping platform.",
    image: "https://picsum.photos/seed/14/400/250",
    category: "Development",
    price: 1499
  },
  {
    id: 15,
    title: "Cyber Security",
    description: "Understand modern cybersecurity practices.",
    image: "https://picsum.photos/seed/15/400/250",
    category: "Security",
    price: 899
  },
  {
    id: 16,
    title: "Data Analytics",
    description: "Analyze data and generate useful insights.",
    image: "https://picsum.photos/seed/16/400/250",
    category: "Analytics",
    price: 799
  },
  {
    id: 17,
    title: "Artificial Intelligence",
    description: "Explore AI and machine learning concepts.",
    image: "https://picsum.photos/seed/17/400/250",
    category: "AI",
    price: 1199
  },
  {
    id: 18,
    title: "Video Editing",
    description: "Create professional videos and animations.",
    image: "https://picsum.photos/seed/18/400/250",
    category: "Creative",
    price: 499
  },
  {
    id: 19,
    title: "API Development",
    description: "Build secure REST APIs for applications.",
    image: "https://picsum.photos/seed/19/400/250",
    category: "Backend",
    price: 699
  },
  {
    id: 20,
    title: "Full Stack Development",
    description: "Learn complete frontend and backend development.",
    image: "https://picsum.photos/seed/20/400/250",
    category: "Development",
    price: 1999
  }
];

const [products, setProducts] = useState(productsData);

const deleteProduct = (id) => {
  setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
}


  return (
    <>
    <Counter />
    <div className='product-container'>
      {products.map((elem) => {
        return <ProductCard  key={elem.id} product={elem} del={deleteProduct} />
      })}
    </div>
    </>
  )
}

export default App