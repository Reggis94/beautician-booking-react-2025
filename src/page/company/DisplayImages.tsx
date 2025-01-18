import React, { useEffect, useState } from "react";

function DisplayImages(idCompany: string) {
  const [bannerImages, setBannerImages] = useState([]);

  useEffect(() => {
    async function fetchBanners() {
      try {
        console.log(idCompany.idCompany);
        let res = await fetch(
          "../public/client-banners/" + idCompany.idCompany + "/banners.json"
        );
        let data = res.json();
        console.log(data);
        if (res.ok) {
          console.log("OK");
        }
        setBannerImages(await data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBanners();
  });

  return (
    <>
      <div className="image-gallery" style={{ width: "100%", padding: 0 }}>
        {bannerImages.map((banner) => (
          <div
            key={banner.id}
            className="image-item"
            style={{ width: "100%", margin: 0, padding: 0 }}
          >
            <img
              src={`/public/client-banners/${idCompany.idCompany}/${banner.filename}`}
              alt={`Image ${banner.id}`}
              style={{
                width: "100%",
                margin: 0,
                padding: 0,
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayImages;
