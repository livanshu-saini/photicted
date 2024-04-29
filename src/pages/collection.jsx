import { useEffect, useState } from 'react'
import Image from '../components/image/Image'
import { gridData } from '../data'


const categoryData = [
  { id: 1, name: "landscape", value: "landscape" },
  { id: 2, name: "astro", value: "astro" },
  { id: 3, name: "macro", value: "macro" },
  { id: 4, name: "architeture", value: "architeture" },
  { id: 5, name: "monochrome", value: "monochrome" },
  { id: 6, name: "lookUps", value: "lookUps" },
]




const Collection = () => {


  const [selectedCat, setSelectedCat] = useState("landscape");
  const [data, setData] = useState(gridData);


  useEffect(() => {
    const handleFilter = () => {
      const filtererdData = gridData.filter((item) => item.category === selectedCat);
      setData(filtererdData);
    }
    handleFilter();
  }, [selectedCat])

  return (
    <div className='flex flex-col flex-1 bg-white'>
      <div className='flex justify-center items-center py-6 bg-white w-full'>
        <h1 className='text-3xl'>collection</h1>
      </div>
      <div className='flex flex-1 min-h-[15vh] max-h-screen rounded-t-2xl bg-bgWhite'>
        <div className='flex flex-1 justify-center items-center'>
          <div className='flex flex-col gap-4 justify-start items-start'>
            {
              categoryData.map((category) => (
                <button onClick={() => {
                  setSelectedCat(category.value)
                }} key={category.id} className='text-xl cursor-pointer hover:scale-110 transition-all'>
                  <h3 className={selectedCat === category.value ? "underline" : ""}>
                    {category.name}
                  </h3>
                </button>
              ))
            }
          </div>
        </div>
        <div className='flex flex-[4] flex-col gap-10 p-10 overflow-scroll'>
          <div className='flex flex-wrap gap-10 items-center'>
            {
              data.map((grid,index) => (
                <Image key={index} showImgUrl={grid.showImgUrl} downloadImgUrl={grid.downloadImgUrl}
                  name={grid.name}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
