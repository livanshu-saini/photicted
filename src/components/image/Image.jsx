import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";


const Image = ({ downloadImgUrl, showImgUrl, name }) => {


  const handleDownload = () => {

    const fileId = extractGoogleDriveFileId(downloadImgUrl);
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      const downloadLink = document.createElement('a');
      downloadLink.href = downloadUrl;
      downloadLink.download = name ?? "photicted"; // You can set the desired file name here
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
    else {
      alert("Invalid URL please add drive link")
    }
  };


  const extractGoogleDriveFileId = (url) => {
    const match = url.match(/\/file\/d\/([^/]+)\//);
    return match ? match[1] : null;
  };

  return (
    <div className='w-[30%] relative rounded-md group transition-all duration-500'>
      <img src={showImgUrl} alt="gridimage"
        className='h-full w-full object-contain rounded-md transition-all group-hover:scale-105 duration-500'
      />

      <div className='absolute invisible group-hover:visible top-0 right-0 rounded-md left-0 bottom-0 bg-[rgba(0,0,0,.4)] flex justify-center items-center gap-5 group-hover:scale-105 transition-all duration-500'>
        <button onClick={handleDownload}>
          <BsDownload size={28} color='white' />
        </button>
      </div>
    </div>
  )
}

export default Image
