import Image from "next/image";
import nextImage from "@/assets/nextjs3.webp"

const AlbumPage = () => {
     return (
          <div>
               <h1>Using Image Component</h1>
               <Image
                    src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png"
                    alt="next logo"
                    width={800}
                    height={800}
               />

               <h2>use Local image</h2>
               <Image
                    src={nextImage}
                    alt="next logo"
                    width={800}
                    height={800}
               />

               
          </div>
     );
};

export default AlbumPage;