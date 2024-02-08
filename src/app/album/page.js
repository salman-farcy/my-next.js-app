import Image from "next/image";


const AlbumPage = () => {
     return (
          <div>
               <h1>This is image add </h1>
               <Image
                    src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png"
                    alt="next logo"
                    width={800}
                    height={800}
               />
          </div>
     );
};

export default AlbumPage;