import React, { useEffect, useState } from "react";

function DisplayImages(idCompany: string) {
  const [bannerImages, setBannerImages] = useState([]);

  useEffect(() => {
    async function fetchBanners() {
      let res = await fetch("../public/client-banners/" + idCompany);
      let data = res.json;

      setBannerImages(bannerImages);
    }
  });

  return (
    <>
      <div className="image-gallery">
        {bannerImages.map((banner) => (
          <div key={banner.id} className="image-item">
            <img
              src={`${banner.filename}`}
              alt={`Image ${banner.id}`}
              style={{ width: "200px", height: "150px", margin: "10px" }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayImages;
