"use client"

import FileSaver from 'file-saver';
 
export default function Buttons({imageUrl,handleShare}:ButtonProps) {
    const handleDownload = ()=>{
        FileSaver.saveAs(imageUrl,'image.jpg');
    }
  return (
    <div className="flex justify-center px-3 md:px-10 space-x-5 pb-8">
        <button className="buttons" onClick={handleShare}>Save to Gallery?</button>
        <button className="buttons" onClick={handleDownload}>Download</button>
    </div>
  )
}
